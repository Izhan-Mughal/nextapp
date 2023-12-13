import React from 'react'
import Myimage from '@/images/sign-in-image.webp'
import { FaGoogle } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { LuContact } from "react-icons/lu";

const page = () => {
    return (
        <>
            <section className='sign__in'>
                <div className="row mx-0">
                    <div className="col-lg-7 px-0 bg__sign" style={{ backgroundImage: `url(${Myimage.src})` }}>
                        <a href='/' className='text-white fw-bold ps-4 pt-3 text-decoration-none fs-2 d-block'>
                            Genny
                        </a>
                    </div>
                    <div className="col-lg-5 px-0 bg__dark d-flex justify-content-center align-items-center">
                        <div className="auth__box py-4 px-3 px-lg-0">
                            <h4 className='text-lg-start text-center text-white fw-bold'> Sign up for Free

                            </h4>
                            <button className="mt-4 btn btn-light w-100 fw-bold"> <FaGoogle /> &nbsp;
                                Continue With Google</button>
                            <div className="d-flex gap-1 align-items-center mt-4">
                                <hr className="custom my-0 d-flex w-100" />
                                <span className='text-white-50 py-1 px-2'> or</span>
                                <hr className="custom my-0 d-flex w-100" />
                            </div>

                            <div className="form__input2 d-flex gap-2 mt-4">
                                <span className="text-white-50 "> <LuContact /> </span>
                                <input type="text" className="py-0 text-white border-0 nofocus bg-transparent" placeholder='Name ' />
                            </div>

                            <div className="form__input2 d-flex gap-2 mt-4">
                                <span className="text-white-50 "> <MdEmail /> </span>
                                <input type="text" className="py-0 text-white border-0 nofocus bg-transparent" placeholder='Email ' />
                            </div>
                            <div className="form__input2 d-flex gap-2 mt-4">
                                <span className="text-white-50 "> <RiLockPasswordLine /> </span>
                                <input type="password" className="py-0 text-white border-0 nofocus bg-transparent" placeholder='Password ' />
                            </div>
                            <p className="text-white-50 mb-0 mt-4">
                                Your password must contain:
                            </p>
                            <ul className='text-white-50 mt-0 pt-0'>
                                <li>
                                    English, number and 1 special character (!@#$%^&*)
                                </li>
                                <li>
                                    At least 8 characters
                                </li>
                                <li>
                                    No blank space
                                </li>
                            </ul>
                            <div className="form__input2 d-flex gap-2 mt-4">
                                <span className="text-white-50 "> <RiLockPasswordLine /> </span>
                                <input type="password" className="py-0 text-white border-0 nofocus bg-transparent" placeholder='Confirm Password ' />
                            </div>
                            <div className="mt-4">
                                <button className=" btn btn-light w-100 fw-light"> Sign up</button>
                            </div>
                            <p className="mt-4 text-white-50">
                                By signing up, I agree to the Genny <a href="/" className="text-decoration-none">Privacy Policy</a> and <a href="/" className="text-decoration-none">Terms of Service</a> .
                            </p>

                            <p className="mt-5 text-white text-center">
                                I already have an account  <a href="/signin" className='text-decoration-none'>Sign in</a>

                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default page