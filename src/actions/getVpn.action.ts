import { Telegraf } from 'telegraf';
import { IBotContext } from '../context/context.interface';
import { Action } from './action.class';
import { GetVpnMessage } from '../messages/getVpn.message';

export class GetVpnAction extends Action {
  constructor(bot: Telegraf<IBotContext>) {
    super(bot)
  }
  handle(): void {
    this.bot.action('get_vpn', async (ctx) => {
      const session = ctx.client.session;
      if (!session) { throw new Error('No session user.') }
      const helpInstall = new GetVpnMessage();
      await ctx.editMessageText(helpInstall.message, helpInstall.parametrs)
    })
  }
} 
