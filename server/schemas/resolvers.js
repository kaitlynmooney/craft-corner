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
        const user = User.findOne({ _id: context.user._id });
        return user;
      }
      throw AuthenticationError;
    },
    crafts: async () => {
      return Craft.find();
    },
    craft: async (parent, { name }) => {
      return Craft.findOne({ name });
    },
    projects: async () => {
      return Project.find();
    },
    project: async (parent, args, context) => {
      if (context.project) {
        const project = Project.findOne({ _id: context.project._id });
        return project;
      }
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
  },
};

/* EXPORTS */
module.exports = resolvers;
