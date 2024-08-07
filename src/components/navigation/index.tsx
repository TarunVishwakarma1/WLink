"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { UserButton } from "@clerk/nextjs";
import { useUser } from "@clerk/clerk-react";
import {User} from "@clerk/nextjs/server"
import {ModeToggle} from "@/components/global/mode-toggle";
import NavbarData from "@/wdata/data.json";
import LogInButton from "./LogInButton";

type Props = {
  users?: null | User;
};

type Navigation = {
  name: string;
  link: string;
};

const Navigation = ({ users }: Props) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const { isSignedIn, user, isLoaded } = useUser();

  useEffect(() => {
    // Function to check and update the theme based on the presence of the 'dark' class on the <html> element
    const updateTheme = () => {
      const htmlElement = document.documentElement;
      setIsDarkTheme(htmlElement.classList.contains("dark"));
    };
    // Initial theme setting
    updateTheme();

    // Observer to watch for changes in the <html> class
    const observer = new MutationObserver(updateTheme);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });

    // Cleanup observer on component unmount
    return () => observer.disconnect();
  }, []);

  

  return (
    <div className='fixed top-0 right-0 left-0 p-4 flex items-center justify-between z-10'>
      <aside className='flex items-center gap-2'>
        <Image
          src={NavbarData.navBar.imagePath}
          width={40}
          height={40}
          alt='WLink logo'
          className={isDarkTheme ? "invert" : ""}
        />
        <span className='text-xl font-bold'>
          <Link href='/site'>{NavbarData.navBar.projectName}</Link>
        </span>
      </aside>
      <nav className='hidden md:block absolute left-[50%] top-[50%] transform translate-x-[-50%] translate-y-[-50%]'>
        <ul className='flex items-center justify-center gap-8'>
          {NavbarData.navBar.Navigation.map((item: Navigation, index: number) => (
            <Link href={item.link} key={index} className="hover:bg-gray-300 px-2 py-1 rounded-3xl">
              {item.name}
            </Link>
          ))}
        </ul>
      </nav>
      <aside className='flex gap-2 items-center'>
        {isSignedIn ? "" : (
          <div>
            <Link href={NavbarData.navBar.logInLink} className='bg-primary text-white py-2 rounded-md hover:bg-primary/80 dark:text-black'>
              <LogInButton initialName={NavbarData.navBar.logInButtonNameInitial} afterName={NavbarData.navBar.logInButtonNameAfter} />
            </Link>
          </div>
        )}
        {isSignedIn && <UserButton />}
        <ModeToggle />
      </aside>
    </div>
  );
};

export default Navigation;
