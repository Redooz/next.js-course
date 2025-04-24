"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { JSX } from "react";

export interface MenuItemProp {
  path: string;
  icon: JSX.Element;
  title: string;
  subtitle: string;
}

export function SidebarMenuItem({
  path,
  icon,
  title,
  subtitle,
}: Readonly<MenuItemProp>) {
  const pathName = usePathname();

  const isActive = pathName === path;
  const classes = clsx(
    "w-full px-2 inline-flex space-x-2 items-center border-b border-slate-700 py-3 hover:bg-white/5 transition ease-linear duration-150",
    {
      "bg-blue-800": isActive,
    }
  );

  return (
    <Link href={path} className={classes}>
      <div>{icon}</div>
      <div className="flex flex-col">
        <span className="text-lg font-bold leading-5 text-white">{title}</span>
        <span className="text-sm text-white/50 hidden md:block">
          {subtitle}
        </span>
      </div>
    </Link>
  );
}
