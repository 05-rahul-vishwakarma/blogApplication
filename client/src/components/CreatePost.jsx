/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useContext } from "react";
import ImageUploading from "react-images-uploading";
import '../style/postBlog/createPost.css'
import axios from 'axios'
import moment from 'moment';
import { toast } from 'react-toastify';
import {  useNavigate } from 'react-router-dom'
import { UserContext } from "../../context/UserContext";
// import moment from 'moment';



async function get64encoding(file) {
  try {
    if (file) {
      let image = file[0];
      if (!image) {
        alert("no file choosen");
        return false;
      }
      return image?.data_url || false;
    }
  } catch (error) {
    console.log(error);
    return false;
  }
}

function CreatePost() {
  const nevigate = useNavigate();
  const [topic, setTopic] = useState("");
  const [images, setImages] = useState([]);
  const [about, setAbout] = useState('');
  const {user} = useContext(UserContext);


  const formattedDate = moment().format('YYYY-MM-DD');
  console.log(formattedDate);

  const maxNumber = 1;
  const maxFileSize = 5_000_000;


  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };


  const blogPost = async () => {
    try {
      let file = images;
      let base64Data = await get64encoding(file);
      const data = {
        blogTopic: topic,
        blogImage: base64Data,
        blogWriting: about
      }
      console.log(data);
      let res = await axios.post('/blogPost', data);
      console.log(res);
      if(res?.data?.status === 200){
        toast.success(res?.data?.message)
        nevigate('/home')
        
      }else{
        toast.error(res?.data?.message)
      }

    } catch (error) {
      console.log(error);
    }

  }




  return (
    <section className="createPost" >
      <div>
        <h1 className='truncate ' >
          <input value={topic} onChange={(e) => setTopic(e.target.value)} type="text" className="topic truncate " placeholder="how to design a greate landing page" name="" id="" style={{ width: "100%", padding: "1rem 0", border: "none", outline: "none", fontSize: "2rem" }} />
        </h1>
        <div>
          <p className='truncate postAuthor ' > <span style={{ color: "red", }} >By: </span>{user?.username}</p>
          <p className='createPostDate' > {formattedDate} </p>
        </div>
        <div className='createPostImg' style={{cursor:"pointer"}} >
          <ImageUploading
            multiple
            value={images}
            onChange={onChange}
            maxNumber={maxNumber}
            maxFileSize={maxFileSize}
            dataURLKey="data_url"
          >
            {({
              imageList,
              onImageUpload,
              onImageUpdate,
              onImageRemove,
              isDragging,
              dragProps,
            }) => (
              // write your building UI
              <div className="upload__image-wrapper" style={{}} >
                <button
                  style={isDragging ? { color: 'red' } : undefined}
                  onClick={onImageUpload}
                  {...dragProps}
                >
                  {/* 
                  {
                    imageList ? <></> : 
                    
                  } */}

                  {images.length === 0
                    ? <div className="uploadIcon" >
                      <img src="/upload.svg" alt="" style={{ width: "200px" }} />
                      <h1>Post the Blog</h1>
                    </div>
                    : <></>}

                </button>
                &nbsp;
                {imageList.map((image, index) => (
                  <div key={index} className="image-item">
                    <img src={image['data_url']} alt="" width="100" />
                  </div>
                ))}
              </div>
            )}
          </ImageUploading>
        </div>
        <div className="postText" >
          <textarea name="" id="" value={about} onChange={(e) => setAbout(e.target.value)} rows={4} placeholder="Write something about post" ></textarea>
        </div>
        <button className="btn" onClick={()=>blogPost()}  >
          post
        </button>
      </div>
    </section>
  )
}

export default CreatePost