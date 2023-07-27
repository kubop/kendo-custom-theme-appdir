'use client'

import { Button } from '@progress/kendo-react-buttons';
import Link from 'next/link';

export default function About() {
  return (
    <main>
      <Link href="/">
        <Button themeColor="primary">Back</Button>
      </Link>
    </main>
  )
}
