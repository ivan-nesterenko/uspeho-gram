import { z } from "zod";
import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "gram/server/api/trpc";
import { signInSchema, signUpSchema } from "gram/shared";
import { prisma } from "gram/server/db";

export const authRouter = createTRPCRouter({
    createUser:publicProcedure.input(signUpSchema).mutation(({input})=>{
      const newUser = prisma.user.create({
        data:{

        }
      })
    }),
    findUser:publicProcedure.input(z.object({
      username:z.string()
    })).mutation(({input})=>{
      const user = prisma.user.findUnique({
        where:{
          id: /// username
        }
      })
    }),
    updateUser:publicProcedure.input(signUpSchema).mutation(({input})=>{
      const user = prisma.user.update({
        data:{
          
        },
        where:{
          id://username
        }
      })
    }),
    deleteUser:publicProcedure.input(signInSchema).mutation(({input})=>{
      const user = prisma.user.delete({
        where:{
          id://username + password
        }
      })
    }),
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.example.findMany();
  }),
});
