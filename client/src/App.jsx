// App.js
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PostBlog from "./pages/PostBlog";
import AllPost from './pages/AllPosts';
import Home from './pages/Home';
import MainLayout from './components/layouts/MainLayout';
import AuthLayout from './components/layouts/AuthLayout';
import Login from './pages/Login';
import Register from './pages/Register';
import BlogDetails from './pages/BlogDetails';
import Profile from './pages/Profile';
import PrivateRoute from './PrivateRoute';
import axios from 'axios';
// import { Suspense } from 'react';

// axios.defaults.baseURL = 'http://localhost:8000';
// axios.defaults.withCredentials = true;

axios.defaults.baseURL = 'https://blogapplicatonbackend.onrender.com';
axios.defaults.withCredentials = true;

function App() {
  return (

    <Router>
      <Routes>
        {/*--------------------------------------- home page contents ---------------------------- */}
        <Route path='/' element={<MainLayout />} >
          <Route path='/' element={<Home />} />
          <Route path='home' element={<Home />} />
          <Route path='home/blog-details' element={<BlogDetails />} />
          <Route path='allpost' element={<AllPost />} />

          {/* Protected routes */}
          <Route path='create' element={<PrivateRoute><PostBlog /></PrivateRoute>} />
          <Route path='profile' element={<PrivateRoute><Profile /></PrivateRoute>} />
        </Route>

        {/*--------------------------------------- auth page contents ---------------------------- */}
        <Route path='auth' element={<AuthLayout />}>
          <Route path='login' element={<Login />} />
          <Route path='register' element={<Register />} />
        </Route>
        
      </Routes>
    </Router>

  );
}

export default App;
