/* eslint-disable react/prop-types */
import '../style/postBlog/blogDetails.css'
import moment from 'moment';

function BlogFullDetails({content}) {

    const now = moment(content?.createdAt);
    const formattedDate = now.format('DD/MM/YYYY');

    return (
        <section className="blogDetailsContainer" >
            <div className='centerCantainer' >
                <div className='fullDetailsProfile'>
                    <div style={{ display: "flex", justifyContent: "center", placeItems: "center", gap: ".3rem" }} >
                        <img src="/profile.svg" alt="" width={50} height={50} />
                        <h4> {content?.username} </h4>
                    </div>

                    <p> {formattedDate} </p>

                </div>

                <div className='blogDetailsImg' >
                    <img src={content?.blogImage} alt="" />
                </div>

                <div className='blogText' style={{margin:"1rem 0"}} >
                    <p>
                        {content?.blogWriting}
                    </p>



                </div>

            </div>
        </section>
    )
}

export default BlogFullDetails