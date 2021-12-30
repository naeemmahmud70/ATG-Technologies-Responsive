import React, { useState } from 'react';
import Header from '../Header/Header';
import LoginModal from '../LoginModal/LoginModal';
import PostArea from '../PostArea/PostArea';


const Home = () => {

    const [modalIsOpen, setIsOpen] = useState(false);
    const [loggedInUser, setLoggedInUser] = useState({})

    function openModal() {
        setIsOpen(true);
    };

    function closeModal() {
        setIsOpen(false);
    };

    return (
        <div>
            <Header modalIsOpen={modalIsOpen} openModal={openModal} loggedInUser={loggedInUser}></Header>
            <PostArea openModal={openModal} loggedInUser={loggedInUser}></PostArea>
            <LoginModal modalIsOpen={modalIsOpen} closeModal={closeModal} setLoggedInUser={setLoggedInUser}></LoginModal>
        </div>
    );
};

export default Home;