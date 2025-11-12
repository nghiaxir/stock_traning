"use client" // prettier-ignore
import { NAV_ITEMS } from "@/lib/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavItems = () => {
  const pathName: string = usePathname();
  const isActive: (path: string) => boolean = (path: string) => {
    if (path === "/") {
      return pathName === "/";
    }
    return pathName.startsWith(path);
  };
  return (
    <ul className="flex flex-col sm:flex-row gap-3 p-2 sm:gap-10 font-medium">
      {NAV_ITEMS.map((item) => (
        <li key={item.href}>
          <Link
            href={item.href}
            className={`nav-item hover:text-yellow-500 transition-colors duration-300 ${
              isActive(item.href) ? "text-gray-100" : ""
            }`}
          >
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default NavItems;
