import React, { useEffect, useState } from 'react';
import './StickyTab.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUsers, faSortDown } from '@fortawesome/free-solid-svg-icons'
import PostData from '../../PostData/PostData.json'

const StickyTab = ({openModal, loggedInUser}) => {
    const [posts, setAllPost] = useState([]);
    console.log(posts)

    useEffect(() => {
        setAllPost(PostData)
    }, []);
    return (
        <div className="sticky-top top-bg">
            <div className="d-flex justify-content-between align-items-center pt-3">
                <div className="container-fluid d-flex justify-content-between px-0">

                    <ul class="nav nav-pills filter">
                        <li class="nav-items">
                            <a class="nav-link px-0" id="all-post" aria-current="page" href="#">All Posts({posts.length})</a>
                        </li>
                        <li class="nav-items">
                            <a class="nav-link" href="#">Article</a>
                        </li>
                        <li class="nav-items">
                            <a class="nav-link" href="#">Event</a>
                        </li>
                        <li class="nav-items">
                            <a class="nav-link" href="#">Education</a>
                        </li>
                        <li class="nav-items">
                            <a class="nav-link" href="#">Job</a>
                        </li>
                    </ul>

                    <p className="fw-bold posts">Posts({posts.length})</p>
                    <div class="dropdown dropdown-filter">
                        <button class="dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">Filter All </button>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li><a class="dropdown-item" href="#">Article</a></li>
                            <li><a class="dropdown-item" href="#">Event</a></li>
                            <li><a class="dropdown-item" href="#">Education</a></li>
                            <li><a class="dropdown-item" href="#">Job</a></li>
                        </ul>
                    </div>

                </div>
                <div className="write-post-btn">
                    <div className="d-flex">
                        <button className="post-btn">Write a Post<FontAwesomeIcon className="mx-2 my-1" icon={faSortDown} /></button> <button onClick={openModal} className="join-button text-white"><FontAwesomeIcon className="mx-2 my-1" icon={faUsers} /> {loggedInUser.email? "Leave Group": "Join Grope"}</button>
                    </div>
                </div>
            </div>
            <hr />
        </div>
    );
};

export default StickyTab;