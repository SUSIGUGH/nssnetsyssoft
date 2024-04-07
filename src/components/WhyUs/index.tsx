import { WhyUsList } from "@/constants/courses";
import Card from "../Card";

export default function WhyUs() {
  return (
    <div className="mt-20  w-full">
           <h2 className="text-4xl text-center font-bold  my-10 font-sans">Why Us</h2>
         <section className="flex justify-between item-center my-12 ">
         {
            WhyUsList.map((item:any)=><Card key={item.title} title={item.title} image={item.image}/>)
        }
         </section>
    </div>
  )
}
