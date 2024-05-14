import React from 'react'

const Header = () => {
  return (
    <div className="w-[1200] h-[88] flex justify-between">

      <div >
        <img src="./logo.png" alt="logo" className="w-[54] h-[54]" />
      </div>

      <div className="w-[589] h-[40] flex space-x-10">   


        <div className="my-auto">Services </div>
        <div className="my-auto">Commercial</div>
        <div className="my-auto"><b>Login</b></div>
        <button className=" bg-amber-400 border-0 px-5 rounded-full m-5">Book Service</button>
        <div className="my-auto text-2xl"><i className="fa-solid fa-cart-arrow-down"></i></div>
        
      </div>
    </div>
  )
}

export default Header
