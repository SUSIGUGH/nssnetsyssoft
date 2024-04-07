"use client";

import { leftMenu, rightMenu } from "@/constants/menulist";
import { useEffect, useState } from "react";
import Logo from "../Logo";



export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (target:any)=> {
    const offset = document.querySelector(target).offsetTop;
    const headerHeight = 110;
    const yOffset = offset - headerHeight;
    setIsOpen(init=>!init)
    window.scrollTo({
      top: yOffset,
      behavior: 'smooth'
    });
  }
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className={` text-4xl z-50 shadow-xl   py-1 px-5  w-full  transition ease-in-out   bg-white ${scrolled &&'fixed'}`}>
  <section className=" hidden lg:flex  justify-center items-center ">
  <ul className="flex justify-center flex-1  ">
        {
          rightMenu.map((menu:string)=><li className={`text-base mx-5 capitalize font-sans text-black font-semibold cursor-pointer hover:text-blue-500   'text-black' `} key={menu}>
            <a href={`#${menu.toLowerCase().replace(/\s/g, "")}`} className="capitalize" onClick={(e) => {
        e.preventDefault();
      scrollToSection(`#${menu.toLowerCase().replace(/\s/g, "")}`);
      }}>{menu}</a>
            </li>)
        }
      </ul>
<Logo/>
      <ul className="flex justify-center  flex-1 ">
        {
          leftMenu.map((menu:string)=><li className={`text-base text-black font-semibold font-sans ml-[1rem] mr-5 cursor-pointer hover:text-blue-500  text-black `} key={menu}>
 <a href={`#${menu.toLowerCase().replace(/\s/g, "")}`} onClick={(e) => {
        e.preventDefault();
      scrollToSection(`#${menu.toLowerCase().replace(/\s/g, "")}`);
      }}>{menu}</a>

          </li>)
        }
      </ul>





  </section>

<section className={`flex lg:hidden  justify-between items-center`}>
<Logo/>

<button className="flex items-center" >
  <svg onClick={() => setIsOpen(init=>!init)} xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round">
    <line x1="3" y1="12" x2="21" y2="12" />
    <line x1="3" y1="6" x2="21" y2="6" />
    <line x1="3" y1="18" x2="21" y2="18" />
  </svg>
</button>



</section>
{
  isOpen && <div className=" fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50 z-50 lg:hidden" id="modal" >
  <div className="bg-white p-8 rounded-lg shadow-lg transform transition-all  relative duration-300" id="modal-content" style={{height:'70vh' ,width:'95%',marginTop:'20px',top:'-68px'}}>
  <svg onClick={()=>setIsOpen(init=>!init)} className="h-8 w-8 mr-2 absolute rounded-full shadow-xl cursor-pointer hover:scale-105 right-[-10px] top-[-20px] p-[5px]  bg-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
<ul className="flex flex-col justify-center items-center text-['12px'] mt-4">
{
  rightMenu.map(ele=> <a key={ele} className="text-md hover:text-blue-700 py-[3px] w-full text-center " href={`#${ele.toLowerCase().replace(/\s/g, "")}`} onClick={(e) => {
        e.preventDefault();
      scrollToSection(`#${ele.toLowerCase().replace(/\s/g, "")}`);
      }}><li  style={{fontSize:'16px',width:'100%',border:'1px solid #f2f2f2'}} key={ele}>{ele}</li></a>)
 }
 {
  leftMenu.map(ele=> <a key={ele} className="text-md hover:text-blue-700 py-[3px] w-full text-center " href={`#${ele.toLowerCase().replace(/\s/g, "")}`} onClick={(e) => {
        e.preventDefault();
      scrollToSection(`#${ele.toLowerCase().replace(/\s/g, "")}`)
      }}><li  style={{fontSize:'16px',width:'100%',border:'1px solid #f2f2f2'}} key={ele}>{ele}</li></a>)
 }
</ul>
  </div>
</div>
}
  
    </div>
  );
}
