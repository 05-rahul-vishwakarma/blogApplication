import CreatePost from '../components/CreatePost'
import ProfileCard from '../components/ProfileCard'
import '../style/postBlog/postblog.css'

function PostBlog() {


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