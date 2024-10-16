/* commonjs
const express = require('express')
require('dotenv').config()*/

import express from 'express'//module.js   async

import dotenv from 'dotenv';
dotenv.config();

const app = express();
const port = process.env.PORT || 4000;

// app.use(express.static('dist'));

const data = [
    {
      "id": 1,
      "title": "Introduction to JavaScript",
      "content": "JavaScript is a versatile programming language commonly used in web development."
    },
    {
      "id": 2,
      "title": "Getting Started with React",
      "content": "React is a popular JavaScript library for building user interfaces."
    },
    {
      "id": 3,
      "title": "Understanding Node.js",
      "content": "Node.js is a runtime environment that allows you to run JavaScript on the server."
    },
    {
      "id": 4,
      "title": "Introduction to HTML",
      "content": "HTML is the standard markup language for creating web pages."
    },
    {
      "id": 5,
      "title": "Introduction to CSS",
      "content": "CSS is used to style HTML elements and control the layout of web pages."
    },
    {
      "id": 6,
      "title": "What is Express.js?",
      "content": "Express.js is a minimal and flexible Node.js web application framework."
    },
    {
      "id": 7,
      "title": "Understanding Git and GitHub",
      "content": "Git is a version control system, and GitHub is a platform for hosting and collaborating on code repositories."
    }
  ]
  
// app.get('/', (req, res)=>{
//     res.send("Server is ready");
// })

app.get('/api/info', (req, res)=>{
    res.json(data);
})


app.listen(port, (req, res)=>{
    console.log(`Serve at http://localhost:${port}`);
})
