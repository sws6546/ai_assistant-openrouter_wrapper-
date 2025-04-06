import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";
import Button from "./Button";

export default function Header() {
  return (
    <header
      className="flex justify-end items-center p-2 gap-4 mb-0 rounded-full pl-6 pr-6
      bg-slate-400/10 backdrop-blur-sm
      border-2 border-slate-400/30
      ">
      <SignedOut>
        <SignInButton>
          <Button>Sign In</Button>
        </SignInButton>
        <SignUpButton>
          <Button>Sign Up</Button>
        </SignUpButton>
      </SignedOut>
      <SignedIn>

        <UserButton />
      </SignedIn>
    </header>
  )
}
