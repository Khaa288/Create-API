import { v4 as uuidv4 } from 'uuid';

let Users = [];

// post a user method from /users
export const createUser = (request, response) => {
    const user = request.body;
    const userwithID = {...user, id: uuidv4() };

    Users.push(userwithID);

    response.send(`User: ${user.name} \nMSSV: ${user.MSSV} \nAge: ${user.age} \nAdded to the database!`);
}

// get a single user from users/id(param)
export const getUser = (request, response) => {
    const { id } = request.params;

    const foundUser = Users.find((user) => user.id === id);

    response.send(foundUser);
}

// get 1 list of Users from /users
export const getUsers = (request, response) => {
    console.log(Users);
    response.send(Users);
    //response.send('<h1>HELLO</h1> ');
}

// delete user method
export const deleteUsers = (request, response) => {
    const { id } = request.params;

    Users = Users.filter((user) => user.id !== id);

    response.send(`User with the ${id} deleted from the database!`);
}

// patch a user with ID method
export const updateUser = (request, response) => {
    const { id } = request.params;
    const { name, MSSV, age } = request.body;
    const user = Users.find((user) => user.id === id);

    if (name) user.name = name;
    if (MSSV) user.MSSV = MSSV;
    if (age) user.age = age;

    response.send(`User with the ID ${id} has been updated!`);
}