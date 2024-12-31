import LoginButton from "@/components/auth/login-button";
import MyAccount from "@/components/navigation/my-account";
import Searchbox from "@/components/navigation/searchbox";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { MountainIcon } from "lucide-react";
import Link from "next/link";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Category A",
    href: "/category-a",
    description: "Explore our range of products in Category A.",
  },
  {
    title: "Category B",
    href: "/category-b",
    description: "Explore our range of products in Category B.",
  },
  {
    title: "Category C",
    href: "/category-c",
    description: "Explore our range of products in Category C.",
  },
];

const dropDownMenuClasses = {
  link: "group h-auto p-4 text-sm bg-background hover:bg-accent flex flex-col gap-1 transition-colors rounded-lg",
  title: "font-medium leading-none group-hover:underline",
  description: "text-gray-500 line-clamp-2 leading-snug text-muted-foreground",
};

export default function Navigation() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background flex justify-center">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <MountainIcon className="size-6" />
          <span className="sr-only">Acme Inc</span>
        </Link>

        {/* Navigation */}
        <nav>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="/"
                  className={navigationMenuTriggerStyle()}
                >
                  Home
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>Products</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="flex flex-col p-2 w-[400px]">
                    {components.map((component) => (
                      <NavigationMenuLink
                        key={component.href}
                        href={component.href}
                        className={dropDownMenuClasses.link}
                      >
                        <div className={dropDownMenuClasses.title}>
                          {component.title}
                        </div>
                        <p className={dropDownMenuClasses.description}>
                          {component.description}
                        </p>
                      </NavigationMenuLink>
                    ))}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink
                  href="/about"
                  className={navigationMenuTriggerStyle()}
                >
                  About
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink
                  href="/contact"
                  className={navigationMenuTriggerStyle()}
                >
                  Contact
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </nav>

        {/* Search and Account */}
        <div className="flex items-center gap-4">
          <Searchbox />
          <MyAccount />
        </div>
      </div>
    </header>
  );
}
