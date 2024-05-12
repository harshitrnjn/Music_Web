"use client"
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";

const navbar = ({ children }: { children?: string }) => {
    const [active, setActive] = useState<string | null>(null);
    return (
        <div className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50")}>
            <Menu setActive={setActive}>
                <Link href={"/"}><MenuItem setActive={setActive} active={active} item="Home"/></Link>
                <Link href={"/all-courses"}><MenuItem setActive={setActive} active={active} item="Courses">
                    {/* <div className="flex flex-col space-y-4 text-sm">
                        <HoveredLink href="/all-courses">All Courses</HoveredLink>
                        <HoveredLink href="/courses">Basic Music Theory</HoveredLink>
                        <HoveredLink href="/courses">Advanced Composition</HoveredLink>
                        <HoveredLink href="/courses">Song Writing</HoveredLink>
                        <HoveredLink href="/courses">Music Production</HoveredLink>
                    </div> */}
                </MenuItem></Link>
                <Link href={"/contact"}><MenuItem setActive={setActive} active={active} item="Conatct Us"></MenuItem></Link>
            </Menu>
        </div>
    )
}

export default navbar
