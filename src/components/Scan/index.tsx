import qr from '@/assets/qr.jpeg'
import Image from 'next/image'
export default function Scan() {
  return (
    <div id="pay" className=" flex flex-col justify-around mt-[120px] bg-slate-100 my-10 ">
    <section className=" flex flex-col items-center justify-center text-center   my-20">
    <h2 className="text-4xl font-bold  mb-8 font-sans">Scan and Pay</h2>

<Image src={qr} alt="qr"/>
    </section>
    </div>  )
}
