"use client"
import { VideoGalleryList } from "@/constants/courses";
import ReactPlayer from "react-player";

export default function VideoGallery() {
  return (
    <div className="mt-5">
           <h2 className="text-4xl text-center font-bold  my-10 font-sans">Videos</h2>
         <section className="flex flex-wrap justify-between item-center my-12 ">
         {
            VideoGalleryList.map((course:any)=><div key={course.id} className="w-[48%] aspect-[2/1]  my-6    ">
                     <div className="overflow-hidden rounded-xl flex justify-center ">
                     <ReactPlayer url='https://www.youtube.com/watch?v=wWgIAphfn2U' /> 
                     </div>
                     <h1 className="text-center font-sans text-lg py-3">{course.title}</h1>
            </div> )
         }
         </section>
    </div>
  )
}
