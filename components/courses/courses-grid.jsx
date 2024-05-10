import { CoursesCard } from "./courses-card"

export const CoursesGrid = ({className}) =>{
    return (
        <div className={"w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 mt-ElementSpace bg-foreground p-[1px] gap-[1px] "+className||""}>
            <CoursesCard/>
            <CoursesCard/>
            <CoursesCard/>
            <CoursesCard/>
            <CoursesCard/>
            <CoursesCard/>
            <CoursesCard/>
            <CoursesCard/>
        </div>
    )
}