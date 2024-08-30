// src/constants/index.ts
import {
  FaHome,
  FaCogs,
  FaProjectDiagram,
  FaFileAlt,
  FaEnvelope,
} from "react-icons/fa";

export interface NavLink {
  _id: number;
  title: string;
  link: string;
  icon: JSX.Element;
}

export const navlinksdata: NavLink[] = [
  {
    _id: 1001,
    title: "Home",
    link: "/",
    icon: <FaHome />,
  },
  {
    _id: 1002,
    title: "Services",
    link: "features",
    icon: <FaCogs />,
  },
  {
    _id: 1003,
    title: "Projects",
    link: "projects",
    icon: <FaProjectDiagram />,
  },
  {
    _id: 1004,
    title: "Resume",
    link: "resume",
    icon: <FaFileAlt />,
  },
  {
    _id: 1006,
    title: "Contact",
    link: "contact",
    icon: <FaEnvelope />,
  },
];
