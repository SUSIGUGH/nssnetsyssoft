import Image from "next/image"

type Props = {
    title:string,
    image:string
}

export default function Card({title,image}: Props) {
  return (
    <div className="  w-[25%] flex flex-col justify-start items-center">
         <Image src={image} alt="logo" width={100} height={100}/>
        <h1 className="text-center font-sans text-lg py-3">{title}</h1>
       
    </div>
  )
}