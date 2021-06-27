import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import commentsSlice from './Store/Slices/comments.slice';
import photosSlice from './Store/Slices/photos.slice';
import postsSlice from './Store/Slices/posts.slice';
import usersSlice from './Store/Slices/users.slice';
import { Provider } from 'react-redux';
import { ParseOptions } from 'querystring';
import selectedDataSlice from './Store/Slices/selectedData.slice';

const customizedMiddleware = getDefaultMiddleware({
  serializableCheck: false
});

const store = configureStore({
  reducer: {
    comments: commentsSlice,
    photos: photosSlice,
    posts: postsSlice,
    users: usersSlice,
    selectedData: selectedDataSlice
  },
  devTools: !process.env.NODE_ENV || process.env.NODE_ENV === 'development' ? true : false,
  middleware: customizedMiddleware
});

ReactDOM.render(
  <Provider store={store}>
    {!process.env.NODE_ENV || process.env.NODE_ENV === 'development' ?
       <React.StrictMode>
       <App />
     </React.StrictMode> 
     : 
     <App />}

  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
