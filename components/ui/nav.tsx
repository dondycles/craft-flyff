"use client";

import Image from "next/image";
import { Link } from "@nextui-org/link";
import logo from "../../public/images/Flyff_2.png";
import { Button, ButtonGroup } from "@nextui-org/react";
export default function Nav() {
  return (
    <nav className="fixed w-[100%] top-0 py-8 flex flex-row gap-4 justify-between items-center px-4 sm:px-8  z-50 bg-foreground/25 ">
      <Link href="/" className="">
        <Image src={logo} alt="Flyff" height={114} width={114} />
      </Link>
      <ButtonGroup
        color="primary"
        variant="shadow"
        className="flex flex-row gap-[1px] mx-auto sm:mx-0"
      >
        <Button
          as={Link}
          className="font-bold text-white text-xs sm:text-base min-w-0"
          href="/"
        >
          NFT
        </Button>
        <Button
          as={Link}
          className="font-bold text-white text-xs sm:text-base  min-w-0"
          href="/"
        >
          ROADMAP
        </Button>
        <Button
          as={Link}
          className="font-bold text-white text-xs sm:text-base  min-w-0"
          href="/"
        >
          WHITEPAPER
        </Button>
      </ButtonGroup>
    </nav>
  );
}
