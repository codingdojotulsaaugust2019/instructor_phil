const controller = require('./../controllers/Users');

module.exports = (app) => {
  app.get('/users', controller.index);
  app.get('/new/:name', controller.create);
  app.get('/:name', controller.show);
  app.get('/remove/:name', controller.remove);
  app.post('/users', controller.addUser);
}
