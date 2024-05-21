export const SmallHeading = ({ title, children, className }) => {
    return <h1 className={"text-sm font-[600] mt-NormalSpace text-foreground " + className || ""} title={title || "" } >{children}</h1>;
  };