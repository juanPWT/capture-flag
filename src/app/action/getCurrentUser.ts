import prisma from "@/app/libs/prismaDb";
import getSessions from "./getSessions";

const getCurrentUser = async () => {
  try {
    const sessions = await getSessions();
    if (!sessions?.user?.email === null) {
      return null;
    }

    const currentUser = await prisma.user.findUnique({
      where: {
        email: sessions?.user?.email as string,
      },
    });

    if (!currentUser) {
      return null;
    }

    return currentUser;
  } catch (error) {
    console.log(error);

    return null;
  }
};

export default getCurrentUser;
