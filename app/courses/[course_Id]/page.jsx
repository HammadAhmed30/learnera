
import { Links } from "@/components/links"
const { default: Wrapper } = require("@/components/Wrapper")


const CoursePage = ({params}) =>{

    return(
        <Wrapper>
            {params.course_Id}
            <Links link={"/courses/"+params.course_Id+"/2"}>
                Start the course
            </Links>
        </Wrapper>
    )
}

export default CoursePage