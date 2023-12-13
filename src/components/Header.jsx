import React from 'react'
import { IoMdPersonAdd } from "react-icons/io";
import { FaAngleDown, FaFolder, FaCog, FaUserPlus } from "react-icons/fa";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { MdMovie } from "react-icons/md";
import { FaPlus } from "react-icons/fa6";
import { RxDotsVertical } from "react-icons/rx";
import { CiDollar, CiCalendar } from "react-icons/ci";
import Myimage from '@/images/image1.png'
const Header = (props) => {
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-dark bg__dark px-lg-3">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">Genny</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            {/* <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Link</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Dropdown
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a className="dropdown-item" href="#">Action</a></li>
                <li><a className="dropdown-item" href="#">Another action</a></li>

                <li><a className="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
            </li> */}
                        </ul>
                        <form className="d-flex align-items-center gap-3">

                            <button className="btn btn-outline-light" type='button'><IoMdPersonAdd />
                                &nbsp;Invite</button>
                            <div className='profile__icon'></div>
                        </form>
                    </div>
                </div>
            </nav>
            <div className="offcanvas offcanvas-start myoff" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                <div className="offcanvas-header bg__dark text-white">
                    <h5 className="offcanvas-title" id="offcanvasExampleLabel">Genny</h5>
                    <button type="button" className="bg-transparent border-0 text-white " data-bs-dismiss="offcanvas" aria-label="Close">X</button>
                </div>
                <div className="offcanvas-body">
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
                            <button type='button' className='sidebar__button'>
                                <FaCog />
                                &nbsp;
                                Settings
                            </button>
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
                </div>
            </div>
        </header>
    )
}

export default Header