# Project Management


![Logo](https://wiki.tino.org/wp-content/uploads/2021/07/word-image-1155.png)





![shields](https://img.shields.io/github/package-json/v/Dung24-6/Product-Management-Nodejs?logo=D)
[![Stars](https://img.shields.io/github/stars/Dung24-6?affiliations=OWNER&style=social)](https://github.com/Dung24-6/Product-Management-Nodejs)
![Nodemon](https://img.shields.io/github/package-json/dependency-version/Dung24-6/Product-Management-Nodejs/dev/nodemon)
![Express](https://img.shields.io/github/package-json/dependency-version/Dung24-6/Product-Management-Nodejs/express)

Table of contents
-----------------
* [Installation](#installation)
* [Environment Variables](#environment-variables)
* [Demo](#demo)
* [Features](#features)
* [API Reference](#api-reference-example-there-are-many-api-i-dont-write-here)
* [Tech Stack](#tech-stack)
* [Authors](#authors)
* [About Me](#about-me)
* [Skills](#skills)
## Installation

First , clone project and go to root file . Create .env file and add environment variables

```bash
  npm install 
  npm start
```
Or for dev , use nodemon

```bash
  npm run server
```





## Environment Variables

To run this project, you will need to add the following environment variables to your .env file. SECRET_KEY can random

`PORT = ?`

`USER = ? `

`DATABASE_PORT = ? `

`HOST = ? `

`DATABASE = ? `

`PASSWORD = ? `

## Demo

Use Postmen to test it or you can build front-end to call API



## Features

- It's a back-end of social-media app
- You can call API to get information
- User API : Get user , Create User , Delete User , ...
- There are many api i will complete

## API Reference Example (There are many API I don't write here)

#### Get all users 

```http
  GET /user
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `No` | `/` | Get all user of the list |

#### Get user

```http
  GET /user/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of user to fetch |




## Tech Stack

**Back-end:** Node, Express

## Authors

- [@Dung24-6](https://github.com/Dung24-6)



## 🚀 About Me
I'm a back-end developer...


## 🛠 Skills
Javascript, NodeJs, Express, PostgresQL, mongoDB, postman, ...

