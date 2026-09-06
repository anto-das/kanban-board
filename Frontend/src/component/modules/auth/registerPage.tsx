"use client";
import { useState } from "react";
import Link from "next/link";

import FormLogo from "@/src/component/ui/formLogo";
import z from "zod";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { useForm } from "@tanstack/react-form";
import { register } from "@/src/app/actions/auth.action";
import { toast } from "sonner";

export default function RegisterPage() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const formSchema = z.object({
    name: z.string().min(5, "Name must be at least 5 characters"),
    email: z.string().email("Invalid email address"),
    password: z.string().min(8, "Password must be at least 8 characters"),
  });

  const form = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
    validators: {
      onSubmit: formSchema,
    },
    onSubmit: async ({ value }) => {
      const loadingId = toast.loading("Registering...");
      try {
        const { data } = await register(value);
        toast.success(`Welcome ${data?.user.name}`, { id: loadingId });
      } catch (error: any) {
        toast.error(error.message, { id: loadingId });
      }
    },
  });

  return (
    <div
      className={`min-h-screen w-full flex items-center justify-center p-4 transition-colors duration-500 relative overflow-hidden ${
        isDarkMode
          ? "bg-[#070A13] text-slate-100"
          : "bg-slate-50 text-slate-800"
      }`}
    >
      {/* Decorative Gradient Background Glows (Adapts to Light/Dark) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className={`absolute top-[-10%] left-[-10%] w-125 h-125 rounded-full blur-[120px] transition-opacity duration-500 ${
            isDarkMode
              ? "bg-indigo-500/10 opacity-100"
              : "bg-indigo-500/5 opacity-60"
          }`}
        />
        <div
          className={`absolute bottom-[-10%] right-[-10%] w-125 h-125 rounded-full blur-[120px] transition-opacity duration-500 ${
            isDarkMode
              ? "bg-rose-500/5 opacity-100"
              : "bg-rose-500/5 opacity-40"
          }`}
        />
      </div>

      {/* Main Form Container Card */}
      <div
        className={`w-full max-w-md rounded-2xl border p-8 shadow-2xl backdrop-blur-md transition-all duration-500 relative z-10 ${
          isDarkMode
            ? "bg-[#0E1322]/80 border-slate-800/60 shadow-indigo-950/20"
            : "bg-white border-slate-200/60 shadow-slate-200/50"
        }`}
      >
        {/* Brand Identity & Header */}
        <FormLogo />

        {/* Input Form Fields */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            form.handleSubmit();
          }}
          className="space-y-4"
        >
          {/* Full Name */}
          <form.Field
            name="name"
            children={(field) => {
              const isInvalid =
                field.state.meta.isTouched && !field.state.meta.isValid;
              return (
                <Field data-invalid={isInvalid}>
                  <FieldLabel
                    className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1.5"
                    htmlFor={field.name}
                  >
                    Name
                  </FieldLabel>
                  <Input
                    id={field.name}
                    name={field.name}
                    value={field.state.value}
                    onChange={(e) => field.handleChange(e.target.value)}
                    aria-invalid={isInvalid}
                    placeholder="John Doe"
                    className="rounded border-slate-300 text-indigo-600 focus:ring-indigo-500/20 accent-indigo-600 cursor-pointer"
                  />
                  {isInvalid && <FieldError errors={field.state.meta.errors} />}
                </Field>
              );
            }}
          />

          {/* Email Address */}
          <form.Field
            name="email"
            children={(field) => {
              const isInvalid =
                field.state.meta.isTouched && !field.state.meta.isValid;
              return (
                <Field data-invalid={isInvalid}>
                  <FieldLabel
                    htmlFor={field.name}
                    className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1.5"
                  >
                    email
                  </FieldLabel>
                  <Input
                    id={field.name}
                    name={field.name}
                    type="email"
                    value={field.state.value}
                    onChange={(e) => field.handleChange(e.target.value)}
                    aria-invalid={isInvalid}
                    placeholder="name@example.com"
                    className="rounded border-slate-300 text-indigo-600 focus:ring-indigo-500/20 accent-indigo-600 cursor-pointer"
                  />
                  {isInvalid && <FieldError errors={field.state.meta.errors} />}
                </Field>
              );
            }}
          />

          {/* Password */}
          <form.Field
            name="password"
            children={(field) => {
              const isInvalid =
                field.state.meta.isTouched && !field.state.meta.isValid;
              return (
                <Field data-invalid={isInvalid}>
                  <FieldLabel
                    htmlFor={field.name}
                    className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1.5"
                  >
                    Password
                  </FieldLabel>
                  <Input
                    id={field.name}
                    name={field.name}
                    type="password"
                    value={field.state.value}
                    onChange={(e) => field.handleChange(e.target.value)}
                    aria-invalid={isInvalid}
                    placeholder="12341234"
                    className="rounded border-slate-300 text-indigo-600 focus:ring-indigo-500/20 accent-indigo-600 cursor-pointer"
                  />
                  {isInvalid && <FieldError errors={field.state.meta.errors} />}
                </Field>
              );
            }}
          />

          {/* Core Submit Button */}
          <button
            type="submit"
            className="w-full py-2.5 px-4 bg-indigo-600 hover:bg-indigo-500 active:scale-[0.99] text-white font-bold text-xs rounded-xl shadow-lg shadow-indigo-600/10 hover:shadow-indigo-600/20 transition-all duration-200 mt-2"
          >
            Create Free Account
          </button>
        </form>

        {/* Separator Divider Line */}
        <div className="relative flex py-4 items-center mt-4">
          <div
            className={`grow border-t transition-colors duration-500 ${isDarkMode ? "border-slate-800" : "border-slate-200"}`}
          />
          <span className="shrink mx-3 text-[10px] text-slate-400 uppercase tracking-widest font-mono">
            Or Join With
          </span>
          <div
            className={`grow border-t transition-colors duration-500 ${isDarkMode ? "border-slate-800" : "border-slate-200"}`}
          />
        </div>

        {/* Third-Party Social Auth OAuth Option */}
        <button
          type="button"
          className={`w-full py-2 px-4 rounded-xl text-xs font-semibold flex items-center justify-center gap-2 border transition-all duration-300 ${
            isDarkMode
              ? "border-slate-800 bg-[#070A13]/40 text-slate-200 hover:bg-[#070A13] hover:text-white"
              : "border-slate-200 bg-white text-slate-600 hover:bg-slate-50 hover:text-slate-800 shadow-sm"
          }`}
        >
          {/* Flat Vector Google Icon */}
          <svg className="w-3.5 h-3.5" viewBox="0 0 24 24">
            <path
              fill="#EA4335"
              d="M12 5.04c1.66 0 3.2.57 4.38 1.69l3.27-3.27C17.67 1.58 14.99 1 12 1 7.35 1 3.37 3.65 1.41 7.55l3.87 3a7.16 7.16 0 0 1 6.72-5.51z"
            />
            <path
              fill="#4285F4"
              d="M23.49 12.27c0-.81-.07-1.59-.2-2.36H12v4.51h6.46a5.54 5.54 0 0 1-2.41 3.64v3.03h3.89c2.28-2.1 3.55-5.19 3.55-8.82z"
            />
            <path
              fill="#FBBC05"
              d="M5.28 14.55A7.12 7.12 0 0 1 4.9 12c0-.89.15-1.74.43-2.55l-3.87-3A11.94 11.94 0 0 0 0 12c0 2.29.65 4.43 1.77 6.25l3.51-2.7z"
            />
            <path
              fill="#34A853"
              d="M12 23c3.24 0 5.97-1.07 7.96-2.91l-3.89-3.03c-1.08.72-2.47 1.16-4.07 1.16-3.14 0-5.8-2.12-6.75-4.99l-3.84 2.98A11.96 11.96 0 0 0 12 23z"
            />
          </svg>
          Sign up with Google
        </button>

        <p className="text-center text-[11px] text-slate-400 mt-6">
          Already have an account?{" "}
          <Link
            href="/login"
            className="font-semibold text-indigo-500 transition-colors hover:text-indigo-400"
          >
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}
