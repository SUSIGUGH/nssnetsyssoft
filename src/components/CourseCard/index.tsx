import Image from "next/image";

export default function CourseCard({
  title,
  content,
  image,
}: {
  title: string;
  content: string;
  image: string;
}) {
  return (
    <section className="w-[22%] p-5 flex flex-col justify-center items-center cursor-pointer hover:shadow-xl">
      <div className="w-full aspect-square relative ">
      <Image src={image} className="rounded-2xl" alt="logo" fill style={{objectFit:'cover'}}/>
      </div>
      <p className="my-3 font-sans text-xl font-medium ">{title}</p>
      <p className="text-center font-sans text-md">{content}</p>
      <button className=" bg-[#002C5F] text-sm text-white mt-4 py-3 px-6 rounded-full hover:bg-blue-800 hover:text-white-600 transition duration-300">
        Register Now
      </button>
    </section>
  );
}
