import React from 'react'
import { CiTrash, CiFolderOn } from "react-icons/ci";
import { IoTimeOutline, IoSearch } from "react-icons/io5";
import { IoIosHelpCircle, IoMdPersonAdd } from "react-icons/io";
import { FaCheck } from "react-icons/fa";
import InviteModal from '../Modals/InviteModal';


const MemberInfo = () => {
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
                            <a href='/subscription' className="nav-link " id="profile-tab" data-bs-target="#profile"  >Subscription</a>
                        </li>
                        <li className="nav-item" role="presentation">
                            <a href='/members' className="nav-link active" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact"  >Members</a>
                        </li>
                    </ul>



                    <div className="mx-lg-3">
                        <h5 className="text-white fw-bold mt-4 ">
                            Pending

                        </h5>

                        <div className="mt-3">
                            <div className="bordered__div2">
                                <div className="table-responsive">
                                    <table class="table table-dark align-middle">
                                        <thead>
                                            <tr>
                                                <th scope="col">Name	</th>


                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className=''>
                                                <span className='px-4 d-block mt-2  text-white-50 fs-8 '>
                                                    There are no pending invitations


                                                </span>

                                            </tr>


                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                        <h5 className="text-white mt-5 fw-bold ">
                            Members <span className="fw-light text-white-50">(1)</span>

                        </h5>
                        <div className="mt-3">
                            <div className="d-flex justify-content-between align-items-center mb-3">
                                <div className="d-flex align-items-center gap-2">
                                    <div className="border__mine rounded-3">
                                        <div className="dropdown">
                                            <button className="btn bg-transparent nofocus dropdown-toggle fs-8 text-white  py-1 border-0 " type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                                                by Date Added &nbsp;
                                            </button>
                                            <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuButton2">
                                                <li><a className="dropdown-item active" href="#"> by Date Added</a></li>
                                                <li><a className="dropdown-item active" href="#">Name (A-Z)</a></li>
                                                <li><a className="dropdown-item" href="#">Name (Z-A)</a></li>

                                            </ul>
                                        </div>
                                    </div>
                                    <div className="border__mine rounded-3 d-flex px-2 py-1 align-items-center">
                                        <div className='text-white'>
                                            <IoSearch />

                                        </div>
                                        <input type="text" className="border-0 nofocus ps-2 bg-transparent text-white" placeholder='Search' />

                                    </div>
                                </div>
                                <div>
                                    <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                        <IoMdPersonAdd />
                                        &nbsp;  Invite Members
                                    </button>
                                </div>
                            </div>
                            <div className="bordered__div2">

                                <div className="table-responsive">
                                    <table class="table table-dark align-middle">
                                        <thead>
                                            <tr>
                                                <th scope="col">Name	</th>
                                                <th scope="col">Role	</th>
                                                <th scope="col">Joined on</th>

                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td scope="row">
                                                    <div className="d-flex gap-1 align-items-center">
                                                        <div className="profile__icon"></div>
                                                        <div>
                                                            <p className="mb-0 text-white-50 fs-8">User Name (You)</p>
                                                            <p className="mb-0 text-white-50 fs-8">User_Name@email.com</p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td> Owner	</td>
                                                <td>Dec 12, 2023
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
            <InviteModal />
        </>
    )
}

export default MemberInfo