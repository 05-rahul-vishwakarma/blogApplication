/* eslint-disable no-unused-vars */
import Card from '../components/Card'
import '../style/home.css'
import { useContext, useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import Loader from '../components/Loader';


function Home() {
  const [cardData, setCardData] = useState([]);
  const [loader, setLoader] = useState(true);

  const getBlogData = async () => {
    try {
      let res = await axios.get('/allBlogpost');
      if (res?.data?.status === 200) {
        setCardData(res?.data?.allBlogPosts)
        setLoader(!loader)
      }
    } catch (error) {
      console.log(error);
    }
  }

  console.log(cardData);

  useEffect(() => {
    getBlogData();
  }, [])

  return loader ? (
    <Loader />
  ) : (
    <section className='home'>
      {
        cardData.map((item, index) => (
          <Card key={index} content={item} />
        ))
      }
    </section >
  )
}

export default Home
