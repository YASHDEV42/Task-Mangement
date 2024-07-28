import { auth } from "@/auth";
import { redirect } from "next/navigation";
import LogIn from "@/components/LogIn";
const Login = async () => {
  const session = await auth();
  console.log(session?.user);

  const user = session?.user;
  if (user) {
    redirect("/");
  }

  return <LogIn />;
};

export default Login;
