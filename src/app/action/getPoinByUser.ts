import prisma from "@/app/libs/prismaDb";
import getCurrentUser from "./getCurrentUser";

const getPoinByUser = async () => {
  try {
    const currentUser = await getCurrentUser();
    if (!currentUser) return 0;

    const poins = await prisma.jawab.findMany({
      where: {
        userId: currentUser.id,
      },
    });

    if (!poins) return 0;

    let totalPoin: number = 0;

    poins.forEach((poin) => {
      totalPoin += poin.poin;
    });

    return totalPoin;
  } catch (error) {
    console.log(error);
    return 0;
  }
};

export default getPoinByUser;
