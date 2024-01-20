import prisma from "@/app/libs/prismaDb";
import getCurrentUser from "./getCurrentUser";

const getChallangeCurrentUser = async () => {
  try {
    const currentUser = await getCurrentUser();

    if (!currentUser) {
      return [];
    }

    const userChallange = await prisma.soal.findMany({
      where: {
        userId: currentUser.id,
      },
      include: {
        Flag: true,
      },
    });

    if (!userChallange) {
      return [];
    }

    return userChallange;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export default getChallangeCurrentUser;
