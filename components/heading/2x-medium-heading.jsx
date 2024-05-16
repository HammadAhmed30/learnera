export const MediumHeadingx2 = ({ children, className }) => {
    return <h1 className={"text-2xl font-[600] text-foreground " + className || ""}>{children}</h1>;
  };