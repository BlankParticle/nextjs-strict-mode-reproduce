import Link from "next/link";
import ClientComponentPage1 from "./client";

export default function Home() {
  return (
    <div>
      <h1>Hello World</h1>
      <Link href="/page-2">Go to Page 2</Link>
      <ClientComponentPage1 />
    </div>
  );
}
