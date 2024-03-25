import { useState } from "react";
import { MdClose } from "react-icons/md";
import { HiMenuAlt3 } from "react-icons/hi";

function Navbar() {

  const [dropdown, setDropdown] = useState(true);

  const showDropdown = () => {

  }


  return (
    <nav className="w-full h-24 flex flex-col justify-center items-center">
      <div className="container mx-auto lg:px-6 ">
        <div className="lg:w-full w-11/12 mx-auto h-full flex justify-between items-center">

          <div className="flex flex-col gap-y-4">
            <div className="flex items-center gap-x-2">
              <span className="flex items-center lg:text-5xl text-3xl">
                <button className="rounded-full py-1 text-white bg-indigo-600 lg:text-5xl text-3xl outline-none border-none">Jo</button>
                <p className="font-semibold leading-tight">bline</p>
              </span>
            </div>
          </div>

          <ul className="flex-1 flex justify-center items-center xl:gap-12 gap-x-4 max-lg:hidden">
            <a href="#" className="leading-normal no-underline font-bold text-lg hover:text-indigo-600">Find jobs</a>
            <a href="#" className="leading-normal no-underline font-bold text-lg hover:text-indigo-600">People</a>
            <a href="#" className="leading-normal no-underline font-bold text-lg hover:text-indigo-600">Hiring</a>
            <a href="#" className="leading-normal no-underline font-bold text-lg hover:text-indigo-600">Resume</a>
          </ul>

          <div className="flex gap-4 max-lg:hidden">
            <button className="rounded-full bg-[#f3f3f4] text-lg text-black border-none font-bold px-8 hoverBtn">Sign up</button>
            <button className="rounded-full bg-[#f3f3f4] text-lg text-black border-none font-bold px-8 hoverBtn">Sign In</button>
          </div>

          {dropdown ? (
            <div onClick={showDropdown} className="lg:hidden text-[22px] cursor-pointer text-black">
              <MdClose />
            </div>
          ) : (
            <div onClick={showDropdown}>
              <HiMenuAlt3 />
            </div>
          )}
        </div>

        {dropdown ? (
          <div onClick={showDropdown} className="lg:hidden w-full h-screen fixed top-24 bg-black ease-in-out duration-100">
            <HiMenuAlt3 />
            <div className="w-full h-[320px] flex flex-col items-baseline pt-8 gap-4">
              <ul className="text-center p-0 flex flex-col justify-center w-full gap-y-8">
                <a href="#" className="leading-normal no-underline text-white font-bold text-lg hover:text-purple-600">Find jobs</a>
                <a href="#" className="leading-normal no-underline text-white font-bold text-lg hover:text-purple-600">People</a>
                <a href="#" className="leading-normal no-underline text-white font-bold text-lg hover:text-purple-600">Hiring</a>
                <a href="#" className="leading-normal no-underline text-white font-bold text-lg hover:text-purple-600">Resume</a>
              </ul>
              <div className="flex flex-col justify-center items-center w-full gap-y-8 mt-4">
                <button className="rounded-full bg-[#f3f3f4] text-lg text-black border-none font-bold px-8 py-3 hoverBtn">Sign Up</button>
                <button className="rounded-full bg-[#f3f3f4] text-lg text-black border-none font-bold px-8 py-3 hoverBtn">Sign In</button>
              </div>
            </div>
          </div>
        ) : null}

      </div>
    </nav>
  )
}

export default Navbar