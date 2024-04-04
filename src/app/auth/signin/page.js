
import { SignInForm } from "@/app/components/SignInForm";
import Link from "next/link";


const SigninPage = ({ searchParams }) => {
  console.log({ searchParams });

  return (
    <div className="flex items-center h-screen justify-center flex-col ">
        <h3 className="text-5xl text-center mt-10 mb-10">Sign In</h3>
      <SignInForm  />
      <Link href={"/auth/forgotPassword"}>Forgot Your Password?</Link>
    </div>
  );
};

export default SigninPage;