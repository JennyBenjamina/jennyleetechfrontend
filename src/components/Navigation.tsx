import * as React from "react";
import { Link } from "react-router-dom";
import { cn } from "../lib/utils";
import logoImg from "../assets/logoNav.png";

import useAuth from "../hooks/useAuth";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "./ui/navigation-menu";
import { useEffect } from "react";

export function Navigation() {
  const { users, activeUser, setActiveUserr } = useAuth();

  React.useEffect(() => {}, [activeUser]);
  return (
    <>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <Link to="/" className={navigationMenuTriggerStyle()}>
              {logoImg ? (
                <img src={logoImg} alt="logo" className="w-20" />
              ) : (
                "Home"
              )}
            </Link>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger>Members</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-6  md:grid-cols-[1fr]">
                {users.map((user) => (
                  <ListItem
                    key={user.firstName}
                    title={user.firstName}
                    onClick={() => setActiveUserr(user)}
                    className="hover:cursor-pointer"
                  ></ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Settings</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[1fr]">
                <ListItem href="/docs" title="Profile">
                  Change your goal, age, and weight here.
                </ListItem>
                <ListItem href="/docs/installation" title="Journal">
                  Write what you need to remember.
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link to="/weightdata" className={navigationMenuTriggerStyle()}>
              Data
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <div className="text-center text-2xl my-4">
        {activeUser.firstName}'s profile
      </div>
    </>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
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
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
