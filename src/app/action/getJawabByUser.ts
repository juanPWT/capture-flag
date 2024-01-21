import prisma from "@/app/libs/prismaDb";
import getCurrentUser from "./getCurrentUser";

const getJawabByUser = async () => {
  try {
    const currentUser = await getCurrentUser();
    const jawabs = await prisma.jawab.findMany({
      where: {
        userId: currentUser?.id,
      },
      include: {
        Soal: {
          include: {
            User: true,
          },
        },
      },
    });

    if (!jawabs) return [];

    return jawabs;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export default getJawabByUser;
