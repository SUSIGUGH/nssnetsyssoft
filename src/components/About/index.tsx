import aws from '@/assets/aws.jpeg';
import ml from '@/assets/ml.jpeg';
import nss from '@/assets/nss-devops-blue.png';
import Image from "next/image";
export default function About() {
  return (
    <div id="aboutus" className=" flex flex-col justify-around mt-20 ">
        <section className=" flex flex-col items-center justify-center text-center  ">
        <h2 className="text-4xl font-bold  mb-8 font-sans">About NSS</h2>
           
            <p className="text-lg font-sans text-center">
            NSS (www.nssnetsyssoft.com) is DevOps and AWS and Machine Learning eTraining organization in Thailand specializing in DevOps Training. NSS runs from Hatyai, Songkhla, Thailand and has been number 1 DevOps eTraining institute in Thailand providing remote DevOps Training globally for Nepalese IT professionals at individual as well as corporate levels. NSS goal is to provide DevOps training to Nepalese IT enthusiasts globally by providing real-life project work and internships as available. After learning DevOps with NSS, all students will be able to demonstrate their skills as DevOps Engineer and be able to perform better in DevOps interviews.
</p>

<p className="text-lg font-sans text-center mb-5">

DevOps Engineers are key IT professionals in an organization as they enable the organization faster, highly reliable, secure and better product delivery with higher scalability and availability.


</p>
        </section>
   
        <div className="flex flex-wrap justify-center">
  <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 p-4">
    <Image src={ml} alt="Image 1" className="w-full h-auto shadow-md" style={{height:"220px",objectFit:'cover',borderRadius:'12px'}} />
  </div>
  <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 p-4">
    <Image src={aws} alt="Image 2" className="w-full h-auto shadow-md" style={{height:"220px",objectFit:'cover',borderRadius:'12px'}} />
  </div>
  <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 p-4">
    <Image src={nss} alt="Image 3" className="w-full h-auto shadow-md" style={{height:"220px",objectFit:'cover',borderRadius:'12px'}} />
  </div>
</div>
<p className="text-lg font-sans text-center mt-5">
Apart from providing Specialized DevOps Training, NSS also provides exclusive AWS Solutions Architect Certification and on demand Machine Learning Training at executive level. NSS also arranges for remote corporate and college training on DevOps, AWS and Machine Learning with Python.
</p>
    </div>
  )
}
