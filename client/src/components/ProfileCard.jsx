/* eslint-disable no-unused-vars */
import { useContext, useEffect, useState } from 'react';
import '../style/profile/profileCard.css'
import axios from 'axios';
import ImageUploading from 'react-images-uploading';
import { toast } from 'react-toastify';
import useAxiosPrivate from '../hooks/axiosPrivate';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../../context/UserContext';


function ProfileCard() {

  let navigate = useNavigate();
  const { user, setUser } = useUser();

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
      return false;
    }
  }



  const [images, setImages] = useState([]);
  const maxNumber = 1;
  const maxFileSize = 5 * 1024 * 1024; // 5MB

  const onChange = (imageList, addUpdateIndex) => {
    setImages(imageList);
  };

  const [getProfileData, updateProfileData] = useState();
  const [profile, setProfile] = useState();




  const ProfileData = async () => {
    try {
      let res = await axios.get('/profile', { withCredentials: true });
      if (res?.data?.status !== 200) return navigate("/auth/login");
      setProfile(res?.data?.user?.posts);
      setUser(res?.data?.user)
    } catch (error) {
      toast.error(error.message)
    }
  }



  const uploadProfilePhoto = async () => {
    try {
      let file = images;
      console.log(file);
      if (!file) {
        toast.error('please choose any update')
        return;
      }
      let base64Data = await get64encoding(file);
      if (!base64Data) toast.error("Please select a file first");
      const data = {
        profilePhoto: base64Data
      }
      let res = await axios.post('/uploadProfilePhoto', data);
      toast.success(res?.data?.message)
    } catch (error) {
      toast.error(error?.message)
    }
  }


  useEffect(() => {
    ProfileData();
  }, [])



  return (
    <section className="profileCard" >
      <div>
        <ImageUploading
          multiple
          value={images}
          onChange={onChange}
          maxNumber={maxNumber}
          dataURLKey="data_url"
        >
          {({
            imageList,
            onImageUpload,
            isDragging,
            dragProps,
          }) => (
            <div className="upload__image-wrapper">
              <div
                style={{ padding: "1rem" }}
                onClick={onImageUpload}
                {...dragProps}
              >
                {
                  user &&
                  <>
                    {
                      imageList.length === 0 ? <img src={user?.profilePhoto || "/profile.svg"} alt="" width={100} style={{ width: 200 }} />
                        : <>
                          {imageList.map((image, index) => (
                            <div key={index} className="image-item">
                              <img src={image['data_url']} alt="" width="100" style={{ width: "200px" }} />

                            </div>
                          ))}
                        </>
                    }
                  </>
                }

              </div>
              &nbsp;
            </div>
          )}
        </ImageUploading>

      </div>
      <span style={{ marginLeft: "1rem", fontWeight: "600" }} >
        {user?.username}
      </span>
      <div className='btn' onClick={uploadProfilePhoto} style={{ margin: "1rem", textAlign: "center", cursor: "pointer" }}   >
        edit
      </div>
    </section>
  )
}

export default ProfileCard