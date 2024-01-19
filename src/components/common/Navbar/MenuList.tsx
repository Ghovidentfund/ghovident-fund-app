"use client";

import Link from "next/link";
import { useCallback, useMemo } from "react";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import { menuList } from "@/constants/menuList";
import { MenuProps } from "@/interfaces/global.interface";

const MenuList = () => {
  const pathName = usePathname();

  const activeMenu = useCallback(
    (menu: MenuProps) => {
      return menu.slug === pathName ? "text-primary font-semibold" : "";
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [pathName]
  );

  return (
    <div id="menu-list">
      <div className="flex space-x-4">
        {menuList.map((menu) => {
          return (
            <Link href={menu.slug} key={menu.name}>
              <h2 className={cn("text-base font-medium", activeMenu(menu))}>
                {menu.name}
              </h2>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default MenuList;
