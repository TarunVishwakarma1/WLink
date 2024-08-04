"use client"

import Image from "next/image";
import {User} from "@clerk/nextjs/server"
import React, { useState, useEffect } from "react";
import Link from "next/link";
import {UserButton} from "@clerk/nextjs";
import {ModeToggle} from "@/components/global/mode-toggle";
import { useUser } from "@clerk/clerk-react";

type Props={
    users?:null | User
}


const Navigation = ({users}:Props)=>{

    const [isDarkTheme, setIsDarkTheme] = useState(false);

    const { isSignedIn, user, isLoaded } = useUser(); // checking if user is Singed in or not

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

    return <div className='fixed top-0 right-0 left-0 p-4 flex items-center justify-between z-10'>
        <aside className='flex items-center gap-2'>
            <Image
                src={"./assets/walletImage.svg"}
                width={40}
                height={40}
                alt='plura logo'
                className={isDarkTheme ? "invert" : ""}
            />
            <span className='text-xl font-bold'>
            <Link href={'/site'}>WLink</Link>
            </span>
        </aside>
        <nav className='hidden md:block absolute left-[50%] top-[50%] transform translate-x-[-50%]
        translate-y-[-50%]'>
            <ul className='flex items-center justify-center gap-8'>
                <Link href={'/about'}>About</Link>
                {/* <Link href={'#'}>Documentation</Link> */}
                <Link href={'/features'}>Features</Link>
            </ul>
        </nav>
        <aside className='flex gap-2 items-center'>
            {isSignedIn ? "" : <div >
            <Link href={'/wallet'} className='bg-primary text-white p-2 px-4 rounded-md hover:bg-primary/80 dark:text-black'>
                Login
            </Link>
            </div>}
            <UserButton/>
            <ModeToggle/>
        </aside>
    </div>
}

export default Navigation;