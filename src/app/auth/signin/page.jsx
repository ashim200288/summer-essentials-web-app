'use client'
import { authClient } from "@/lib/auth-client";
import { Check, Eye, EyeSlash } from "@gravity-ui/icons";
import { Button, Description, FieldError, Form, Input, InputGroup, Label, TextField } from "@heroui/react";
import Link from "next/link";
import { useState } from "react";
import { toast } from "react-toastify";

const SignInPage = () => {
    const [isVisible, setIsVisible] = useState(false);

    const onSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const UserData = Object.fromEntries(formData.entries());

        console.log("Form submitted with:", UserData);

        const { data, error } = await authClient.signIn.email({
            email: UserData.email,
            password: UserData.password,
            rememberMe: true,
            callbackURL: '/'
        });

        console.log("Sign in response:", { data, error });

        if (error) {
            toast.error(error.message || "Signin failed!");
        }

        if (data) {
            
            toast.success("Sign in successful! Please check your email to verify your account.");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
            <div className="w-full max-w-[400px] p-8 shadow-lg border-none bg-white rounded-[20px]">
                {/* Header Section */}
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-extrabold text-[#1a2b3c] mb-2">Welcome Back!</h1>
                    <p className="text-gray-500 font-medium">Login to access your account</p>
                </div>
                <Form className="flex w-96 flex-col gap-4" onSubmit={onSubmit}>

                    {/* email */}
                    <TextField className="w-full max-w-[280px]"
                        isRequired
                        name="email"
                        type="email"
                        validate={(value) => {
                            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                                return "Please enter a valid email address";
                            }
                            return null;
                        }}
                    >
                        <Label>Email</Label>
                        <Input name="email" placeholder="john@example.com" />
                        <FieldError />
                    </TextField>

                    {/* password */}
                    <TextField className="w-full max-w-[280px]" name="password">
                        <Label>Password</Label>
                        <InputGroup>
                            <InputGroup.Input
                                className="w-full max-w-[280px]"
                                type={isVisible ? "text" : "password"}
                                name="password"
                                placeholder="Your password"
                            />
                            <InputGroup.Suffix className="pr-0">
                                <Button
                                    isIconOnly
                                    aria-label={isVisible ? "Hide password" : "Show password"}
                                    size="sm"
                                    variant="ghost"
                                    onPress={() => setIsVisible(!isVisible)}
                                >
                                    {isVisible ? <Eye className="size-4" /> : <EyeSlash className="size-4" />}
                                </Button>
                            </InputGroup.Suffix>
                        </InputGroup>
                    </TextField>

                    <div className="flex gap-2">
                        <Button type="submit">
                            <Check />
                            Submit
                        </Button>

                        <Button type="reset" variant="secondary">
                            Reset
                        </Button>
                    </div>
                </Form>
                <p className="text-center mt-8 text-gray-600 font-medium">
                    Don't have an account?{" "}
                    <Link href="/auth/signup" className="text-orange-600 font-bold hover:underline">
                        Register here
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default SignInPage;

