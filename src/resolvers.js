import User from "./schemas/User";

export default {
  Query: {
    users: () => User.find(),
    user: (_, { id }) => User.findById(id),
  },

  Mutation: {
    createUser: (_, { data: { name, email, job } }) =>
      User.create({ name, email, job }),
    deleteUser: (_, { id }) => {
      User.findByIdAndDelete(id);
      return;
    },
  },
};
