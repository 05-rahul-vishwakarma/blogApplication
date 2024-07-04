/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useNavigate } from 'react-router-dom';
import '../style/card.css';
import moment from 'moment';
import { useState } from 'react';

function Card({ content }) {

    const navigate = useNavigate();

    function BlogDetails(content) {
        const Id = content._id;

        navigate(`/home/blog-details?$data=${encodeURIComponent(Id)}`)
    }

    const now = moment(content?.createdAt);
    const formattedDate = now.format('DD/MM/YYYY');


    return (
        <div className='card' >
            <div className="cardCantainer">

                <div className='profileBar' >
                    <div>
                        <img src="/profile.svg" alt="" width={50} height={50} />
                        <h4>{content?.username}</h4>
                    </div>

                    <p>{formattedDate}</p>

                </div>

                <div className='cardImg' >
                    <img src={content?.blogImage} alt="blog_photo" />
                </div>

                <div className='blogText'>
                    <p>
                        {content?.blogWriting.substring(0, 85) + '....'}

                    </p>

                    <button onClick={() => BlogDetails(content)} >
                        Read more
                    </button>

                </div>
            </div>
        </div>
    )
}

export default Card;