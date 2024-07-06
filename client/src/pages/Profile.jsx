import '../style/profile/profilePage.css'
import ProfileCard from '../components/ProfileCard'

function Profile() {
    return (
        <section className="profileCantainer" >
            <div className='profileCardCantainer' >
                <div className='profileContent' >
                   <ProfileCard/> 
                </div>
            </div>
            <div className='profilePostCantainer'>
                <div className='cardContent' >
                    profile post
                </div>
            </div>
        </section>
    )
}

export default Profile