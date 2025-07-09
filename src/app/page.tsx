import {SignedIn, SignedOut, SignInButton, SignUpButton, UserButton} from "@clerk/nextjs";
import { Button } from "@/components/ui/button"
import {ModeToggle} from "@/components/ModeToggle/ModeToggle";

export default function Home() {
  return (
    <div>
        <header className="flex justify-end items-center p-4 gap-4 h-16">
            <SignedOut>
                <SignInButton mode="modal">
                    <Button variant="outline">Sign In</Button>
                </SignInButton>
                <SignUpButton>
                    <Button variant="secondary">Sign Up</Button>
                </SignUpButton>
            </SignedOut>
            <SignedIn>
                <UserButton />
            </SignedIn>
            <ModeToggle/>
        </header>
    </div>
  );
}
