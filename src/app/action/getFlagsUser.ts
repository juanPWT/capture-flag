import prisma from "@/app/libs/prismaDb";
import getCurrentUser from "./getCurrentUser";

const getFlagsUser = async () => {
  try {
    const currentUser = await getCurrentUser();
    if (!currentUser) {
      return [];
    }

    const flagsUser = await prisma.flag.findMany({
      where: {
        userId: currentUser.id,
      },
    });

    if (!flagsUser) {
      return [];
    }

    return flagsUser;
  } catch (error) {
    return [];
  }
};

export default getFlagsUser;
