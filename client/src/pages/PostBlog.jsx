import CreatePost from '../components/CreatePost'
import ProfileCard from '../components/ProfileCard'
import '../style/postBlog/postblog.css'
import AuthContext from '../../context/AuthContext'
import { useContext } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'

function PostBlog() {
  const nevigate = useNavigate();
  const { isValidate } = useContext(AuthContext)
  
  useEffect(()=>{
    if (isValidate === false) {
    nevigate('/auth/login')
    }
  },[isValidate])


  return (
    <main className="createPage" >
      <section className='postSection' >
       <CreatePost/>
      </section>
      <section className='profileSection' >
        <ProfileCard/>
        <h3>Posts</h3>
      </section>
    </main>
  )
}

export default PostBlog