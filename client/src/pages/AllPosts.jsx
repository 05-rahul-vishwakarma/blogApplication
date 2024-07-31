import Card from "../components/Card";
import axios from "axios";
import '../style/home.css'
import { useEffect, useState } from "react";
import Loader from "../components/Loader";

export default function AllPosts() {
  const [cardData, setCardData] = useState([]);
  const [loader, setLoader] = useState(true);

  const allBlogPosts = async () => {
    try {
      let res = await axios.get('/allBlogpost');
      if (res?.data?.status === 200) {
        setLoader(!loader)
        setCardData(res?.data?.allBlogPosts)
      }
      
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    allBlogPosts();
  }, [])


  return loader ? (
    <Loader />
  ) : (
    <main className='home'>
      {
        cardData.map((item, index) => (
          <Card key={index} content={item} />
        ))
      }
    </main >
  )
}
