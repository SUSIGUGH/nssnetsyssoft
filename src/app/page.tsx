import AWS from "@/components/AWS"
import About from "@/components/About"
import Banner from "@/components/Banner"
import Contact from "@/components/Contact"
import DevOps from "@/components/DevOps"
import FAQ from "@/components/FAQ"
import Footer from "@/components/Footer"
import Header from "@/components/Header"
import ML from "@/components/ML"
import Register from "@/components/Register"
import Scan from "@/components/Scan"
import dynamic from "next/dynamic"
const NoSSR = dynamic(() => import('../components/VideoGallery'), { ssr: false })

export default function Home() {
  return (
    <main id="home" className="flex min-h-screen relative flex-col items-center justify-between max-w-[1920px] m-auto overflow-x-hidden  ">
            <Header />

    <Banner/>
<section className="w-[95%] m-auto">
<About/>
<Register />
<DevOps/>
<ML/>
<AWS/>

<FAQ/>
<Scan/>
<Contact/>
{/* <Courses/>
<WhyUs/>
<Gallery/>
<NoSSR/>
<Testimonial/> */}
{/* <MapView/> */}
</section>
<Footer/>

    </main>
  )
}
