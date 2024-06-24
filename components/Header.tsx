// @flow
import { Section } from "@/components/Section";
import { cn } from "@/lib/utils";
import {
  BadgeCheck,
  BarChart3,
  BookOpen,
  Package,
  Settings,
  ShoppingBag,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type Props = {};
export const Header = (props: Props) => {
  return (
    <Section className="sticky top-0 shadow-sm z-10 w-full p-2  bg-white text-gray-800 flex items-center space-x-8">
      <Link
        href="/"
        className="text-md font-semibold ps-2 py-2 bg-slate-100/40 "
      >
        SAM INFO POS
      </Link>
      <div className="flex-grow"></div>
      <nav className="flex space-x-4">
        <Link
          href="/dashboard"
          className={cn(
            "flex items-center space-x-2 p-2 rounded-md  hover:bg-black/80 hover:text-white  transition"
          )}
        >
          <BarChart3 className="w-5 h-5 text-amber-600" />
          <span className="hidden md:inline text-sm">Dashboard</span>
        </Link>
        <Link
          href="/pos"
          className={cn(
            "flex items-center space-x-2 p-2 rounded-md hover:bg-black/80 hover:text-white transition"
          )}
        >
          <ShoppingBag className="w-5 h-5 text-amber-600" />
          <span className="hidden md:inline text-sm">Point de Vente</span>
        </Link>
        <Link
          href="/vente"
          className={cn(
            "flex items-center space-x-2 p-2 rounded-md  hover:bg-black/80 hover:text-white  transition"
          )}
        >
          <BookOpen className="w-5 h-5 text-amber-600" />
          <span className="hidden md:inline text-sm">Vente</span>
        </Link>
        <Link
          href="/stock"
          className={cn(
            "flex items-center space-x-2 p-2 rounded-md  hover:bg-black/80 hover:text-white  transition"
          )}
        >
          <Package className="w-5 h-5 text-amber-600" />
          <span className="hidden md:inline text-sm">Stock</span>
        </Link>

        <Link
          href="/settings"
          className={cn(
            "flex items-center space-x-2 p-2 rounded-md  hover:bg-black/80 hover:text-white  transition"
          )}
        >
          <Settings className="w-5 h-5 text-amber-600" />
          <span className="hidden md:inline text-sm">Réglage</span>
        </Link>
        <div className={cn("flex items-center space-x-2      transition")}>
          <Image
            width={40}
            height={40}
            src="/images/3d/Personne.jpg"
            alt="logo"
            className="rounded-full "
          ></Image>
          <div className="flex flex-col gap-0">
            <span className="font-bold text-sm">Ibrahima</span>
            <div className="text-tiny flex gap-1">
              <p>Directeur General </p>
              <div className="rounded-full w-4 h-4 flex items-center justify-center  bg-bla">
                <BadgeCheck color="green" size={15}></BadgeCheck>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </Section>
  );
};
