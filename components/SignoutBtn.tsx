import React from "react";
import { Button } from "./ui/button";
import { Signout } from "@/action/user";

type Props = {};

const SignoutBtn = async (props: Props) => {
  return (
    <form action={Signout}>
      <Button
        type="submit"
        className="text-base p-3 bg-slate-950 text-yellow-300 font-bold border-2 border-yellow-300  tracking-widest
          hover:bg-slate-900 hover:border-yellow-400 hover:text-yellow-400"
      >
        Log Out
      </Button>
    </form>
  );
};

export default SignoutBtn;
