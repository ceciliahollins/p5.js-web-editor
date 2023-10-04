import { Router } from 'express';
import { renderIndex } from '../views/index';

const router = new Router();

// this is intended to be a temporary file
// until i figure out isomorphic rendering

router.get('/', (req, res) => {
  res.send(renderIndex());
});
