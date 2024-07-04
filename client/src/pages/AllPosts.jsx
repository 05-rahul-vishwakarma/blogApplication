import Card from "../components/Card";
import axios from "axios";
import '../style/home.css'
import { useContext, useEffect, useState } from "react";
import AuthContext from '../../context/AuthContext'
import { useNavigate } from "react-router-dom";

export default function AllPosts() {
  const [cardData, setCardData] = useState([]);
  const { isValidate } = useContext(AuthContext);
  const nevigate = useNavigate();

  const allBlogPosts = async () => {
    try {
      let res = await axios.get('/allBlogpost');
      setCardData(res?.data?.allBlogPosts)

    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (isValidate === false) {
      nevigate('/auth/login')
    } else {
      allBlogPosts();
    }
  }, [isValidate])
  

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
