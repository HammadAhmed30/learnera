"use client";

import { LargeHeading } from "@/components/heading/heading-large";
import { useEffect } from "react";

const { default: Wrapper } = require("@/components/Wrapper");

const ComingSoonPage = () => {
  useEffect(() => {
    document.title = "This Feature is Coming Soon!";
  }, []);
  return (
    <Wrapper className={"h-[75vh] flex justify-center items-center"}>
      <LargeHeading className={"text-center"}>
        This Feature is Coming Soon!
      </LargeHeading>
    </Wrapper>
  );
};

export default ComingSoonPage;
