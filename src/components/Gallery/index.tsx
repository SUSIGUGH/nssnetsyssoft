import { GalleryList } from "@/constants/courses";
import Image from "next/image";

export default function Gallery() {
  return (
    <div className="mt-5  w-[100%]">
           <h2 className="text-4xl text-center font-bold  my-10 font-sans">Gallery</h2>
         <section className="flex justify-between item-center my-12 ">
         {
            GalleryList.map((course:any)=><div key={course.id} className="relative w-[32%] aspect-[2.5/1.5]   ">
                <Image className="rounded-2xl" fill src={course.image} alt="logo" style={{objectFit:'cover'}} />
            </div> )
         }
         </section>
    </div>
  )
}
