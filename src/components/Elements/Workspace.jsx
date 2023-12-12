import React from 'react'
import { FaPen } from "react-icons/fa";
import { FiPlus } from "react-icons/fi";

const Workspace = () => {
    return (
        <div className='Workspace h-100 ps-lg-5'>
            <div className="d-flex align-items-center pt-4 gap-4">
                <h4 className='mb-0  text-white fw-bold ps-lg-0 ps-3'> My workspace </h4>
                <small className='text-white'> <FaPen /> </small>
            </div>
            <div className="mt-5 row mx-0">
                <div className="col-lg-3 ps-lg-0">
                    <div className="project__div d-flex justify-content-center align-items-center">
                        <div>
                            <h1 className="text-center plus">
                                <FiPlus />

                            </h1>
                            <p className='plus'>
                                New Project
                            </p>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Workspace