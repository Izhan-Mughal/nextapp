import React from 'react'
import { CiTrash, CiFolderOn } from "react-icons/ci";
import { IoTimeOutline } from "react-icons/io5";
import { IoIosHelpCircle } from "react-icons/io";
import { FaCheck } from "react-icons/fa";

const SubInfo = () => {
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
                            <a href='/setting' className="nav-link " id="home-tab" data-bs-target="#home"  >Basic Info

                            </a>
                        </li>
                        <li className="nav-item" role="presentation">
                            <a href='/subscription' className="nav-link active" id="profile-tab" data-bs-target="#profile"  >Subscription</a>
                        </li>
                        <li className="nav-item" role="presentation">
                            <a href='/members' className="nav-link" id="contact-tab" data-bs-target="#contact"  >Members</a>
                        </li>
                    </ul>
                    {/* <div className="tab-content" id="myTabContent">
                        <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">Home</div>
                        <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">Profile</div>
                        <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">Contact</div>
                    </div> */}

                    <div className="bordered__div mt-4 mx-lg-3">
                        <div className="row mx-0 gap-lg-0 gap-2">
                            <div className="col-lg-6">
                                <p className='fs-8 text-white-50 mb-1'>Current Plan</p>
                                <h5 className="text-white fw-bold">Free Trial</h5>
                            </div>
                            <div className="col-lg-6 d-lg-none d-block mt-0">
                                <div className="d-flex justify-content-between w-100">
                                    <div className="d-flex align-items-center gap-2">
                                        <div className='text-white fs-5'>
                                            <IoTimeOutline />
                                        </div>
                                        <div className='text-white pt-1'>
                                            Generation credits remaining

                                        </div>
                                        <div className='text-white fs-8 pt-1'>
                                            <IoIosHelpCircle />

                                        </div>
                                    </div>
                                    <div className="text-white ">
                                        20m 0s

                                    </div>
                                </div>
                                <div className="mt-2 progress bg__dark2"></div>
                            </div>
                            <div className="col-lg-6 mt-lg-0 mt-4">
                                <p className='fs-8 text-white-50 mb-1'>Current Plan</p>
                                <h5 className="text-white fw-bold">1/1 <span className="fs-8 text-white-50">member(s)</span></h5>
                            </div>
                            <div className="col-lg-6 d-lg-none d-block ">
                                <div className="d-flex justify-content-between w-100">
                                    <div className="d-flex align-items-center gap-2">
                                        <div className='text-white fs-5'>
                                            <CiFolderOn />

                                        </div>
                                        <div className='text-white pt-1'>
                                            Production Storage

                                        </div>

                                    </div>
                                    <div className="text-white ">

                                        0
                                        / 1GB

                                    </div>
                                </div>
                                <div className="mt-2 progress bg__dark2"></div>
                            </div>
                            <div className="col-lg-6 d-lg-block d-none mt-4">
                                <div className="d-flex justify-content-between w-100">
                                    <div className="d-flex align-items-center gap-2">
                                        <div className='text-white fs-5'>
                                            <IoTimeOutline />
                                        </div>
                                        <div className='text-white pt-1'>
                                            Generation credits remaining

                                        </div>
                                        <div className='text-white fs-8 pt-1'>
                                            <IoIosHelpCircle />

                                        </div>
                                    </div>
                                    <div className="text-white ">
                                        20m 0s

                                    </div>
                                </div>
                                <div className="mt-2 progress bg__dark2"></div>
                            </div>
                            <div className="col-lg-6 d-lg-block d-none mt-4">
                                <div className="d-flex justify-content-between w-100">
                                    <div className="d-flex align-items-center gap-2">
                                        <div className='text-white fs-5'>
                                            <CiFolderOn />

                                        </div>
                                        <div className='text-white pt-1'>
                                            Production Storage

                                        </div>

                                    </div>
                                    <div className="text-white ">

                                        0
                                        / 1GB

                                    </div>
                                </div>
                                <div className="mt-2 progress bg__dark2"></div>
                            </div>
                        </div>
                    </div>
                    <div className="mx-lg-3">
                        <h4 className="text-white mt-5 ">
                            Next payment details

                        </h4>

                        <p className="text-center mt-5 text-white-50 fs-8"> No Upcoming Payments</p>

                        <h4 className="text-white mt-5 ">
                            Billing History

                        </h4>
                        <div className="mt-5">
                            <div className="bordered__div2">
                                <div className="table-responsive">
                                    <table class="table table-dark align-middle">
                                        <thead>
                                            <tr>
                                                <th scope="col">Plan	</th>
                                                <th scope="col">Date	</th>
                                                <th scope="col">Total</th>
                                                <th scope="col">	Status	</th>
                                                <th scope="col">Invoice & Receipt</th>

                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td scope="row">Free Trial	</td>
                                                <td>	Dec 12, 2023</td>
                                                <td>$0
                                                </td>
                                                <td>
                                                    <div className="badge bg-success">
                                                        <FaCheck />
                                                        <span className="ps-1">
                                                            Paid
                                                        </span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <a href="#" className='text-white'> Invoice</a>
                                                </td>
                                            </tr>


                                        </tbody>
                                    </table>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default SubInfo