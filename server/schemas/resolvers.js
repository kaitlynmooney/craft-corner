/* DEPENDENCIES */
const { User, Project, Craft } = require("../models");
const { signToken, AuthenticationError } = require("../utils/auth");

/* RESOLVERS */
const resolvers = {
  Query: {
    users: async () => {
      return User.find();
    },
    user: async (parent, { username }) => {
      return User.findOne({ username });
    },
    me: async (parent, args, context) => {

      console.log("hello in me query");
      console.log(`me query context user`, context.user);
      if (context.user) {
        try{
        const user = await User.findOne({ _id: context.user._id })
          .populate("savedCrafts")
          .populate("authoredProjects")
          .populate("completedProjects")
          .populate("ongoingProjects");
          console.log(user);

        return user;
      } catch (error){
        console.error("Error fetching user data:", error);
        throw new Error("Error fetching user data");
      }
      }
      throw new AuthenticationError("You need to be logged in!");
    },
    crafts: async () => {
      return Craft.find().populate();
    },
    craft: async (parent, { name }) => {
      return Craft.findOne({ name });
    },
    allProjects: async () => {
      return await Project.find().populate("craft");
    },
    project: async (parent, { projectId }, context) => {
      const project = await Project.findOne({ _id: projectId }).populate(
        "craft"
      );
      console.log(project);
      return project;
    },
  },

  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });
      if (!user) {
        throw AuthenticationError;
      }

      const correctPw = await user.isCorrectPassword(password);
      if (!correctPw) {
        throw AuthenticationError;
      }

      const token = signToken(user);
      return { token, user };
    },
    changeAvatar: async (parent, { username, avatar }) => {
      try {
        const user = await User.findOne({ username });
        if (!user) {
          throw new Error("User not found");
        }

        user.avatar = avatar;
        await user.save();
        return user;
      } catch (error) {
        console.error(error);
        throw new Error("Failed to change avatar");
      }
    },

    addSurveyPricePoint: async (parent, { username, surveyPricePoint }) => {
      try {
        const user = await User.findOne({ username });
        if (!user) {
          throw new Error("User not found");
        }

        user.surveyPricePoint = surveyPricePoint;
        await user.save();
        return user;
      } catch (error) {
        console.error(error);
        throw new Error("Failed to save survey price point");
      }
    },

    createProject: async (
      parent,
      { name, materials, instructions, pricePoint, difficulty, craft, authorId }
    ) => {
      console.log("In create project");
      // Find craft by name
      const craftType = await Craft.findOne({ name: craft });
      if (!craftType) {
        throw new Error("Craft not found");
      }

      // Find author by ID
      const author = await User.findById(authorId);
      if (!author) {
        throw new Error("Author not found");
      }

      // Create new project
      const newProject = await Project({
        name,
        materials,
        instructions,
        pricePoint,
        difficulty,
        craft: craftType._id,
        author: authorId,
      });
      console.log(newProject);
      await newProject.save();

      // Add project to the author's list of authored projects
      await User.findByIdAndUpdate(
        authorId,
        { $push: { authoredProjects: newProject._id } },
        { new: true, useFindAndModify: false }
      );
      console.log(author);

      // Add project to the craft's list of projects
      await Craft.findByIdAndUpdate(
        craftType._id,
        { $push: { projects: newProject._id } },
        { new: true, useFindAndModify: false }
      );
      console.log(craftType);

      return newProject;
    },
    deleteProject: async (parent, { id }) => {
      return await Project.findByIdAndDelete(id);

    },
  },
}

/* EXPORTS */
module.exports = resolvers;
