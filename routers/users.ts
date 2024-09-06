import express from 'express';
import User from '../models/User';
import mongoose from 'mongoose';

const userRouter = express.Router();

userRouter.post('/', async (req, res, next) => {
  try {
    const user = new User({
      username: req.body.username,
      password: req.body.password,
    })

    user.generateToken();

    await user.save();
    return res.send(user);
  } catch (error) {
    if (error instanceof mongoose.Error.ValidationError) {
      return res.status(400).send(error);
    }
    return next(error);
  }
})

userRouter.post('/session', async (req, res, next) => {
  try  {
    const user = await User.findOne({username: req.body.username});

    if (!user) {
      return res.status(404).send('User not found!');
    }

    const isMatch  = await user.checkPassword(req.body.password);

    if (!isMatch) {
      return res.status(401).send('Incorrect password!');
    }

    user.generateToken();
    await user.save();

    return res.send(user);
  } catch (error) {
    next(error);
  }
})

export default userRouter;