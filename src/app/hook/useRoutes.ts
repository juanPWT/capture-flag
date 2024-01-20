import { useMemo } from "react";
import { usePathname } from "next/navigation";
import { signOut } from "next-auth/react";

// icons
import { CiHome } from "react-icons/ci";
import { CiLogout } from "react-icons/ci";
import { CiFlag1 } from "react-icons/ci";
import { RiQuestionnaireLine } from "react-icons/ri";

const useRoutes = () => {
  const pathname = usePathname();

  const routes = useMemo(
    () => [
      {
        name: "Home",
        path: "/dashboard",
        icon: CiHome,
        active: pathname === "/dashboard",
      },
      {
        name: "Flag",
        path: "/flag",
        icon: CiFlag1,
        active: pathname === "/flag",
      },
      {
        name: "Soal",
        path: "/soal",
        icon: RiQuestionnaireLine,
        active: pathname === "/soal",
      },
      {
        name: "Logout",
        path: "#",
        onClick: () => signOut(),
        icon: CiLogout,
      },
    ],
    [pathname]
  );

  return routes;
};

export default useRoutes;
