
import React from "react";
import Navigation from "@/components/navigation";
import {ClerkProvider} from "@clerk/nextjs";
import {dark} from "@clerk/themes";
const Layout= async({children}:{children:React.ReactNode})=>{

    return(
        <ClerkProvider
            appearance={{baseTheme: dark}}
        >
            <main className="h-full overflow-y-scroll scrollbar-hide">
                <Navigation/>
                {children}
            </main>
            
        </ClerkProvider>
    )


}

export default Layout