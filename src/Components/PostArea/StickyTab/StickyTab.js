import React from 'react';
import './StickyTab.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUsers, faSortDown } from '@fortawesome/free-solid-svg-icons'

const StickyTab = () => {
    return (
        <div>
            <div className="d-flex justify-content-between align-items-center pt-3">
                <div className="container-fluid d-flex justify-content-between">

                    <ul class="nav nav-pills filter">
                        <li class="nav-items ">
                            <a class="nav-link" aria-current="page" href="#">All Posts</a>
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

                    <p className="fw-bold posts">Posts</p>
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
                    <button className="post-btn">Write a Post <FontAwesomeIcon className="mx-2 my-1" icon={faSortDown} /></button> <button className="join-button text-white"><FontAwesomeIcon className="mx-2 my-1" icon={faUsers} /> Join Group</button>
                </div>
            </div>
            <hr />
        </div>
    );
};

export default StickyTab;