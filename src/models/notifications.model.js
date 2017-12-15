// notifications-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const notifications = new Schema({
    titulo: { type: String, required: true },
    descricao: { type: String, required: true },
    criacao: { type: Date, required: true }
  }, {
      timestamps: true
    });

  return mongooseClient.model('notifications', notifications);
};
