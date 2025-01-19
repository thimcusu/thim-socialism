import prisma from "@/lib/client";
import { UserJSON } from "@clerk/nextjs/server";
// type User = {
//   id: string;
//   username: string;
//   email: string;
//   avatar: string;
//   name: string;
//   surname: string;
// };

export const createClerkUser = async (payload: UserJSON) => {
  const { username, email_addresses, image_url, first_name, last_name } = payload;
  const email = email_addresses[0].email_address;

  await prisma.user.create({
    data: {
      email,
      username: username || email,
      avatar: image_url,
      name: first_name,
      surname: last_name,
    },
  });
};

export const updateClerkUser = async (payload: UserJSON, id?: string) => {
  const { username, email_addresses, image_url, first_name, last_name } = payload;
  const email = email_addresses[0].email_address;

  await prisma.user.update({
    where: { id },
    data: {
      email,
      username: username || undefined,
      avatar: image_url,
      name: first_name,
      surname: last_name,
    },
  });
};
