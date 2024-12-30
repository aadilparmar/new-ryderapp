import React from 'react'

const CaptainDetails = () => {
  return (
    <div className='pb-16'>
      <div className="flex justify-between items-center">
            <div className="flex items-center gap-3 justify-start">
              <img
                className="h-10 w-10 rounded-full object-cover"
                src="/assets/driver1.jpg"
                alt=""
              />
              <h4 className="text-xl font-bold">Rajesh Wagle</h4>
            </div>
            <div>
              <h4 className="text-xl font-semibold">₹345.543</h4>
              <p className="text-sm font-medium text-gray-600">Earned</p>
            </div>
          </div>
          <div className="flex justify-center items-start gap-5 bg-[#f2da77] p-5 m-3 rounded-xl">
            <div className="text-center">
              <i className="text-3xl font-thin ri-timer-line"></i>
              <h5 className="text-lg font-medium">10.4</h5>
              <p className="text-sm text-gray-600">Hours Online</p>
            </div>
            <div className="text-center">
              <i className="text-3xl font-thin ri-speed-up-line"></i>
              <h5 className="text-lg font-medium">10.4</h5>
              <p className="text-sm text-gray-600">Distance Traveled</p>
            </div>
            <div className="text-center">
              <i className="text-3xl font-thin ri-sticky-note-add-line"></i>
              <h5 className="text-lg font-medium">10.4</h5>
              <p className="text-sm text-gray-600">Hours Online</p>
            </div>
          </div>
    </div>
  )
}

export default CaptainDetails
