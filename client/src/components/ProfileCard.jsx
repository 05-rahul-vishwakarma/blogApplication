/* eslint-disable no-unused-vars */
import { useContext, useEffect, useState } from 'react';
import '../style/profile/profileCard.css'
import axios from 'axios';
import ImageUploading from 'react-images-uploading';
import { toast } from 'react-toastify';
import useAxiosPrivate from '../hooks/axiosPrivate';
import { useNavigate } from 'react-router-dom';


function ProfileCard() {

  let navigate = useNavigate();


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



  const [images, setImages] = useState([]);
  const maxNumber = 1;
  const maxFileSize = 5 * 1024 * 1024; // 5MB

  const onChange = (imageList, addUpdateIndex) => {
    setImages(imageList);
    console.log(imageList[0]);
  };
  const axiosPrivate = useAxiosPrivate();
  const [getProfileData, updateProfileData] = useState();
  const [profile, setProfile] = useState();





  const profileData = async () => {
    try {
      let res = await axiosPrivate.get('/profile');
      if (!res?.data?.status === "ok") return navigate("/auth/login");
      setProfile(res?.data?.user?.profilePhoto)
      updateProfileData(res?.data?.user)
    } catch (error) {
      console.log(error);
    }
  }


  const uploadProfilePhoto = async () => {
    try {
      let file = images;
      let base64Data = await get64encoding(file);
      if (!base64Data) toast.error("Please select a file first");
      const data = {
        profilePhoto: base64Data
      }
      let res = await axios.post('/uploadProfilePhoto', data);
      window.location.reload();
      toast.success(res?.data?.message)
    } catch (error) {
      console.log(error);
    }
  }


  useEffect(() => {
    profileData();
  }, [])



  return (
    <section className="profileCard" >
      <div>
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

                {
                  profile ?
                    <div className="image-item" >
                      <img src={profile} alt="" width="100" style={{ marginTop: "1rem" }} />
                    </div> :
                    <>
                      {images.length === 0
                        ? <div className="" >
                          <img src="/profile.svg" alt="" width="100" style={{ marginTop: "1rem" }} />
                        </div>
                        : <></>
                      }
                    </>
                }



              </button>
              &nbsp;
              {imageList.map((image, index) => (
                <div key={index} className="image-item">
                  <img src={image['data_url']} alt="" width="100" className='img' />
                </div>
              ))}
            </div>
          )}
        </ImageUploading>
      </div>
      <div className='btn' style={{ margin: "1rem", textAlign: "center", cursor: "pointer" }} onClick={uploadProfilePhoto}  >
        post
      </div>
    </section>
  )
}

export default ProfileCard