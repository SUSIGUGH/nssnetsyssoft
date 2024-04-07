
export default function Contact() {
  return (
    <section className=" " id="contactus">
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mb-4">
            <div className="mb-6 max-w-3xl text-center sm:text-center md:mx-auto md:mb-12">
                <p className="text-base font-semibold uppercase tracking-wide font-sans text-blue-600 ">
                    Contact
                </p>
                <h2
                    className="font-heading mb-4 font-bold tracking-tight text-gray-900  text-3xl sm:text-5xl font-sans">
                    Get in Touch
                </h2>
           
            </div>
        </div>
        <div className="flex items-stretch justify-center">
            <div className="flex ">
                <div className="h-full ">
               
                    <ul className="mb-6 md:mb-0 mt-10 flex flex-col md:flex-row justify-between w-full">
                        
                        <li className="flex  flex-wrap ">
                            <div className="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                    strokeLinejoin="round" className="h-6 w-6">
                                    <path
                                        d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2">
                                    </path>
                                    <path d="M15 7a2 2 0 0 1 2 2"></path>
                                    <path d="M15 3a6 6 0 0 1 6 6"></path>
                                </svg>
                            </div>
                            <div className="ml-4 mb-4">
                                <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900 ">Contact
                                </h3>
                                <p className="text-gray-600 ">Mobile: +977 9761754929</p>
                                <p className="text-gray-600 ">Mail: nssinfo@nssnetsyssoft.com</p>
                            </div>
                        </li>
                    
                    </ul>
                </div>
             
            </div>
        </div>
    </div>
</section>
  )
}
