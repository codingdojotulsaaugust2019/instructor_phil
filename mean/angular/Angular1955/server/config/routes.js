const controller = require('./../controllers/Users');

module.exports = (app) => {
  // ------------------- api routes connected to angular app -------------------
  app.get('/users', controller.index);
  app.post('/users', controller.addUser);
  // -------------------- end of api routes for angular app --------------------
  app.get('/new/:name', controller.create);
  app.get('/:name', controller.show);
  app.get('/remove/:name', controller.remove);
}
