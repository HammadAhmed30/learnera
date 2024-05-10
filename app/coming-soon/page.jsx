import { LargeHeading } from "@/components/heading/heading-large";

const { default: Wrapper } = require("@/components/Wrapper")

const ComingSoonPage = () =>{
    return(
        <Wrapper className={"h-[75vh] flex justify-center items-center"}>
            <LargeHeading>This Feature is Coming Soon</LargeHeading>
        </Wrapper>
    )
}

export default ComingSoonPage;