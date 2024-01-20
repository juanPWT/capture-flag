import prisma from "@/app/libs/prismaDb";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (
  req: NextRequest,
  { params }: { params: { id: number } }
) => {
  try {
    const soal = await prisma.soal.findUnique({
      where: {
        id: Number(params.id),
      },
      include: {
        User: true,
      },
    });

    if (!soal) {
      return NextResponse.json({
        status_code: 404,
        message: "Not Found",
        data: null,
      });
    }

    return NextResponse.json({
      status_code: 200,
      message: "success get soal",
      data: soal,
    });
  } catch (error) {
    console.log(error);
  }
};
