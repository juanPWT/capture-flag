"use client";

import IsAuthenticated from "@/app/hook/IsAuthenticated";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const ButtonHero = () => {
  if (IsAuthenticated()) {
    return (
      <Button asChild>
        <Link href={"/challange"}>Solve Challange</Link>
      </Button>
    );
  } else {
    return (
      <Button asChild>
        <Link href={"/auth"}>Get Started</Link>
      </Button>
    );
  }
};

export default ButtonHero;
