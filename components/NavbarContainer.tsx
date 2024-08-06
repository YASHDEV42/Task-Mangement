import { auth } from "@/auth";
import React from "react";
import dynamic from "next/dynamic";
import { User } from "@/types";
interface Session {
  user: User | null;
}

const DynamicNavbar = dynamic(() => import("./Navbar"), {
  ssr: false,
});

type Props = {};

const NavbarContainer = async (props: Props) => {
  const session = (await auth()) as Session | null;
  const user = session?.user as User | null;
  console.log("navbarwrapper", user);

  return <DynamicNavbar user={user || null} />;
};

export default NavbarContainer;
