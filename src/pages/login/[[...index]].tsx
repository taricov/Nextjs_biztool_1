import { SignIn } from "@clerk/nextjs";

const SignInPage = () => (
  <SignIn path="/login" routing="path" signUpUrl="/sign-up" />
  );

export default SignInPage;