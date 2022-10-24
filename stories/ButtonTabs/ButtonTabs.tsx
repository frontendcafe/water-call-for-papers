interface ButtonTabsProps {
  states: "active" | "noSelected" | "hover" | "focus";
}

const buttonTabsStyles = {
  active: "border-b-4 border-cyan-700",
  noSelected: "text-blue-300",
  hover: "hover:bg-sky-700 hover:text-white",
  focus: "focus:outline-none focus:ring focus:ring-cyan-400 rounded-lg",
};

export const ButtonTabs = ({ states = "active" }: ButtonTabsProps) => {
  return (
    <button className={`${buttonTabsStyles[states]} py-2 px-4 `}>Todos</button>
  );
};
