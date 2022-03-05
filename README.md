# AuthService

An authservice in Node JS:

- **Database**: MongoDb
- **Backend**: NodeJS and Express

to login/ authorize the user.

**Our App allows users to:**

1. Register
2. Log in

based on JWT tokens

---

## Authors

- [Rohit Kumar @stenzr](https://github.com/stenzr)

</br>

---

## Tech Stack

**Server:** Express \
**Language:** JavaScript \
**Database:** MongoDb

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

#### Response codes

| User Story                                           | Response code | Type      | Response Message                           |
| :--------------------------------------------------- | :------------ | :-------- | :----------------------------------------- |
| New user enters correct details expects registration | `200`         | `success` | `"Succesfully Registered"`                 |
| User Enters an email which is already registered     | `400`         | `failure` | `"Email already exists, try login"`        |
| User leaves the name blank                           | `400`         | `failure` | `"Name cannot be empty"`                   |
| User leaves the e-mail blank                         | `400`         | `failure` | `"E-mail cannot be empty"`                 |
| User enters and invalid e-mail                       | `400`         | `failure` | `"Email is invalid"`                       |
| User leaves the password blank                       | `400`         | `failure` | `"Password field is required"`             |
| User leaves the confirm password blank               | `400`         | `failure` | `"Confirm password field is required"`     |
| User Enters a password less than 8 characters        | `400`         | `failure` | `"Password must be at least 8 characters"` |
| User enters different password, confirm password     | `400`         | `failure` | `"Passwords must match"`                   |

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

#### Response codes

| User Story                                    | Response code | Type      | Response Message                           |
| :-------------------------------------------- | :------------ | :-------- | :----------------------------------------- |
| New user enters correct details expects login | `200`         | `success` | `"User successfully logged in"`            |
| User enters an email which is not registered  | `400`         | `failure` | `"Email not found"`                        |
| User enters a wrong password                  | `400`         | `failure` | `"Password Incorrect"`                     |
| User leaves the e-mail blank                  | `400`         | `failure` | `"E-mail cannot be empty"`                 |
| User enters and invalid e-mail                | `400`         | `failure` | `"Email is invalid"`                       |
| User leaves the password blank                | `400`         | `failure` | `"Password field is required"`             |
| User Enters a password less than 8 characters | `400`         | `failure` | `"Password must be at least 8 characters"` |

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
