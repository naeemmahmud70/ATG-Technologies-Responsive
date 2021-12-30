import React from 'react';
import './Navbar.css'
import brandImage from '../../../images/Union 1.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faSearch, faSortDown } from '@fortawesome/free-solid-svg-icons'

const Navbar = ({ openModal, loggedInUser}) => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light navbar-style">
            <div class="container-fluid">

                <div className="nav-btn container">
                    <div className="d-flex justify-content-between">
                        <div><FontAwesomeIcon className="text-white" icon={faArrowLeft} /></div>
                        <div><button onClick={openModal} className="join-btn">Join Group</button></div>
                    </div>
                </div>

                <div class="collapse navbar-collapse" id="navbarNav">
                    <div class="d-flex justify-content-between align-items-center container-fluid">
                        <p className="brand-name"><span className="brand-color">ATG.</span>W<img src={brandImage} alt="" />RLD</p>
                        <form className="navbar-input d-flex">
                            <span><FontAwesomeIcon id="search-icon" icon={faSearch} /></span>
                            <input class="form-control me-2 border-0" type="search" placeholder="Search for your favorite groupe on ATG" aria-label="Search"></input>
                        </form>
                        <button onClick={openModal} className="create-account">{loggedInUser.email?<p>{loggedInUser.firstName}</p> : <p>Create Account. <span className="free-color">It's free!</span></p>} <FontAwesomeIcon id="sort-icon" icon={faSortDown} /></button>
                    </div>
                </div>
            </div>
        </nav>

    );
};

export default Navbar;