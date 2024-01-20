import { NextRequest, NextResponse } from "next/server";
import prisma from "@/app/libs/prismaDb";
import getCurrentUser from "@/app/action/getCurrentUser";

export const POST = async (req: NextRequest) => {
  try {
    const body = await req.json();
    const currentUser = await getCurrentUser();

    const { soalId, jawaban, poin } = body;

    const newJawaban = await prisma.jawab.create({
      data: {
        userId: Number(currentUser?.id),
        soalId: Number(soalId),
        jawaban,
        poin: Number(poin),
      },
    });

    if (!newJawaban) {
      return new NextResponse("Internal Server Error", { status: 500 });
    }

    const updatedSoal = await prisma.soal.update({
      where: {
        id: Number(soalId),
      },
      data: {
        isSolved: true,
      },
    });

    if (!updatedSoal) {
      return new NextResponse(
        "Internal Server Error: cannot update soal status",
        { status: 500 }
      );
    }

    return new NextResponse("success insert jawaban", { status: 200 });
  } catch (error) {
    console.log(error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
};
