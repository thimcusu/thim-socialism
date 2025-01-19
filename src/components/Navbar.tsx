"use client";

import React from "react";
import { usePathname } from "next/navigation";
import SocialNavbar from "@/app/feeds/SocialNavbar";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "./ui/navigation-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Thim Socialism",
    href: "/feeds",
    description: "A social platform inspired by Facebook",
  },
  {
    title: "Bad words detector",
    href: "/bad-words-detector",
    description: "A simple tool to check the bad words - can easily import text file and list of bad words file",
  },
  {
    title: "Explore more 2",
    href: "/#home",
    description: "Lorem, ipsum.",
  },
  {
    title: "Explore more 3",
    href: "/#home",
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit",
  },
  {
    title: "Explore more 4",
    href: "/#home",
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit",
  },
];

const Navbar = () => {
  const pathName = usePathname();

  if (pathName.startsWith("/feeds")) {
    return <SocialNavbar />;
  }

  return (
    <nav className="w-full flex justify-between items-center py-4 px-8 bg-white shadow-md">
      <h1 className="text-2xl font-bold text-indigo-600">Thim Portfolio</h1>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <li className="row-span-3">
                  <NavigationMenuLink asChild>
                    <Link
                      className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                      href="/"
                    >
                      <div className="mb-2 mt-4 text-lg font-medium">Start with me</div>
                      <p className="text-sm leading-tight text-muted-foreground">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic, debitis delectus natus obcaecati
                        molestiae, officia voluptates placeat recusandae ad aut repellat consequatur eius voluptas
                        iusto?
                      </p>
                    </Link>
                  </NavigationMenuLink>
                </li>
                <ListItem href="/" title="Introduction">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore veniam recusandae eligendi hic! Amet,
                  exercitationem.
                </ListItem>
                <ListItem href="/" title="My CV">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </ListItem>
                <ListItem href="/" title="Hola hola">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod, tenetur.
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Explore</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                {components.map((component) => (
                  <ListItem key={component.title} title={component.title} href={component.href}>
                    {component.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>Documentation</NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>Personal</NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>About me</NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </nav>
  );
};

const ListItem = React.forwardRef<React.ElementRef<"a">, React.ComponentPropsWithoutRef<"a">>(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>
          </a>
        </NavigationMenuLink>
      </li>
    );
  }
);
ListItem.displayName = "ListItem";

export default Navbar;
