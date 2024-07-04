import { useSearchParams } from "react-router-dom"
import axios from "axios";
import { useEffect, useState } from "react";
import BlogFullDetails from "../components/BlogFullDetails";


function BlogDetails() {
    const [searchParams] = useSearchParams();
    const searchParam = searchParams.get('$data');
    const [cardDetails,setCardDetails] = useState();

    const GetblogDetails = async() =>{
        try {
           let res = await axios.get(`/getBlogDetails/?id=${searchParam}`);
           setCardDetails(res?.data?.post)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(()=>{
      GetblogDetails();
    },[])


    return (
        <div>
          <BlogFullDetails content={cardDetails} />
        </div>
    )
}

export default BlogDetails