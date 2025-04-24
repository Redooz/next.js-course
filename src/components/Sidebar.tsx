import Image from "next/image";
import Link from "next/link";
import { IoApps, IoCalculator, IoFootball, IoLogoReact } from "react-icons/io5";
import { MenuItemProp, SidebarMenuItem } from "./SidebarMenuItem";

const menuItems: MenuItemProp[] = [
  {
    path: "/dashboard/main",
    icon: <IoApps size={25} />,
    title: "Dashboard",
    subtitle: "Main page",
  },
  {
    path: "/dashboard/counter",
    icon: <IoCalculator size={25} />,
    title: "Counter",
    subtitle: "Client side counter",
  },
  {
    path: "/dashboard/pokemons",
    icon: <IoFootball size={25} />,
    title: "Pokemons",
    subtitle: "Static generation or server side rendering",
  }
];

export function Sidebar() {
  return (
    <div
      id="menu"
      className="bg-gray-900 min-h-screen z-10 text-slate-300 w-64 fixed left-0 h-screen overflow-y-scroll"
    >
      <div id="logo" className="my-4 px-6">
        <h1 className="text-lg md:text-2xl font-bold text-white flex items-center space-x-2">
          <IoLogoReact />
          Dash
          <span className="text-blue-500">8</span>.
        </h1>
        <p className="text-slate-500 text-sm">
          Manage your actions and activities
        </p>
      </div>

      <div id="profile" className="px-6 py-10">
        <p className="text-slate-500">Welcome back,</p>
        <Link href="#" className="inline-flex space-x-2 items-center">
          <span>
            <Image
              className="rounded-full"
              src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=128&q=80"
              alt="Profile Picture"
              width={32}
              height={32}
            />
          </span>
          <span className="text-sm md:text-base font-bold">Nicolás Olmos</span>
        </Link>
      </div>
      
      <nav id="nav" className="w-full px-6">
        {menuItems.map((item) => (
          <SidebarMenuItem
            icon={item.icon}
            path={item.path}
            subtitle={item.subtitle}
            title={item.title}
            key={item.path}
          />
        ))}
      </nav>
    </div>
  );
}
