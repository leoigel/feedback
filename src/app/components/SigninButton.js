"use client";
import { signIn, useSession } from "next-auth/react";
import Link from "next/link";

export const SigninButton = () => {
    const { data: session } = useSession();
    return (
        <div className="flex items-center gap-2">
        {session && session.user && (
              <>
              <Button as={Link} onClick={() => signIn()}>Sign In</Button>
              </> 
       
        )}
      </div>
    )
}