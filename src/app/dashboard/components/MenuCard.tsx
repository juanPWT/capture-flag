import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Link from "next/link";
import React from "react";
import { IoMenu } from "react-icons/io5";

interface MenuCardProps {
  title?: string;
  description?: string;
  icon?: any;
  path?: string;
}

const MenuCard: React.FC<MenuCardProps> = ({
  title,
  description,
  icon: Icon,
  path,
}) => {
  return (
    <Link href={path ? path : "#"}>
      <Card className="hover:bg-slate-50 dark:hover:bg-slate-500">
        <CardHeader>
          <div className="flex items-center gap-2 justify-between">
            <div className="text-sm md:text-lg font-semibold">
              {title ? title : "what menu ?"}
            </div>
            {Icon ? <Icon /> : <IoMenu />}
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-xs text-slate-700 dark:text-slate-50">
            {description ? description : "what description ?"}
          </p>
        </CardContent>
      </Card>
    </Link>
  );
};

export default MenuCard;
