export const Paragraph = ({ children, className }) => {
  return (
    <p className={"text-sm text-paragraphColor font-[600] " + className || ""}>{children}</p>
  );
};


