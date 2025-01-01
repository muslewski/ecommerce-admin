import { LoginForm } from "@/components/auth/login-form";
import { Suspense } from "react";

export default function LoginPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <h1>Login</h1>
      <p>Sign in to your account</p>
      <LoginForm />
    </Suspense>
  );
}
