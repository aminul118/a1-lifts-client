import { BsBuildings, BsCalendar2Date } from "react-icons/bs";
import { FaBox, FaTasks, FaUserCircle } from "react-icons/fa";
import { TbBrandBooking, TbUsersGroup } from "react-icons/tb";

const moreProducts = [
  {
    title: "Book a Percel",
    description: "Can book your percel",
    icon: <TbBrandBooking className="text-white text-xl" />,
    link: "/dashboard/book-percel",
  },
  {
    title: "Booked Percel",
    description: "Your all booked percel",
    icon: <FaBox className="text-white text-xl" />,
    link: "/dashboard/my-percel",
  },
  {
    title: "Your Profile",
    description: "Can update your profile",
    icon: <FaUserCircle className="text-white text-xl" />,
    link: "/dashboard/my-profile",
  },
];

const ecoSystem = [
  {
    title: "Directory",
    description: "Lorem",
    icon: <BsBuildings className="text-white text-xl" />,
    link: "/directory",
  },
  {
    title: "Bookings",
    description: "Lorem",
    icon: <BsCalendar2Date className="text-white text-xl" />,
    link: "/bookings",
  },
  {
    title: "User Feedback",
    description: "If you received percel then able to give feedback",
    icon: <TbUsersGroup className="text-white text-xl" />,
    link: "/dashboard/my-percel",
  },
  {
    title: "Task Manager",
    description: "Lorem",
    icon: <FaTasks className="text-white text-xl" />,
    link: "/task-manager",
  },
];

export { moreProducts, ecoSystem };
