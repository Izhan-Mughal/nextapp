import React from 'react'
import { FaAngleDown, FaFolder, FaCog, FaUserPlus } from "react-icons/fa";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { MdMovie } from "react-icons/md";
import { FaPlus } from "react-icons/fa6";
import { RxDotsVertical } from "react-icons/rx";
import { CiDollar, CiCalendar } from "react-icons/ci";
import Myimage from '@/images/image1.png'
import Image from 'next/image';

const SidebarDesk = (props) => {
    return (
        <div className='sidebar h-100  d-flex flex-column justify-content-between'>
            <div>
                <div className="px-3 pt-3">
                    <div class="dropdown w-100">
                        <button class="btn btn-dark py-3 w-100 bg-transparent border-0" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                            <div className="d-flex justify-content-between">
                                <div className='d-flex gap-2'>
                                    <div className="profile__icon"></div>
                                    <div>
                                        <p className='text-white plan__name'>
                                            Free Trial Plan
                                        </p>
                                        <h5 className='user__name text-white'>
                                            User Name
                                        </h5>
                                    </div>
                                </div>
                                <div className='text-white '>
                                    <FaAngleDown />

                                </div>
                            </div>
                        </button>
                        <ul class="dropdown-menu w-100 bg__dark" aria-labelledby="dropdownMenuButton1">
                            <li><a class="dropdown-item " href="#">
                                <div className='d-flex gap-2'>
                                    <div className="profile__icon"></div>
                                    <div>
                                        <p className='text-white plan__name'>
                                            Free Trial Plan
                                        </p>
                                        <h5 className='user__name text-white'>
                                            User Name
                                        </h5>
                                    </div>
                                </div></a></li>

                        </ul>
                    </div>
                    <hr className="text-white mt-2" />

                    <div className='trial__div d-flex justify-content-between align-items-center'>
                        <div>
                            <p className="trial__heading">Free Trial Ends on </p>
                            <p className="trial__time fw-bold">Dec 26, 2023</p>

                        </div>
                        <div className='opt__upgrade'>
                            Upgrade
                        </div>


                    </div>

                    <div className="credits__div mt-4">
                        <div className="d-flex align-items-center justify-content-between">
                            <div className="d-flex align-items-center gap-1">
                                <div className='title'>Generation Credits</div>
                                <div className='icon'> <IoIosHelpCircleOutline />
                                </div>

                            </div>
                            <div className='eta'>
                                20m 0s


                            </div>

                        </div>
                        <div className="progressbar mt-1">

                        </div>

                    </div>
                    <div className="credits__div mt-4">
                        <div className="d-flex align-items-center justify-content-between">
                            <div className="d-flex align-items-center gap-1">
                                <div className='title'>Production Storage</div>
                                <div className='icon'> <IoIosHelpCircleOutline />
                                </div>

                            </div>
                            <div className='eta'>
                                0 / 1GB


                            </div>

                        </div>
                        <div className="progressbar mt-1">

                        </div>

                    </div>
                    <hr className="text-white mt-4" />


                </div>
                <button type='button' className='sidebar__button'>
                    <MdMovie />
                    &nbsp;
                    Production
                </button>
                <div className="px-3">
                    <hr className='text-white mb-2' />

                    <div class="accordion accordion-flush sidebaraccordion" id="accordionFlushExample">
                        <div class="accordion-item ">
                            <h2 class="accordion-header " id="flush-headingOne">
                                <button class="accordion-button collapsed " type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                    Workspace
                                    <span className="ms-auto">
                                        <FaPlus />
                                        &nbsp;
                                    </span>
                                </button>

                            </h2>
                            <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body p-0">
                                    <button type='button' className='sidebar__button d-flex justify-content-between'>
                                        <span>
                                            <FaFolder />

                                            &nbsp; My
                                            Production
                                        </span>
                                        <span>
                                            <RxDotsVertical />

                                        </span>
                                    </button>
                                </div>
                            </div>
                        </div>

                    </div>
                    <hr className='text-white mt-2' />
                </div>
                <button type='button' className='sidebar__button'>
                    <CiDollar />

                    &nbsp;
                    Pricing
                </button>
                <button type='button' className='sidebar__button'>
                    <CiCalendar />
                    &nbsp;
                    Subscription
                </button>
                <a href='/Settings' className={props.activeClass == "Settings" ? `sidebar__button__active` : `sidebar__button`}>
                    <FaCog />
                    &nbsp;
                    Settings
                </a>
                <button type='button' className='sidebar__button'>
                    <FaUserPlus />
                    &nbsp;
                    Invite Members
                </button>
            </div>
            <div className="px-3 pb-4">

                <img src={Myimage.src} className='img-fluid' alt="" />
            </div>
        </div>
    )
}

export default SidebarDesk