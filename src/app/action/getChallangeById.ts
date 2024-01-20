import prisma from "@/app/libs/prismaDb";

const getChallangeById = async (id: number) => {
  try {
    const challange = await prisma.soal.findUnique({
      where: {
        id: id,
      },
      include: {
        User: true,
        Flag: true,
      },
    });

    if (!challange) {
      return null;
    }

    return challange;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export default getChallangeById;
