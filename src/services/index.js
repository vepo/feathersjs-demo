const notifications = require('./notifications/notifications.service.js');
module.exports = function (app) {
  app.configure(notifications);
};
