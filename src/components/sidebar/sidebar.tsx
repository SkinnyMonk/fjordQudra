import {
  UserRound,
  ChartNoAxesColumnIncreasing,
  FileText,
  BookOpenText,
  CircleHelp,
} from "lucide-react";
import fjordQudraLogo from "../../assets/fjord-qudra-logo.png";
import { useState } from "react";

const icons = [
  {
    id: 1,
    icon: <UserRound fill="white" strokeWidth={1} />,
    label: "User",
  },
  {
    id: 2,
    icon: <ChartNoAxesColumnIncreasing fill="white" strokeWidth={3} />,
    label: "Chart",
  },
  {
    id: 3,
    icon: <FileText fill="white" strokeWidth={1} />,
    label: "File",
  },
  {
    id: 4,
    icon: <BookOpenText fill="white" strokeWidth={1} />,
    label: "Book",
  },
  {
    id: 5,
    icon: <CircleHelp fill="white" strokeWidth={1} />,
    label: "Help",
  },
];

function Sidebar() {
  const [selected, setSelected] = useState(2);

  return (
    <div className="mt-8 text-white">
      <img
        src={fjordQudraLogo}
        alt="Fjord Qudra Logo"
        height={"100px"}
        width={"100px"}
      />
      <div className="flex flex-col gap-5 justify-center items-center mt-12">
        {icons.map((item) => (
          <div
            key={item.id}
            onClick={() => setSelected(item.id)}
            className={`cursor-pointer p-3 rounded-lg transition-all duration-200 text-black ${
              selected === item.id
                ? "bg-white"
                : "hover:bg-white hover:text-black"
            } 
              ${item.label === "Chart" && selected != 2 && "text-white"}
            `}
          >
            {item.icon}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
