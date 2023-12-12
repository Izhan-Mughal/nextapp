import React from 'react'
import SidebarDesk from './SidebarDesk'
import Workspace from './Workspace'

const Landing = () => {
    return (
        <div className='min100'>
            <div className="row mx-0 h-100 ">
                <div className="col-lg-3 h-100 col-xxl-2 px-0  d-lg-block d-none">
                    <SidebarDesk />
                </div>
                <div className="col-lg-9 col-xxl-10 px-0 ">
                    <Workspace />
                </div>
            </div>
        </div>
    )
}

export default Landing