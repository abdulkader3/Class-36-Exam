import React from 'react'

import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'



const ProdactDiteals = () => {
  const kopaSamsu =useSelector((state)=>state.prity.value)
  const vatPercentage = 0.15
  const priceWithVAT = kopaSamsu.price + kopaSamsu.price * vatPercentage
  return (
    <>
       <div className="w-full h-[729px] flex justify-end gap-6 items-center">
        <div className="w-full ml-5 h-[600px] bg-white rounded-3xl flex items-center">
          <div className="w-[500px] h-full">
            <img
              src={kopaSamsu.image}
              alt={kopaSamsu.brand}
              className="w-full h-full object-cover rounded-3xl"
            />
          </div>
          <div className="w-full h-[599px]">
            <h1 className="text-[100px] pl-10 font-bold "> {kopaSamsu.name} </h1>
            <p className=" text-[#fea621] text-[50px] pl-10 font-medium ">
              {" "}
              Brand:{" "}
              <span className=" text-green-600 text-[30px] font-normal ">
                {kopaSamsu.brand}
              </span>{" "}
            </p>
            <p className="text-[#fea621] text-[50px] pl-10 font-medium ">
              {" "}
              Operating System :{" "}
              <span className=" text-green-600 text-[30px] font-normal ">
                {kopaSamsu.operating_system}
              </span>{" "}
            </p>
            <p className="text-[#fea621] text-[50px] pl-10 font-medium ">
              {" "}
              RAM :{" "}
              <span className=" text-green-600 text-[30px] font-normal ">
                {kopaSamsu.ram}
              </span>{" "}
            </p>
            <p className="text-[#fea621] text-[50px] pl-10 font-medium ">
              {" "}
              Color:{" "}
              <span className=" text-green-600 text-[30px] font-normal ">
                {kopaSamsu.color}
              </span>{" "}
            </p>
            <p className="text-[#fea621] text-[50px] pl-10 font-medium ">
              {" "}
              Price :{" "}
              <span className=" text-green-600 text-[30px] font-normal ">
                {kopaSamsu.price}
              </span>{" "}
            </p>
            <button className='mb-5 p-3 rounded-lg hover:shadow-2xl hover:bg-transparent hover:border-[2px] active:scale-125 transition-all bg-white' > <Link to='/done'> Confirm order </Link> </button>
          </div>
        </div>
        
      </div>     
    </>
  )
}

export default ProdactDiteals
