import ChatWindow from "@/components/ChatWindow";
import { SignedIn, SignedOut } from "@clerk/nextjs";

export default function Home() {

  return (
    <div className="h-full">
      <SignedOut>
        <div className="w-full h-full flex flex-col justify-center items-center">
          <p className="text-3xl">You must be Signed In</p>
        </div>
      </SignedOut>
      <SignedIn>
        <ChatWindow />
      </SignedIn>
    </div>
  );
}
