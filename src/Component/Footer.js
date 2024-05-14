import React from 'react'

const Footer = () => {
  return (
    <div className="w-[1216] h-[304] border-t border-solid border-grey-500">
     <div className="w-[1110] h-[208] mx-6 my-3 flex flex-col space-y-10 justify-between">

      <div className="text-end">
        <a href="#1" className="pr-5">Link1</a>
        <a href="#2" className="pr-5">Link2</a>
        <a href="#3" className="pr-5">Link3</a>
        <a href="#4">Link4</a>
      
      </div>
      <div className="flex justify-between">
      
      <div> &reg;2023 Fixaro</div>
      <div className="text-end">
      <i className="fa-brands fa-facebook pr-5"></i>
      <i className="fa-brands fa-instagram pr-5"></i>
      <i className="fa-brands fa-twitter pr-5"></i>
      <span>Be&#772;</span>
      </div>
      </div>

     </div>
    </div>
  )
}

export default Footer
