
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PostBlog from "./pages/PostBlog";
import AllPost from './pages/AllPosts'
import Home from './pages/Home'
import MainLayout from './components/layouts/MainLayout';
import AuthLayout from './components/layouts/AuthLayout';
import Login from './pages/Login';
import Register from './pages/Register';
import axios from 'axios';
import {UserProvider} from '../context/UserContext'
import BlogDetails from './pages/BlogDetails';

// axios.defaults.baseURL = 'https://blogapplicaton-1.onrender.com';
// axios.defaults.withCredentials = true;

axios.defaults.baseURL = 'http://localhost:8000';
axios.defaults.withCredentials = true;


function App() {

  return (
    <UserProvider>
      <Router>
        <Routes>
          {/*--------------------------------------- home page contents ---------------------------- */}
          <Route path='/' element={<MainLayout />}  >
            <Route path='/' element={<Home />} />
            <Route path='home' element={<Home />}/> 
            <Route path='home/blog-details' element={<BlogDetails/>}  />
            <Route path='create' element={<PostBlog />} />
            <Route path='allpost' element={<AllPost />} />
          </Route>

          {/*--------------------------------------- auth page contents ---------------------------- */}
          <Route path='auth' element={<AuthLayout />}  >
            <Route path='login' element={<Login />} />
            <Route path='register' Component={Register} />
          </Route>

        </Routes>
      </Router>
    </UserProvider>
  )
}

export default App
