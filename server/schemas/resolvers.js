/* DEPENDENCIES */

/* RESOLVERS */
const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      return "Temp, change to actual fn";
    },
  },
};

/* EXPORTS */
module.exports = resolvers;
