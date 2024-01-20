import getCurrentUser from "@/app/action/getCurrentUser";
import prisma from "@/app/libs/prismaDb";
import { NextResponse, NextRequest } from "next/server";

export const POST = async (req: NextRequest) => {
  try {
    const body = await req.json();
    const currentUser = await getCurrentUser();
    const { signature } = body;

    const flag = `flag{${currentUser?.id}_${currentUser?.name}_${signature}}`;

    const newFlag = await prisma.flag.create({
      data: {
        flag: flag,
        userId: currentUser?.id as number,
      },
    });

    if (!newFlag) {
      return new NextResponse("Internal Server Error", { status: 500 });
    }

    return new NextResponse("Flag Is Created", { status: 201 });
  } catch (error) {
    console.log(error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
};
