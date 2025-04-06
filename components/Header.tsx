import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";
import Button from "./Button";

export default function Header() {
  return (
    <>
      <SignedOut>
        <header
          className="flex justify-end items-center p-2 gap-4 mb-0 rounded-full 
      bg-slate-400/10 backdrop-blur-sm
      border-2 border-slate-400/30
      ">
          <SignInButton>
            <Button>Sign In</Button>
          </SignInButton>
          <SignUpButton>
            <Button>Sign Up</Button>
          </SignUpButton>
        </header>
      </SignedOut>
      <SignedIn>
        <div className="fixed top-3 right-3 z-10 p-4 rounded-full flex flex-row items-center justify-center
        bg-green-400/10 backdrop-blur-sm
          border-2 border-slate-400/30"
        ><UserButton /></div>
      </SignedIn>
    </>
  )
}
