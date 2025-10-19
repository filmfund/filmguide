import Link from "next/link";

import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Guide2Film3',
}

export default function Home() {
  return (
   <>
      <Link href='/dashboard'>Try App</Link>
   </>
  );
}
