import React from 'react'
import { CiTrash } from "react-icons/ci";

const BasicInfo = () => {
    return (
        <>
            <div className='Workspace h-100 ps-lg-5 pe-lg-0 px-4 '>
                <div className="d-flex align-items-center pt-4 gap-4">
                    <h4 className='mb-0  text-white fw-bold ps-0 '> Settings </h4>
                </div>
                {/* Tabs DIV */}
                <div className="tabs__section mt-4">
                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                        <li className="nav-item" role="presentation">
                            <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Basic Info

                            </button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Subscription</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">Members</button>
                        </li>
                    </ul>
                    {/* <div className="tab-content" id="myTabContent">
                        <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">Home</div>
                        <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">Profile</div>
                        <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">Contact</div>
                    </div> */}

                    <div className="mt-4">
                        <h5 className="text-white fw-bold">About Team</h5>
                        <p className='text-white-50'> Manage your team logo & name.</p>

                        <div className="d-flex flex-wrap gap-3">
                            <div className='profile__icon2'></div>
                            <div>
                                <div className="d-flex gap-3 align-items-center">
                                    <button className='btn btn-outline-light fw-bold py-1 px-2 fs-8'>Upload Photo</button>

                                    <button className="bg-transparent border-0 pb-1 text-danger fs-5">
                                        <CiTrash />

                                    </button>
                                </div>
                                <p className='text-white-50'>
                                    <small>You can upload jpg, png files. Max size of 4MB

                                    </small>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-3 pb-2">
                        <label htmlFor="Name" className='text-white fw-bold mb-3'>Name</label>
                        <div className="row mx-0 align-items-center">
                            <div className="col-8 col-lg-6 col-xxl-3 ps-0">
                                <input type="text" className="form__input w-100" placeholder='Users Team' />
                            </div>
                            <div className="col-4 col-lg-2 col-xxl-2 ps-0">
                                <button className='btn btn-outline-light fw-bold'>
                                    Update
                                </button>
                            </div>
                            <div className="col"></div>
                        </div>
                    </div>
                    <hr className="custom my-4" />
                    <div className="mt-3">
                        <h5 className="text-white fw-bold">Payment Method</h5>
                        <p className='text-white-50'> Manage your payment methods

                        </p>
                        <div className="dialog__box">
                            You currently have no payment method or upcoming billing schedules.


                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BasicInfo