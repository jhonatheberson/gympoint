import { Router } from 'express';

const routes = new Router();

routes.get('/', async (req, res) => {
  // console.log('HelloWorld');

  return res.status(200).json({ sucess: 'HelloWorld' });
});

module.exports = routes;
