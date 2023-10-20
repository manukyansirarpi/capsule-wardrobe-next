"use client"
import Link from "next/link";
import React from "react";
import { useSession, signIn, signOut } from "next-auth/react"


const Navbar = () => {
  
  const { data: session } = useSession()

  return (
    <div className="grid grid-cols-12 gap-6 m-8">
      <Link href="/" className="col-span-4 text-3xl italic ">
        <span className="p-2">Capsule</span>
        <span className="text-amber-600">Wardrop</span>
      </Link>
      <ul className="flex text-xl col-span-4 justify-evenly text-cyan-950	">
        <li>
          <Link href="/capsules">Capsules</Link>
        </li>
        <li>
          <Link href="/looks">Looks</Link>
        </li>
        <li>
          <Link href="/items">All Items</Link>
        </li>
      </ul>
      { !session && <div className="col-span-3 flex justify-self-end">
        <Link href="/login">
          <button className="flex flex-row w-20">
            <span>Login</span>
          </button>
        </Link>
        <Link href="/signup" className="  ">
          <button className="flex flex-row w-44">
            <span>Create an account</span>
            <svg
            className="mt-1"
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 640 512"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M624 208h-64v-64c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v64h-64c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h64v64c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-64h64c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zm-400 48c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"></path>
            </svg>
          </button>
        </Link>
      </div>
      }

      { session && <div className="col-span-3 flex justify-self-end"> 
        <Link href="/profile">
          <button className="flex flex-row w-20">
              <span>Profile</span>
                </button>
                </Link> 
                <button className="flex flex-row w-20" onClick={() => signOut()}>   
                <span>Sign Out</span>
          </button>
        </div>
      }

    </div>
  );
};

export default Navbar;
