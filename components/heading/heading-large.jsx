export const LargeHeading = ({ children, className }) => {
  return <h1 className={"text-5xl font-[600] text-foreground " + className || ""}>{children}</h1>;
};