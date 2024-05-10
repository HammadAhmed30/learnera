export const SmallHeading = ({ children, className }) => {
    return <h1 className={"text-sm font-[600] mt-NormalSpace text-foreground " + className || ""}>{children}</h1>;
  };