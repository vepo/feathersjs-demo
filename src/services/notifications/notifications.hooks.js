

module.exports = {
  before: {
    all: [],
    find: [],
    get: [],
    create: [
      /**
       * Adicione a data da criação!!! :)
       */
      function (hook) {
        hook.data.criacao = new Date();
      }],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
