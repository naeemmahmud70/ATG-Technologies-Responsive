import React from 'react';
import './PostCard.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faShareAlt, faMapMarkerAlt, faCalendar } from '@fortawesome/free-solid-svg-icons'


const Postcard = ({ post }) => {
    const { postImg, postType, postIcon, postTitle,
        Description, name, posterImg, location, date, btnName, btnColor } = post;
    return (
        <div className="post-card">
            <div>
                <img className="img-fluid" src={postImg} alt="" />
            </div>
            <div className="card-text">
                <div>
                    <div className="w-75">
                        <p>{postIcon} {postType}</p>
                        <p className="title-text">{postTitle}</p>
                        <p className="description-text">{Description}</p>
                    </div>
                    <div class="threeDot">
                        <div class="dropdown btn-group dropstart">
                            <button class="threeDot-btn fw-bold" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">...</button>
                            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                <li><a class="dropdown-item" href="#">Edit</a></li>
                                <li><a class="dropdown-item" href="#">Report</a></li>
                                <li><a class="dropdown-item" href="#">Option 3</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="d-flex">
                        {post.date && <p className="date-location"><FontAwesomeIcon className="text-secondary" icon={faCalendar} /> {date}</p>}
                        {post.location && <p className="date-location px-5"><FontAwesomeIcon className="text-secondary" icon={faMapMarkerAlt} /> {location}</p>}
                    </div>
                    {
                        post.btnName && <button style={{ color: `${btnColor}` }} className="button">{btnName}</button>
                    }
                </div>
                <div className='d-flex justify-content-between'>
                    <div className="d-flex align-items-center">
                        <div>
                            <img src={posterImg} alt="" />
                        </div>
                        <div>
                            <p className="name">{name}</p>
                        </div>
                    </div>
                    <div className="d-flex">
                        <span className="text-secondary views"><FontAwesomeIcon icon={faEye} />  1.4k views</span>
                        <span className="text-secondary share"><FontAwesomeIcon icon={faShareAlt} /></span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Postcard;