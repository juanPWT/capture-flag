import prisma from "@/app/libs/prismaDb";

const getChallanges = async () => {
  try {
    const Challanges = await prisma.soal.findMany({
      include: {
        User: true,
      },
      where: {
        isSolved: false,
      },
    });

    if (!Challanges) {
      return [];
    }

    return Challanges;
  } catch (error) {
    return [];
  }
};

export default getChallanges;
