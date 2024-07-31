/* eslint-disable no-unused-vars */
import '../style/profile/profilePage.css'
import ProfileCard from '../components/ProfileCard'
import ProfilePostCard from '../components/ProfilePostCard'
import axios from 'axios'
import { useEffect, useState } from 'react'
import useAxiosPrivate from '../hooks/axiosPrivate'
import { useNavigate } from 'react-router-dom'

function Profile() {
    const navigate = useNavigate();
    const [profile, setProfile] = useState([]);
    const axiosPrivate = useAxiosPrivate();

    const ProfileData = async () => {
        try {
            let res = await axios.get('/profile', {withCredentials: true});
            console.log(res);
            if (res?.data?.status !== 200) return navigate("/auth/login");
            setProfile(res?.data?.user?.posts)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        ProfileData();
    }, [])

    return (
        <section className="profileCantainer" >
            <div className='profileCardCantainer' >
                <div className='profileContent' >
                    <ProfileCard />
                </div>
            </div>
            <div className='profilePostCantainer'>
                <div className='cardContent' >
                    {
                        profile.map((index, item) => (
                            <ProfilePostCard key={index} content={item} />
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Profile