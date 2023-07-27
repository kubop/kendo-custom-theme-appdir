'use client'

import { Button } from '@progress/kendo-react-buttons';
import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <Link href="/about">
        <Button themeColor="primary">Primary</Button>
      </Link>

      <Link href="/contact">
        <Button themeColor="secondary">Secondary</Button>
      </Link>
    
      <Link href="/privacy">
        <Button themeColor="tertiary">Tertiary</Button>
      </Link>

      <Button themeColor="info" onClick={() => {
        document.cookie = "tenantId=2";
      }}>Set theme cookie</Button>
    </main>
  )
}
