import express, { request, response } from 'express';
import { createUser, getUser, getUsers, deleteUsers, updateUser } from '../controllers/user.js';
const router = express.Router();

// get 1 list of Users from /users
router.get('/', getUsers);

// post a user method from /users
router.post('/', createUser);

// get a single user from users/id(param)
router.get('/:id', getUser);

// delete user method
router.delete('/:id', deleteUsers);

// patch a user with ID method
router.patch('/:id', updateUser);

//123
export default router;