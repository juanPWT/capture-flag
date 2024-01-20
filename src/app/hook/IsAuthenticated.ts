//use in  client side
import { useSession } from "next-auth/react";

const IsAuthenticated = () => {
  const session = useSession();

  if (session?.status === "authenticated") {
    return true;
  } else {
    return false;
  }
};

export default IsAuthenticated;
