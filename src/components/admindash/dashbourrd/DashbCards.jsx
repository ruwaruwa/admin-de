import React from 'react'

export default function DashbCards() {
  return (
    <div>
         <div className="grid grid-cols-4 ml-[22%] gap-10">
        <div className="bg-seconderyColor w-100  h-44 rounded-lg shadow-2xl mt-10 text-textColor">
            <h1 className="text-md font-semibold pt-4 pl-3">Total patients</h1>
            <p className="text-4xl font-bold pl-6 pt-2">3.25 k <i class="fa-solid pl-4 fa-hand-holding-droplet"></i></p>
            <p className="text-sm pt-5 pl-3">50 joined us this week</p>
        </div>

        {/* second */}
        <div className="bg-seconderyColor w-100  h-44 rounded-lg shadow-2xl mt-10 text-textColor">
            <h1 className="text-md font-semibold pt-4 pl-3">Total Hospitals</h1>
            <p className="text-4xl font-bold pl-6 pt-2">12<i class="fa-solid pl-8 fa-hospital"></i></p>
            <p cla44ssName="text-sm pt-5 pl-4"> 3 joined us this week</p>
        </div>

        {/* third */}
        <div className="bg-seconderyColor w-100  h-44 rounded-lg shadow-2xl mt-10 text-textColor">
            <h1 className="text-md font-semibold pt-4 pl-3">All peyment</h1>
            <p className="text-4xl font-bold pl-6 pt-2">30 <i class="fa-solid pl-6 fa-envelope"></i></p>
            <p className="text-sm pt-5 pl-4"> this week</p>
        </div>

    </div>
    </div>
  )
}
