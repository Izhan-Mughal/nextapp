import React from 'react'
import { CiMail } from "react-icons/ci";

const InviteModal = () => {
    return (
        <>
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog  modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <p class="modal-title fw-bold" id="exampleModalLabel">Invite Members</p>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div className="d-flex gap-1 align-items-center">
                                <div className='border__mine px-2 w-100 rounded py-1'>
                                    <div className="d-flex gap-1 align-items-center">
                                        <div className='text-white fs-5'>
                                            <CiMail />
                                        </div>
                                        <input type="text" className="nofocus text-white bg-transparent border-0" placeholder='Invite via mail' />
                                    </div>
                                </div>
                                <button className='btn btn-secondary'>Invite</button>

                            </div>
                            <p className="mt-4 text-white fw-bold">
                                Members (1)

                            </p>
                            <div className="mt-1 d-flex align-items-center justify-content-between flex-wrap">
                                <div className="d-flex gap-1 align-items-center">
                                    <div className="profile__icon"></div>
                                    <div>
                                        <p className="mb-0 text-white-50 fs-8">User Name </p>
                                        <p className="mb-0 text-white-50 fs-8">User_Name@email.com</p>
                                    </div>
                                </div>
                                <p className="mb-0 text-white-50 fs-8">Owner </p>
                            </div>
                            <div className="d-block py-2"></div>
                            <div className="d-lg-block d-none">
<div style={{height:"200px"}}></div>
                            </div>
                        </div>
                        {/* <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary">Save changes</button>
                        </div> */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default InviteModal