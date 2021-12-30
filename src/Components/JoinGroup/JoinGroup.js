import React from 'react';
import './JoinGroup.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faTimes, faExclamationCircle } from '@fortawesome/free-solid-svg-icons'


const JoinGroup = ({ loggedInUser }) => {
    const groups = [
        {
            img: "https://i.postimg.cc/j27SNxd0/leisure-1.png",
            name: "Leisure"
        },
        {
            img: "https://i.postimg.cc/zDVpLVKb/activism.png",
            name: "Activism"
        },
        {
            img: "https://i.postimg.cc/3xB2fT2Q/mba.png",
            name: "MBA"
        },
        {
            img: "https://i.postimg.cc/MGpVhFYM/philosophy.png",
            name: "Philosophy"
        }
    ]
    return (
        <div className="groupe-section">

            <div className="input">
                <span><FontAwesomeIcon className="text-secondary" icon={faMapMarkerAlt} /></span><input placeholder="Enter your location" id="groupe-input" type="text" /><span><FontAwesomeIcon className="text-secondary" icon={faTimes} /></span>
            </div>
            <div className="location-warning d-flex">
                <span><FontAwesomeIcon icon={faExclamationCircle} /></span>
                <small>Your location will help us serve better and extend a personalised experience.</small>
            </div>
            {loggedInUser.email &&
                <div>
                    <div className="recommended-group-text">
                        <p>REcommended Groups</p>
                    </div>
                    <div>
                        {
                            groups.map(group =>
                                <div className="d-flex justify-content-between">
                                    <div className="d-flex align-items-center group">
                                        <img src={group.img} alt="" />
                                        <p id="group-name">{group.name}</p>
                                    </div>
                                    <div className="follow-btn">
                                        <button id="follow-button">Follow</button>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div>
            }
        </div>
    );
};

export default JoinGroup;