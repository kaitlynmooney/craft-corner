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
      console.log("hello");
      console.log(context.user);
      if (context.user) {
        const user = User.findOne({ _id: context.user._id })
          .populate("savedCrafts")
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
      return project;
    },
  },

  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
    addProject: async (parent, { projectId, userId }) => {
      try {
        console.log("addProject");
        const user = await User.findOneAndUpdate(
          { _id: userId },
          { $addToSet: { ongoingProjects: projectId } }
        ).populate("ongoingProjects");
        return user;
      } catch (err) {
        console.log(err);
      }
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
  },
};

/* EXPORTS */
module.exports = resolvers;
