import { PrismaClient, Prisma } from '@prisma/client';
import { User as UserTelegraf } from "telegraf/typings/core/types/typegram";
import { SessionData, ParamSessionData } from '../context/context.interface';
import { ResponseInitUser } from './types.response.client';

export class DbClient {
  private prisma = new PrismaClient();
  public session?: SessionData;

  async findFirst(param: ParamSessionData): Promise<SessionData | null> {
    try {
      return await this.prisma.user.findFirst({
        where: param

      }) as SessionData | null;
    } catch (err) {
      throw err;
    }
  }

  async init(userData: UserTelegraf | undefined): Promise<ResponseInitUser> {
    try {
      if (!userData) { throw new Error('No data from user.') }
      const data = await this.findFirst({
        userid: userData.id
      })

      if (data !== null) {
        this.session = data;
        return { status: 'user_exists', data: data };
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
        outline_keys: '',
      };

      const createUser = await this.prisma.user.create({ data: user });
      if (!createUser) { throw new Error('User is not created.') }
      this.session = createUser as SessionData;
      return { status: 'user_created', data: createUser as SessionData };
    } catch (err) {
      throw err;

    }
  }

  async update(param: ParamSessionData, id?: number) {
    try {
      if (!this.session) { throw new Error('No session user.') }
      const updateUser = await this.prisma.user.update({
        where: { id: id || this.session.id },
        data: param,
      }) as SessionData;

      this.session = updateUser;

      return { status: 'ok', data: updateUser };
    } catch (err) {
      throw err
    }
  }
}
