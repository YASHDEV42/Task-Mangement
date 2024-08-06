"use client";
import React, { useEffect } from "react";
import { useState } from "react";
import Link from "next/link";
import { Button } from "./ui/button";
import { User } from "@/types";
import { Menu, X } from "lucide-react";
import SignoutBtn from "./SignoutBtn";

interface NavbarProps {
  user: User | null;
}
const Navbar: React.FC<NavbarProps> = ({ user }) => {
  console.log("navbar", user);

  const [showHamburger, setShowHamburger] = useState(
    typeof window !== "undefined" ? window.innerWidth <= 768 : true
  );
  const [isOpen, setIsOpen] = useState<boolean>(false);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setShowHamburger(false);
      } else {
        setShowHamburger(true);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleHamburgerClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex justify-between items-center w-4/5 fixed top-1 left-[10vw]">
      <h3 className=" text-4xl">
        <Link href="/dashboard">
          <span className="text-yellow-300">YASH</span>TASK
        </Link>
      </h3>
      {showHamburger ? (
        <button onClick={handleHamburgerClick}>
          {isOpen ? <X /> : <Menu />}
        </button>
      ) : (
        <ul className="flex justify-end items-center flex-row gap-5 w-full text-2xl md:text-xl font-semibold">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          {user ? (
            <>
              <li>
                <Link href="/dashboard">Dashboard</Link>
              </li>
              <SignoutBtn />
            </>
          ) : (
            <>
              <li>
                <Link href="/register">Register</Link>
              </li>
              <li>
                <Link href="/login">Log In</Link>
              </li>
            </>
          )}
        </ul>
      )}
      {isOpen && (
        <div className="fixed top-10 left-0 w-screen h-screen bg-slate-900 z-[9999999999]">
          <ul className="h-full flex justify-center items-center flex-col gap-10 font-bold text-xl">
            <li>
              <Link onClick={() => setIsOpen(!isOpen)} href="/">
                Home
              </Link>
            </li>
            <li>
              <Link onClick={() => setIsOpen(!isOpen)} href="/about">
                About
              </Link>
            </li>
            {user ? (
              <>
                <li>
                  <Link onClick={() => setIsOpen(!isOpen)} href="/dashboard">
                    Dashboard
                  </Link>
                </li>
                <li>
                  <SignoutBtn />
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link onClick={() => setIsOpen(!isOpen)} href="/register">
                    Register
                  </Link>
                </li>
                <li>
                  <Link onClick={() => setIsOpen(!isOpen)} href="/login">
                    Login
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
