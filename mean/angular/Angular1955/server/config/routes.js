const controller = require('./../controllers/Users');

module.exports = (app) => {
  // ------------------- api routes connected to angular app -------------------
  app.get('/users', controller.index);
  app.post('/users', controller.addUser);
  app.get('/users/:userId', controller.showOne);
  app.put('/users/:userId', controller.update);
  app.delete('/users/:userId', controller.delete);
  // -------------------- end of api routes for angular app --------------------

  // -------------------- the below routes are from the original 1955 assignment --------------------
  app.get('/new/:name', controller.create);
  app.get('/:name', controller.show);
  app.get('/remove/:name', controller.remove);
}
