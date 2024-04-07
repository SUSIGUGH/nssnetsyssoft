

export default function FAQ() {
  return (
    <div id="faq" className=" flex flex-col justify-around mt-[120px] ">
    <section className=" flex flex-col items-center justify-center text-center  ">
    <h2 className="text-4xl font-bold  mb-8 font-sans">Frequently Asked Questions</h2>

    <ul className=" w-full mt-5     rounded-xl">
    <li className="my-6 shadow-md rounded-[10px] py-3">
        <details className="group w-full">
            <summary className="flex items-center gap-3 px-4 py-3 font-medium marker:content-none hover:cursor-pointer">
                <svg className="w-5 h-5 text-gray-500 transition group-open:rotate-90" xmlns="http://www.w3.org/2000/svg"
                    width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path fillRule="evenodd"
                        d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z">
                    </path>
                </svg>
                <span className="text-xl">What are the trainings provided by NSS?</span>
            </summary>

            <article className="px-4 pb-4">
                <p className="text-md text-gray-500 text-left">
                NSS provides DevOps, AWS Certification and Machine Learning Trainings.
                </p>
            </article>
        </details>
    </li>
    <li className="my-6 shadow-md rounded-[10px] py-3">
        <details className="group w-full">
            <summary className="flex items-center gap-3 px-4 py-3 font-medium marker:content-none hover:cursor-pointer">
                <svg className="w-5 h-5 text-gray-500 transition group-open:rotate-90" xmlns="http://www.w3.org/2000/svg"
                    width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path fillRule="evenodd"
                        d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z">
                    </path>
                </svg>
                <span className="text-xl">Does NSS Provide Physical Training?</span>
            </summary>

            <article className="px-4 pb-4">
                <p className="text-md text-gray-500 text-left">
                No, NSS only provides online and interactive classes with lifetime LMS access.
                </p>
            </article>
        </details>
    </li>
 
    <li className="my-6 shadow-md rounded-[10px] py-3">
        <details className="group w-full">
            <summary className="flex items-center gap-3 px-4 py-3 font-medium marker:content-none hover:cursor-pointer">
                <svg className="w-5 h-5 text-gray-500 transition group-open:rotate-90" xmlns="http://www.w3.org/2000/svg"
                    width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path fillRule="evenodd"
                        d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z">
                    </path>
                </svg>
                <span className="text-xl">What is lifetime LMS Access?</span>
            </summary>

            <article className="px-4 pb-4">
                <p className="text-md text-gray-500 text-left">
                A. All the online training sessions are recorded and available to the students through LMS login. This login will be available to the students anytime anywhere.
                </p>
            </article>
        </details>
    </li>

    <li className="my-6 shadow-md rounded-[10px] py-3">
        <details className="group w-full">
            <summary className="flex items-center gap-3 px-4 py-3 font-medium marker:content-none hover:cursor-pointer">
                <svg className="w-5 h-5 text-gray-500 transition group-open:rotate-90" xmlns="http://www.w3.org/2000/svg"
                    width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path fillRule="evenodd"
                        d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z">
                    </path>
                </svg>
                <span className="text-xl">What is NSS LMS?</span>
            </summary>

            <article className="px-4 pb-4">
                <p className="text-md text-gray-500 text-left">
                NSS LMS is a web interface through which students login using their email id and password. The interface provides access to all videos of the training sessions. Students can also update personal informatio and appear for tests from the LMS.
                </p>
            </article>
        </details>
    </li>


    <li className="my-6 shadow-md rounded-[10px] py-3">
        <details className="group w-full">
            <summary className="flex items-center gap-3 px-4 py-3 font-medium marker:content-none hover:cursor-pointer">
                <svg className="w-5 h-5 text-gray-500 transition group-open:rotate-90" xmlns="http://www.w3.org/2000/svg"
                    width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path fillRule="evenodd"
                        d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z">
                    </path>
                </svg>
                <span className="text-xl">What are the features of NSS?</span>
            </summary>

            <article className="px-4 pb-4">
                <p className="text-md text-gray-500 text-left">
                A. NSS Features are as below:
1. Lifetime LMS Access.
2. Highly Experienced Trainers.
3. All required environment provided by NSS.
4. Special AWS access.
5. Real-life Environment Projects.
6. Job Search and Hunt Support.
7. 70% Practical and 30% Theory.
                </p>
            </article>
        </details>
    </li>


    <li className="my-6 shadow-md rounded-[10px] py-3">
        <details className="group w-full">
            <summary className="flex items-center gap-3 px-4 py-3 font-medium marker:content-none hover:cursor-pointer">
                <svg className="w-5 h-5 text-gray-500 transition group-open:rotate-90" xmlns="http://www.w3.org/2000/svg"
                    width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path fillRule="evenodd"
                        d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z">
                    </path>
                </svg>
                <span className="text-xl">Does NSS Provide Certificate?</span>
            </summary>

            <article className="px-4 pb-4">
                <p className="text-md text-gray-500 text-left">
                A. Yes, NSS provides attendance and completion certificates.

                </p>
            </article>
        </details>
    </li>

    <li className="my-6 shadow-md rounded-[10px] py-3">
        <details className="group w-full">
            <summary className="flex items-center gap-3 px-4 py-3 font-medium marker:content-none hover:cursor-pointer">
                <svg className="w-5 h-5 text-gray-500 transition group-open:rotate-90" xmlns="http://www.w3.org/2000/svg"
                    width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path fillRule="evenodd"
                        d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z">
                    </path>
                </svg>
                <span className="text-xl">What is the difference between attendance and completion certificates?</span>
            </summary>

            <article className="px-4 pb-4">
                <p className="text-md text-gray-500 text-left">
                Attendance certificate is provided to students on completion of course duration. Completion certificate is provided only on passing the tests taken by NSS.

                </p>
            </article>
        </details>
    </li>
</ul>




    </section>
    </div>




  )
}
