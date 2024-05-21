export const Paragraph = ({ children, className }) => {
  return (
    <p className={"md:text-sm text-xs text-paragraphColor font-[600] " + className || ""}>{children}</p>
  );
};


