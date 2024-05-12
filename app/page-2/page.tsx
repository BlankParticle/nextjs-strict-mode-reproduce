import Link from "next/link";
import ClientComponentPage2 from "./client";

export default function Page2() {
  return (
    <div>
      <Link href="/">Go to Home</Link>
      <ClientComponentPage2 />
    </div>
  );
}
