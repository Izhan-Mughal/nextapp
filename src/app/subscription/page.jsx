import BasicInfo from '@/components/Elements/BasicInfo'
import SidebarDesk from '@/components/Elements/SidebarDesk'
import SubInfo from '@/components/Elements/SubInfo'
import Header from '@/components/Header'
import React from 'react'

const page = () => {
    return (
        <>
            <Header />
            <div className='min100'>
                <div className="row mx-0 h-100 ">
                    <div className="col-lg-3 h-100 col-xxl-2 px-0  d-lg-block d-none">
                        <SidebarDesk activeClass="subscription" />
                    </div>
                    <div className="col-lg-9 col-xxl-10 px-0 ">
                        <SubInfo />
                    </div>
                </div>
            </div>
        </>
    )
}

export default page