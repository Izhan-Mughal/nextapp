import BasicInfo from '@/components/Elements/BasicInfo'
import SidebarDesk from '@/components/Elements/SidebarDesk'
import MemberInfo from '@/components/Elements/MemberInfo'
import Header from '@/components/Header'
import React from 'react'

const page = () => {
    return (
        <>
            <Header />
            <div className='min100'>
                <div className="row mx-0 h-100 ">
                    <div className="col-lg-3 h-100 col-xxl-2 px-0  d-lg-block d-none">
                        <SidebarDesk activeClass="Settings" />
                    </div>
                    <div className="col-lg-9 col-xxl-10 px-0 ">
                        <MemberInfo />
                    </div>
                </div>
            </div>
        </>
    )
}

export default page