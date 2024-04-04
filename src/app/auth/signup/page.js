import Link from "next/link";
import { SignUpForm } from "@/app/components/SignUpForm";

 const SignupPage = () => {
    return (
        <div className="h-screen flex  justify-center flex-col">
        <h3 className="text-5xl text-center mt-10 mb-10">SignUp</h3>
        <div className="flex items-center justify-center  flex-col">
        <SignUpForm />
        </div>
        </div>
    );
  };
  
  export default SignupPage;