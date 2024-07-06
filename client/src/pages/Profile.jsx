import '../style/profile/profilePage.css'
import ProfileCard from '../components/ProfileCard'
import ProfilePostCard from '../components/ProfilePostCard'
import axios from 'axios'
import { useEffect, useState } from 'react'

function Profile() {

     const [profile,setProfile] = useState([]);
     console.log(profile);

     const ProfileData = async () => {
        try {
            let res = await axios.get('/profile');
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
                        profile.map((index,item)=>(
                            <ProfilePostCard key={index} content={item} />
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Profile