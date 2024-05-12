
import React from 'react'
import { Button } from "./ui/moving-border";
import Link from 'next/link';
const ButtonUi = () => {
  return (
    <div>
      <Link href={"/all-courses"}><Button
        borderRadius="1.75rem"
        className="text-lg bg-white dark:bg-zinc-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
      >
        Explore our Course -{">"}
      </Button></Link>
    </div>
  )
}

export default ButtonUi
