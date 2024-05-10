export const MediumHeading = ({ children, className }) => {
    return <h1 className={"text-lg font-[600] text-foreground " + className || ""}>{children}</h1>;
  };