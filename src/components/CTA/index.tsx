
export default function CTA() {
  return (
    <section className="flex justify-center items-center flex-col absolute left-[50%] top-[50%] w-full" style={{transform:'translate(-50%,-50%)',backgroundColor:'rgba(0,0,0,0.8)',height:'100%'}}>
         <h3 className=" font-light text-4xl text-center capitalize mb-4 font-sans text-white">
       A Great Environment To Learn
      </h3>
           <h2 className="text-6xl font-bold  mb-4 font-sans text-center text-yellow-500">DEVOPS & AWS</h2>
     
      <button className=" bg-blue-800 text-md w-[300px] text-white mt-4 py-4 px-10 rounded-[10px] hover:bg-[#002C5F] hover:text-white-600 transition duration-300 ">
        Register Now
      </button>
    </section>
  )
}
