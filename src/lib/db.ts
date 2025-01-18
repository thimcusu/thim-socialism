// import { PrismaClient } from "@prisma/client";

// declare global {
//   var prisma: PrismaClient | undefined;
// }

// let prisma: PrismaClient;

// if (typeof window === "undefined") {
//   if (process.env.NODE_ENV === "production") {
//     prisma = new PrismaClient();
//   } else {
//     prisma = new PrismaClient();
//     if (!globalThis.prisma) {
//       globalThis.prisma = new PrismaClient();
//     }
//     prisma = globalThis.prisma;
//   }
// } else {
//   // Log a warning instead of throwing an error for non-server environments
//   console.warn("PrismaClient should ideally be initialized server-side.");
//   prisma = {} as PrismaClient; // Dummy PrismaClient to avoid runtime errors (not usable)
// }

// export default prisma;
