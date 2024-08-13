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
      if (context.user) {
        const user = User.findOne({ _id: context.user._id })
          .populate("savedCrafts")
          .populate("authoredProjects")
          .populate("completedProjects")
          .populate("ongoingProjects");
        return user;
      }
      throw AuthenticationError;
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

      console.log("Craft type", craftType);
      // Find author by ID
      const author = await User.findById(authorId);
      if (!author) {
        throw new Error("Author not found");
      }

      console.log("Author", author);
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

      // Add project to the author's list of authored projects
      author.authoredProjects.push(newProject._id);
      await author.save();
      console.log(author);

      // Add project to the craft's list of projects
      craftType.projects.push(newProject._id);
      await craftType.save();
      console.log(craftType);

      await newProject.populate("author");

      return newProject;
    },
    deleteProject: async (parent, { id }) => {
      return await Project.findByIdAndDelete(id);
    },
  },
};

/* EXPORTS */
module.exports = resolvers;
