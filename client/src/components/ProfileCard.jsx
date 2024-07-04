/* eslint-disable no-unused-vars */
import { useContext, useEffect, useState } from 'react';
import '../style/profile/profileCard.css'
import axios from 'axios';
import UserContext from '../../context/UserContext';

function ProfileCard() {
  const [getProfileData, updateProfileData] = useState();
  const {setUser} = useContext(UserContext);

  const profileData = async () => {
    try {
      let res = await axios.get('/profile');
      updateProfileData(res?.data?.user)
      setUser(res?.data?.user)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    profileData();
  },[])



  return (
    <section className="profileCard" >
      <div>
        <img src="/profile.svg" alt="" width={150} />
        <p> {getProfileData?.username} </p>
      </div>
    </section>
  )
}

export default ProfileCard