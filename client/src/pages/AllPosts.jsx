import Card from "../components/Card";
import axios from "axios";
import '../style/home.css'
import { useEffect, useState } from "react";

export default function AllPosts() {
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
  }, [])

  return (
    <main className='home'>
      {
        cardData.map((item,index)=>(
          <Card key={index} content={item}  />
        ))
      }
    </main>
  )
}
