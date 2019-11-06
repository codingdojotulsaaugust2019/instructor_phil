const controller = require('./../controllers/Users');

module.exports = (app) => {
  app.get('/', controller.index);
  app.get('/new/:name', controller.create);
  app.get('/:name', controller.show);
  app.get('/remove/:name', controller.remove);
}
