import { User as UserTelegraf } from "telegraf/typings/core/types/typegram";
import { SessionData } from "../../context/context.interface";
import { Prisma, PrismaClient } from "@prisma/client";
import { ResponseInitUser } from "../types.response.client";

export async function createUser(
  prisma: PrismaClient,
  userData: UserTelegraf | undefined,
): Promise<ResponseInitUser> {
  try {
    if (!userData) { throw new Error('No data from user.') }

    const isUser: unknown = await prisma.user.findFirst({
      where: { userid: userData.id },
    });

    if (isUser !== null) {
      return { status: 'user_exists', data: isUser as SessionData };
    }

    const user: Prisma.UserCreateInput = {
      userid: userData.id,
      is_bot: userData.is_bot,
      first_name: userData.first_name,
      language_code: userData.last_name,
      username: userData.username,
      test_period_is_over: false,
      time_stop: 0,
      create_time: Date.now(),
      user_status: 'guest',
    };

    const createUser: unknown = await prisma.user.create({ data: user });

    if (!createUser) {
      throw new Error('User is not created.')
    }

    return { status: 'user_created', data: createUser as SessionData };
  } catch (err) {
    throw err;
  }
}
