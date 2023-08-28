import express from 'express';
import { currentUser } from '@tomtickets/common';

const router = express.Router();

router.get('/api/users/currentuser', currentUser, (req, res) => {
  // console.log('current user from API:', req.currentUser);
  // console.log('current user', req.currentUser);
  res.send({ currentUser: req.currentUser || null });
});

export { router as currentUserRouter };
