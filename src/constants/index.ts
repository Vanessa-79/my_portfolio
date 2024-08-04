//passing the objects by giving an id, title, link

export interface NavLink {
  _id: number;
  title: string;
  link: string;
}

export const navlinksdata: NavLink[] = [
  {
    _id: 1001,
    title: "Home",
    link: "/",
  },

  {
    _id: 1002,
    title: "Services",
    link: "features",
  },

  {
    _id: 1003,
    title: "Projects",
    link: "projects",
  },

  {
    _id: 1004,
    title: "Resume",
    link: "resume",
  },

  // {
  //   _id: 1005,
  //   title: "Testmonial",
  //   link: "testmonial",
  // },

  {
    _id: 1006,
    title: "Contact",
    link: "contact",
  },

];