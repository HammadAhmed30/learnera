export const LargeHeading = ({ children, className }) => {
  return <h1 className={"md:text-5xl text-4xl font-[600] text-foreground " + className || ""}>{children}</h1>;
};