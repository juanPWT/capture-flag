import getCurrentUser from "@/app/action/getCurrentUser";
import prisma from "@/app/libs/prismaDb";
import { NextRequest, NextResponse } from "next/server";
import { writeFile } from "fs/promises";

export const POST = async (req: NextRequest) => {
  try {
    const form = await req.formData();
    const currentUser = await getCurrentUser();

    // validate the flag
    const flag: string = form.get("flag") as string;
    const flagData = await prisma.flag.findFirst({
      where: {
        flag: flag,
        userId: currentUser?.id,
      },
    });

    if (!flagData) {
      return new NextResponse("Flag wrong and invalid", { status: 400 });
    }

    //if duplicate flag
    const soalValidateFlag = await prisma.soal.findFirst({
      where: {
        flagId: flagData.id,
      },
    });

    if (soalValidateFlag) {
      return new NextResponse("Flag already used", { status: 400 });
    }

    // file
    const file: File | null = form.get("file") as unknown as File;

    // save image
    if (file) {
      const bytes = await file.arrayBuffer();
      const buffer = Buffer.from(bytes);

      const path = `public/soal/${file.name}`;
      await writeFile(path, buffer);
    }

    //for soal
    const soal: string = form.get("soal") as string;
    const poin: string = form.get("poin") as string;
    const kategori: string = form.get("kategori") as string;

    //validate poin soal under 0
    if (Number(poin) < 1) {
      return new NextResponse("Poin must be greater than 0", { status: 400 });
    }

    //if user have 0 poin
    if (Number(currentUser?.poin === 0)) {
      return new NextResponse("you have 0 poin, cannot generate challenge", {
        status: 400,
      });
    }

    //validate upper than currentUser poin
    if (Number(poin) > (currentUser?.poin || 0)) {
      return new NextResponse("your poin are low ", { status: 400 });
    }

    //save soal
    const newSoal = await prisma.soal.create({
      data: {
        userId: currentUser?.id as number,
        flagId: flagData.id,
        soal: soal,
        poin: Number(poin),
        kategori: kategori,
        file: file ? file.name : null,
      },
    });

    if (!newSoal) {
      return new NextResponse("failed to generte soal", { status: 400 });
    }

    //update user poin
    const updatePoin = await prisma.user.update({
      where: {
        id: Number(currentUser?.id),
      },
      data: {
        poin: Number(currentUser?.poin) - Number(poin),
      },
    });

    return new NextResponse("success generate soal", { status: 200 });
  } catch (error) {
    console.log(error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
};
