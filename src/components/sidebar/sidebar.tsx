import { useState } from "react";
import { useNavigate } from "react-router-dom";
import fjordQudraLogo from "@/assets/fjord-qudra-logo.png";
import { sidebarItems, SidebarItem } from "@/config/sidebarConfig";

const Sidebar = () => {
  const navigate = useNavigate();
  const [selected, setSelected] = useState<number | null>(null);

  const handleClick = (item: SidebarItem) => {
    setSelected(item.id);
    if (item.route) {
      navigate(item.route);
    }
  };

  return (
    <div className="mt-8 text-white flex flex-col items-center">
      <img
        src={fjordQudraLogo}
        alt="Fjord Qudra Logo"
        height={100}
        width={100}
        onClick={() => navigate("/")}
        className="cursor-pointer mb-8"
      />
      <div className="flex flex-col gap-5 justify-center items-center mt-12">
        {sidebarItems.map((item) => (
          <div
            key={item.id}
            onClick={() => handleClick(item)}
            className={`cursor-pointer p-3 rounded-lg transition-all duration-200 text-black ${
              selected === item.id
                ? "bg-white"
                : "hover:bg-white hover:text-black"
            } ${item.label === "Chart" && selected !== 2 && "text-white"}`}
          >
            {item.icon}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
