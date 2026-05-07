

// 'use client';
// import { authClient } from "@/lib/auth-client";
// import { Check } from "@gravity-ui/icons";
// import { Button, Description, FieldError, Form, Input, Label, TextField } from "@heroui/react";
// import Link from "next/link";
// import { toast } from "react-toastify";


// const SignUpPage = () => {
//     const onSubmit = async(e) => {
//         e.preventDefault();
//         const formData = new FormData(e.currentTarget);
//         const UserData =Object.fromEntries(formData.entries());
//         console.log("From submitted with:", UserData);
//         const {data, error} = await authClient.signUp.email({
//             name: UserData.name,
//             email: UserData.email,
//             password: UserData.password,
//            callbackURL:'/'
//         })
//         console.log("Sing up response:", {data, error});
//         if(error){
//             toast.error(error.message || "Signup failed!");
//         }if(data){
//             toast.success("Account created successfully!");
//   }
//         }
//     };
//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
       
//         <div className="w-full max-w-[400px] p-8 shadow-lg border-none bg-white rounded-[20px]">
//               <div className="text-center mb-8">
//           <h1 className="text-3xl font-extrabold text-[#1a2b3c] mb-2">Create Account</h1>
//           <p className="text-gray-500 font-medium">Join SunCart today!</p>
//         </div>
//             <Form className="flex flex-col gap-4 w-full"  onSubmit={onSubmit}>

//                 {/* name */}
//                 <TextField
//                     isRequired
//                     name="name"
//                     validate={(value) => {
//                         if (value.length < 3) {
//                             return "Name must be at least 3 characters";
//                         }
//                         return null;
//                     }}
//                 >
//                     <Label>Name</Label>
//                     <Input name="name" placeholder="John Doe" />
//                     <FieldError />
//                 </TextField>
                
//                 {/* email */}
//                 <TextField
//                     isRequired
//                     name="email"
//                     type="email"
//                     validate={(value) => {
//                         if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
//                             return "Please enter a valid email address";
//                         }
//                         return null;
//                     }}
//                 >
//                     <Label>Email</Label>
//                     <Input name="email" placeholder="john@example.com" />
//                     <FieldError />
//                 </TextField>
//                 <TextField
//                     isRequired
//                     minLength={8}
//                     name="password"
//                     type="password"
//                     validate={(value) => {
//                         if (value.length < 8) {
//                             return "Password must be at least 8 characters";
//                         }
//                         if (!/[A-Z]/.test(value)) {
//                             return "Password must contain at least one uppercase letter";
//                         }
//                         if (!/[0-9]/.test(value)) {
//                             return "Password must contain at least one number";
//                         }
//                         return null;
//                     }}
//                 >
//                     <Label>Password</Label>
//                     <Input name="password" placeholder="Enter your password" />
//                     <Description>Must be at least 8 characters with 1 uppercase and 1 number</Description>
//                     <FieldError />
//                 </TextField>
//                 <div className="flex gap-2">
//                     <Button type="submit">
//                         <Check />
//                         Submit
//                     </Button>
//                     <Button type="reset" variant="secondary">
//                         Reset
//                     </Button>
                    
//                 </div>
//                  <p className="text-center mt-8 text-gray-600 font-medium">
//           Already have an account?{" "}
          
//           <Link
//             href="/auth/signin"
//             className="text-orange-600 font-bold hover:underline"
//           >
//             Login here
//           </Link>
//         </p>
//             </Form>

//         </div>
          
//         </div>
    
//   );

// export default SignUpPage;


'use client';

import { authClient } from "@/lib/auth-client";
import { Check } from "@gravity-ui/icons";
import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField
} from "@heroui/react";
import Link from "next/link";
import { toast } from "react-toastify";

const SignUpPage = () => {

  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const UserData = Object.fromEntries(formData.entries());

    console.log("Form submitted:", UserData);

    const { data, error } = await authClient.signUp.email({
      name: UserData.name,
      email: UserData.email,
      password: UserData.password,
      callbackURL: "/",
    });

    if (error) {
      toast.error(error.message || "Signup failed!");
    }

    if (data) {
      toast.success("Account created successfully!");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">

      <div className="w-full max-w-[400px] p-8 shadow-lg bg-white rounded-[20px]">

        <div className="text-center mb-8">
          <h1 className="text-3xl font-extrabold text-[#1a2b3c] mb-2">
            Create Account
          </h1>
          <p className="text-gray-500">Join SunCart today!</p>
        </div>

        <Form className="flex flex-col gap-4 w-full" onSubmit={onSubmit}>

          {/* name */}
          <TextField isRequired name="name">
            <Label>Name</Label>
            <Input name="name" placeholder="John Doe" />
            <FieldError />
          </TextField>

          {/* email */}
          <TextField isRequired name="email" type="email">
            <Label>Email</Label>
            <Input name="email" placeholder="john@example.com" />
            <FieldError />
          </TextField>

          {/* password */}
          <TextField isRequired name="password" type="password">
            <Label>Password</Label>
            <Input name="password" placeholder="Enter password" />
            <Description>
              Must be 8+ chars with 1 uppercase & 1 number
            </Description>
            <FieldError />
          </TextField>

          <Button type="submit">
            <Check />
            Submit
          </Button>

          <p className="text-center mt-6 text-gray-600">
            Already have an account?{" "}
            <Link href="/auth/signin" className="text-orange-600 font-bold">
              Login here
            </Link>
          </p>

        </Form>
      </div>
    </div>
  );
};

export default SignUpPage;