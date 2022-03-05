# AuthService

A fullstack app using MERN stack:

- **Database**: MongoDb
- **Backend**: NodeJS and Express
- **Frontend**: React

to login/ authorize the user.

**Our App allows users to:**

1. Register
2. Log in
3. Access protected pages only accessible to logged in users
4. Stay logged in when they close the app or refresh the page
5. Log out

---

## Authors

- [Rohit Kumar @stenzr](https://github.com/stenzr)

</br>

---

## Tech Stack

**Server:** Express \
**Language:** JavaScript \
**Database:** MongoDb \
**Frontend:** React JS \
**State Management:** Redux

<!---**Container:** Docker, Docker-Compose \ -->

</br></br>

---

## API Reference

</br>

#### Register a new user

```http
  POST api/users/register
```

| Parameter         | Type     | Description                        |
| :---------------- | :------- | :--------------------------------- |
| `username`        | `string` | **Required**. username to register |
| `email`           | `string` | **Required**. email id of user     |
| `password`        | `string` | **Required**. password of the user |
| `confirmPassword` | `string` | **Required**. password of the user |

</br>

#### Sample Request

```json
{
  "name": "Rohit Kumar",
  "email": "rohit1@autho.com",
  "password": "rohit_password1 ",
  "confirmPassword": "rohit_password1"
}
```

#### Sample Response

```json
{
  "msg": "Succesfully Registered"
}
```

</br>

#### Login a user

```http
  POST api/users/login
```

| Parameter  | Type     | Description                        |
| :--------- | :------- | :--------------------------------- |
| `email`    | `string` | **Required**. email id of user     |
| `password` | `string` | **Required**. password of the user |

</br>

#### Sample Request

```json
{
  "email": "rohit1@autho.com",
  "password": "rohit_password1 "
}
```

#### Sample Response

```json
{
  "success": true,
  "msg": "User successfully logged in",
  "token": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMjMzZDMxNTUxNDc3ZmFiYjBlNzZhNCIsIm5hbWUiOiJSb2hpdCBLdW1hciIsImlhdCI6MTY0NjQ4MjM1NCwiZXhwIjoxNjc4MDM5MjgwfQ.N8BUmTS2w82E3ORX4n9tv21r8AT9TT5I3I9-K6KqzSM"
}
```

</br>

</br>

---

## Build Details:

</br></br>

#### To build the project on your system

</br>

- [x] Open your terminal in the required directory
      </br></br>

- [x] Clone the repository

```bash
  git clone git@github.com:stenzr/authService.git
```

</br>

- [x] CD to the project directory

```bash
  cd authService
```

</br>

- [x] Install the required modules

```bash
  npm install
```

</br>

- [x] Start server

```bash
  nodemon run start
```

</br>

</br>

- [x] The server starts on localhost:5000
      </br></br>

- [x] Use Postman to send request to the endpoints
      </br></br>

---
