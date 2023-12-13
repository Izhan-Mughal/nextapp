import React from 'react'
import Myimage from '@/images/sign-in-image.webp'
import { FaGoogle } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";

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
                            <h4 className='text-lg-start text-center text-white fw-bold'> Sign in to Genny
                            </h4>
                            <button className="mt-4 btn btn-light w-100 fw-bold"> <FaGoogle /> &nbsp;
                                Continue With Google</button>
                            <div className="d-flex gap-1 align-items-center mt-4">
                                <hr className="custom my-0 d-flex w-100" />
                                <span className='text-white-50 py-1 px-2'> or</span>
                                <hr className="custom my-0 d-flex w-100" />
                            </div>

                            <div className="form__input2 d-flex gap-2 mt-4">
                                <span className="text-white-50 "> <MdEmail /> </span>
                                <input type="text" className="py-0 text-white border-0 nofocus bg-transparent" placeholder='Email ' />
                            </div>
                            <div className="form__input2 d-flex gap-2 mt-4">
                                <span className="text-white-50 "> <RiLockPasswordLine /> </span>
                                <input type="password" className="py-0 text-white border-0 nofocus bg-transparent" placeholder='Password ' />
                            </div>
                            <div className="mt-4">
                                <button className=" btn btn-light w-100 fw-light"> Log in</button>
                            </div>
                            <div className="mt-5 d-flex justify-content-between">
                                <div className="d-flex align-items-center gap-2">
                                    <input type="checkbox" name="" id="" className='form-check-input ' />
                                    <p className="mb-0 text-white">Remember me</p>
                                </div>
                                <div className="d-flex align-items-center gap-2">
                                    <div className="text-white">
                                        <RiLockPasswordLine />
                                    </div>
                                    <a href="/" className="mb-0 d-block text-white text-decoration-none">Forgot Password?</a>
                                </div>
                            </div>
                            <p className="mt-5 text-white text-center">
                                Don't have an account? <a href="/signup" className='text-decoration-none'>Sign up</a>

                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default page