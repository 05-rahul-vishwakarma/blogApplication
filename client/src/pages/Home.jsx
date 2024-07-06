/* eslint-disable no-unused-vars */
import Card from '../components/Card'
import '../style/home.css'
import { useContext, useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import axios from 'axios';


function Home() {
  const [cardData, setCardData] = useState([]);

  const allBlogPosts = async () => {
    try {
      let res = await axios.get('/allBlogpost');
      setCardData(res?.data?.allBlogPosts)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    allBlogPosts();
  },[]);


  return (
    <main className='home'>
      {
        cardData.map((item, index) => (
          <Card key={index} content={item} />
        ))
      }
    </main>
  )
}

export default Home