import React, { useState } from 'react';
import Modal from 'react-modal';
import './LoginModal.css'
import Groupe3 from '../../images/Group 3.png'
import { useForm } from "react-hook-form";
import fb from '../../images/fb.png';
import google from "../../images/google.png"

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        background: "#FFFFFF",
    }


};

Modal.setAppElement('#root');

const LoginModal = ({ modalIsOpen, closeModal, setLoggedInUser }) => {

    const [newUser, setNewUser] = useState(false);
    console.log(newUser)
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        setLoggedInUser(data)
        console.log(data)
        reset();
    };
    return (
        <div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <div className="row modal-container">
                    <p className="modal-header">Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼</p>

                    <div className="col-md-6 p-3">
                        <p className="create-account-text">Create Account</p>
                        <div className="row">
                            <form onSubmit={handleSubmit(onSubmit)}>

                                {newUser &&
                                    <div className="d-flex">
                                        <div className="form-group col-md-6 col-sm-12">
                                            <input className="form-control" type="text" placeholder="First Name" {...register("firstName")} />
                                        </div>
                                        <div className="form-group col-md-6 col-sm-12">
                                            <input className="form-control" type="text" placeholder="LastName" {...register("lastName")} />
                                        </div>
                                    </div>
                                }
                                <div className="form-group col-sm-12">
                                    <input className="form-control" type="email" placeholder="Email" {...register("email")} />
                                </div>
                                <div className="form-group col-sm-12">
                                    <input className="form-control" type="text" placeholder="Password" {...register("password")} />
                                </div>
                                {newUser &&
                                    <div className="form-group col-sm-12">
                                        <input className="form-control" type="text" placeholder="Confirm Password" {...register("ConfirmPassword")} />
                                    </div>
                                }
                                <div className="form-group col-sm-12">
                                    <input className="submit-button text-center" type="submit" />
                                </div>
                            </form>

                            <div className="login-buttons">
                                <div>
                                    <button className="login-btn"><img src={fb} alt="" /> </button>
                                </div>
                                <div>
                                    <button className="login-btn"><img src={google} alt="" /></button>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="col-md-6 p-3 svg-area">
                        <div className="d-flex">
                            <p className="text-secondary">{newUser ? "Already have an account?" : "Don't have an account yet?"}</p>
                            <button onClick={() => setNewUser(!newUser)} className="signIn-btn fw-bold">{newUser ? "Sign In" : "Sign Up"}</button>

                        </div>
                        <div>
                            <img className="img-fluid" src={Groupe3} alt="" />
                        </div>
                        <small className="text-secondary">By signing up, you agree to our Terms & conditions, Privacy policy</small>
                    </div>
                </div>
            </Modal>
        </div>
    );
};

export default LoginModal;