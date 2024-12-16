import { MoreVertical, ChevronLast, ChevronFirst } from "lucide-react";
import { useContext, createContext, useState } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import "./css/Sidebar.css";
import { Link } from "react-router-dom";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const SidebarContext = createContext();

export default function Sidebar({ children }) {
  const [expanded, setExpanded] = useState(true);

  return (
    <aside className="h-screen">
      <nav
        className="h-full flex flex-col bg-white border-r shadow-sm"
        id="theme"
      >
        <div
          className="p-4 pb-2"
          style={{ display: "flex", justifyContent: "flex-end" }}
        >
          <button
            onClick={() => setExpanded((curr) => !curr)}
            className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100"
          >
            {expanded ? <ChevronFirst /> : <ChevronLast />}
          </button>
        </div>
        <div className="flex justify-center mb-5">
          <AccountCircleIcon style={{ fontSize: "3rem", color: "gray" }} />
        </div>
        <SidebarContext.Provider value={{ expanded }}>
          <ul className="flex-1 px-3">{children}</ul>
        </SidebarContext.Provider>
      </nav>
    </aside>
  );
}

export function SidebarItem({ icon, text, active, alert, to, subMenuItems }) {
  const [showSubMenu, setShowSubMenu] = useState(false);
  const { expanded } = useContext(SidebarContext);

  const handleSubMenuToggle = () => {
    setShowSubMenu(!showSubMenu);
  };

  return (
    <li
      className={`
        relative flex flex-col items-start p-2 my-1  justify-center 
        font-medium rounded-md cursor-pointer
        transition-colors group
        ${
          active
            ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800"
            : "hover:bg-indigo-50 text-gray-600"
        }
        ${active ? "selected-menu" : ""}  
    `}
    >
      <div className="flex items-center" onClick={handleSubMenuToggle}>
        {icon}
        <span
          className={`overflow-hidden transition-all ${
            expanded ? "w-30 ml-4" : "w-0"
          }`}
        >
          {text}
        </span>
        {subMenuItems && expanded && (
          <div
            className={`ml-2 transition-all transform ${
              showSubMenu ? "rotate-0" : "rotate-90"
            }`}
          >
            <ExpandMoreIcon />
          </div>
        )}
      </div>

      {subMenuItems && showSubMenu && expanded && (
        <ul className="ml-12 mt-3">
          {subMenuItems.map((subMenuItem) => (
            <li key={subMenuItem.text} className="cursor-pointer mb-2">
              <Link
                to={subMenuItem.to}
                style={{ textDecoration: "none", color: "rgb(105 105 105)" }}
              >
                {subMenuItem.text}
              </Link>
            </li>
          ))}
        </ul>
      )}

      {alert && <div className={`${expanded ? "" : "top-2"}`} />}
    </li>
  );
}
