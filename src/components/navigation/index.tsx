"use client";
import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import { useTheme } from 'next-themes';
import { UserButton } from "@clerk/nextjs";
import { useUser } from "@clerk/clerk-react";
import { User } from "@clerk/nextjs/server";
import { ModeToggle } from "@/components/global/mode-toggle";
import NavbarData from "@/wdata/data.json";
import LogInButton from "./LogInButton";
import {LightMenu,DarkMenu,LightClose,DarkClose} from '../image/index'

type Props = {
  users?: null | User;
};

type Navigation = {
  name: string;
  link: string;
};

const Navigation = ({ users }: Props) => {
  const [toggle, setToggle] = useState(false);
  const { isSignedIn, user, isLoaded } = useUser();
  const { theme } = useTheme();
  
  const menuIcon = theme === 'dark' ? DarkMenu : LightMenu;
  const closeIcon = theme === 'dark' ? DarkClose : LightClose;

  return (
    <div className='fixed top-0 right-0 left-0 p-4 flex items-center justify-between z-10'>
      <aside className='flex items-center gap-2'>
        <Image
          src={NavbarData.navBar.imagePath}
          width={40}
          height={40}
          alt='WLink logo'
          className={theme === 'dark' ? "invert" : ""}
        />
        <span className='text-xl font-bold'>
          <Link href='/site'>{NavbarData.navBar.projectName}</Link>
        </span>
      </aside>
      <div className="md:flex hidden">
        <nav className='hidden md:block absolute left-[50%] top-[50%] transform translate-x-[-50%] translate-y-[-50%]'>
          <ul className='flex items-center justify-center gap-8'>
            {NavbarData.navBar.Navigation.map((item: Navigation, index: number) => (
              <Link href={item.link} key={index} className="hover:bg-gray-300 px-2 py-1 rounded-3xl hover:text-black">
                {item.name}
              </Link>
            ))}
          </ul>
        </nav>
        <aside className='flex gap-2 items-center'>
          {isSignedIn ? <UserButton /> : (
            <div>
              <Link href={NavbarData.navBar.logInLink} className='bg-primary text-white py-2 rounded-md hover:bg-primary/80 dark:text-black'>
                <LogInButton initialName={NavbarData.navBar.logInButtonNameInitial} afterName={NavbarData.navBar.logInButtonNameAfter} Custclassname="bg-black dark:bg-white dark:text-black text-white"/>
              </Link>
            </div>
          )}
          <ModeToggle />
        </aside>
      </div>
      <div className="md:hidden flex flex-1 justify-end items-center">
        <Image 
          src={toggle ? closeIcon : menuIcon}
          alt="menu"
          className='w-[28px] h-[28px] object-contain'
          onClick={() => setToggle((prev) => !prev)}
        />
        <div className={`${toggle ? 'flex' : 'hidden'} p-6 bg-black-gradient dark:bg-white-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
          <ul className="list-none flex flex-col justify-end items-center flex-1">
            <div onClick={() => setToggle((prev) => !prev)} className="list-none flex flex-col justify-end items-center flex-1">
            {NavbarData.navBar.Navigation.map((nav, index) => (
              <li key={index} className={`font-poppins font-normal cursor-pointertext-[16px] ${index === NavbarData.navBar.Navigation.length - 1 ? 'mr-0' : 'mb-4'} text-white dark:text-black`} >
                <Link href={`${nav.link}`}>{nav.name}</Link>
              </li>
            ))}
            </div>
            {isSignedIn ? <UserButton /> : 
            <Link href={NavbarData.navBar.logInLink} className='bg-primary text-white rounded-md hover:bg-primary/80 dark:text-black'>
            <div onClick={() => setToggle((prev) => !prev)}>
              <LogInButton initialName={NavbarData.navBar.logInButtonNameInitial} afterName={NavbarData.navBar.logInButtonNameAfter} Custclassname="dark:text-black text-white"/>
            </div>
            </Link>
            }
            <ModeToggle />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
