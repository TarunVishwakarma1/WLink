import React from "react";
import {getAuthUserDetails, verifyAndAcceptInvitation} from "@/lib/queries";
import {redirect} from "next/navigation";
import {currentUser} from "@clerk/nextjs/server";

const Page = async ({searchParams}:{searchParams:{plan:any;state:string;code:string}})=>{
    const agencyId = await verifyAndAcceptInvitation();
    console.log(agencyId);
    //get the user details
    const user = await  getAuthUserDetails();
    const authUser = await currentUser();
    console.log(authUser, "searchParams: "+searchParams)
    return(
    <div className='flex justify-center items-center mt-4 '>
        <div className='max-w-[850] border-[1px] p-4 rounded-xl'>
            <h1 className='text-4xl'>
                Create An Agency
            </h1>
        </div>
    </div>
    )

}



export default Page;