import { Soal, User } from "@prisma/client";

export type FullSoalInterface = Soal & {
  User: User;
};
