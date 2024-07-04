import { useSearchParams } from "react-router-dom"
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import BlogFullDetails from "../components/BlogFullDetails";
import { useNavigate } from 'react-router-dom';
import AuthContext from '../../context/AuthContext'


function BlogDetails() {
    const [searchParams] = useSearchParams();
    const searchParam = searchParams.get('$data');
    const [cardDetails,setCardDetails] = useState();
    const { isValidate } = useContext(AuthContext)
    const nevigate = useNavigate();

    const GetblogDetails = async() =>{
        try {
           let res = await axios.get(`/getBlogDetails/?id=${searchParam}`);
           setCardDetails(res?.data?.post)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(()=>{
      if (isValidate === false) {
        nevigate('/auth/login');
        return;
      }
      GetblogDetails();
    },[searchParam,nevigate])


    return (
        <div>
          <BlogFullDetails content={cardDetails} />
        </div>
    )
}

export default BlogDetails