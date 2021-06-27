import React from 'react';
import logo from './logo.svg';
import './App.css';
import Main from './Components/main/main';
import { useDispatch } from 'react-redux';
import { getUsers } from './Store/Slices/users.slice';
import { getPhotos } from './Store/Slices/photos.slice';
import { getPosts } from './Store/Slices/posts.slice';
import { getComments } from './Store/Slices/comments.slice';
import axios from 'axios';
import { BrowserRouter as Router } from 'react-router-dom';

let appInitialized = false;

function App () {
  const dispatch = useDispatch();
  if (!appInitialized) {
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(users => dispatch(getUsers(users.data)))
    .catch((error: Error) => console.log(error.message));
  axios.get('https://jsonplaceholder.typicode.com/photos')
    .then(photos => dispatch(getPhotos(photos.data)))
    .catch((error: Error) => console.log(error.message));
  axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(posts => dispatch(getPosts(posts.data)))
    .catch((error: Error) => console.log(error.message));
  axios.get("https://jsonplaceholder.typicode.com/comments")
    .then(comments => dispatch(getComments(comments.data)))
    .catch((error: Error) => console.log(error.message));
  appInitialized = true;
  }
  return (
    <Router>
      <Main></Main>
    </Router>
  );
}

export default App;
