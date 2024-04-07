
export default function Register() {
  return (
    <div id="register" className=" flex flex-col justify-around mt-[70px]" >
    <section id="login" className=" flex flex-col items-center justify-center text-center  ">
    <h2 className="text-4xl font-bold  mb-8 font-sans">NSS - Student Registration</h2>

    <div className="mx-auto w-full">
  <form className="bg-white shadow-xl rounded-md px-8 pt-9 pb-8 mb-4" target="_self" action="../php/register.php" method="POST">
  
  <div className="flex flex-col md:flex-row justify-between">
    <div className="w-[100%] md:width-[45%] mx-0  md:mx-2">
    <div className="mb-2">
      <label htmlFor="name" className="block text-gray-500 text-left text-sm font-bold mb-2">Name</label>
      <input id="name" type="text" placeholder="Enter your name" className="shadow appearance-none border rounded-md w-full py-1 px-1 text-gray-500 text-left leading-tight focus:outline-none focus:shadow-outline"/>
    </div>
    <div className="mb-2">
      <label htmlFor="phone" className="block text-gray-500 text-left text-sm font-bold mb-2">Phone</label>
      <input id="phone" type="text" placeholder="Enter your phone number" className="shadow appearance-none border rounded-md w-full py-1 px-1 text-gray-500 text-left leading-tight focus:outline-none focus:shadow-outline"/>
    </div>
    <div className="mb-2">
      <label htmlFor="email" className="block text-gray-500 text-left text-sm font-bold mb-2">Email</label>
      <input id="email" type="email" placeholder="Enter your email address" className="shadow appearance-none border rounded-md w-full py-1 px-1 text-gray-500 text-left leading-tight focus:outline-none focus:shadow-outline"/>
    </div>
    </div>
    <div className="w-[100%] md:width-[45%]">
    <div className="mb-2">
      <label htmlFor="password" className="block text-gray-500 text-left text-sm font-bold mb-2">Password</label>
      <input id="password" type="password" placeholder="Enter your password" className="shadow appearance-none border rounded-md w-full py-1 px-1 text-gray-500 text-left leading-tight focus:outline-none focus:shadow-outline"/>
    </div>
    <div className="mb-2">
      <label htmlFor="course" className="block text-gray-500 text-left text-sm font-bold mb-2">Course</label>
      <select id="course" className="shadow appearance-none border rounded-md w-full py-1 px-1 text-gray-500 text-left leading-tight focus:outline-none focus:shadow-outline">
        <option value="DevOps">DevOps</option>
        <option value="DevOps Recorded">DevOps Recorded</option>
        <option value="AWS SAA">AWS SAA</option>
        <option value="Kubernetes">Kubernetes</option>
        <option value="Docker">Docker</option>
        <option value="NSS ITEdu">NSS ITEdu</option>
      </select>
    </div>
    <div className="mb-2">
      <label htmlFor="message" className="block text-gray-500 text-left text-sm font-bold mb-2">Message</label>
      <textarea id="message" placeholder="Enter your message" className="shadow appearance-none border rounded-md w-full py-1 px-1 text-gray-500 h-[50px] text-left leading-tight focus:outline-none focus:shadow-outline"></textarea>
    </div>
    </div>
  </div>
  

    <div className="flex items-center justify-center ">
      <button className="bg-blue-700 w-full md:w-[40%] mt-10 mb-7 hover:bg-blue-900 text-white font-bold py-1 px-1 rounded-md focus:outline-none focus:shadow-outline" type="button">
        Register Now
      </button>
    </div>
  </form>
</div>

    </section>
    </div>
  )
}
