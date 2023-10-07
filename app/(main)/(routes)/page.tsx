import { ModeToggle } from "@/components/mode-toggle";
import { UserButton } from "@clerk/nextjs/app-beta";

export default function Home() {
  return (
    <div>
      This is a protected route
      <UserButton afterSignOutUrl="/" />
      <ModeToggle />
    </div>
  );
}
