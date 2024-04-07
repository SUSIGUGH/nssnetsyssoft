import { CoursesList } from "@/constants/courses";
import CourseCard from "../CourseCard";
export default function Courses() {
  return (
    <section className="flex flex-col items-center justify-center py-16 ">
      <h1 className="text-4xl font-bold  mb-6 font-sans">Courses</h1>
    <section className="flex flex-wrap justify-between pt-2 ">
    {CoursesList.map((course: any) => (
        <CourseCard
          key={course.id}
          title={course.title}
          content={course.content}
          image={course.image}
        />
      ))}
    </section>
    </section>
  );
}
