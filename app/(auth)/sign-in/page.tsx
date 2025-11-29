"use client";
import { useForm } from "react-hook-form";
import InputField from "@/components/forms/InputField";
import { Button } from "@/components/ui/button";
import FooterLink from "@/components/forms/FooterLink";

const SignIn = () => {
  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors, isSubmitting },
  } = useForm<SignInFormData>({
    defaultValues: {},
    mode: "onBlur",
  });

  const onSubmit = async (data: SignInFormData) => {
    try {
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <h1 className="form-title">Log In Your Account</h1>
      <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
        <InputField
          name="email"
          label="Email"
          placeholder="Enter your email"
          register={register}
          error={errors.email}
          validation={{
            required: "Email is required",
            pattern: {
              value: /^\S+@\S+$/i,
              message: "Please enter a valid email address",
            },
          }}
        />
        <InputField
          name="password"
          label="Password"
          type="password"
          placeholder="Enter your password"
          register={register}
          error={errors.password}
          validation={{
            required: "Password is required",
            minLength: {
              value: 8,
              message: "Password must be at least 8 characters",
            },
          }}
        />
        <Button
          type="submit"
          className="w-full yellow-btn mt-5"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Waiting for Login..." : "Log In"}
        </Button>

        <FooterLink
          text="Don't have an account?"
          linkText="Create one here!"
          href="/sign-up"
        />
      </form>
    </>
  );
};

export default SignIn;
