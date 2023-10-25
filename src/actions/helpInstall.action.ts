import { Telegraf } from 'telegraf';
import { IBotContext } from '../context/context.interface';
import { Action } from './action.class';
import { HelpInstallMessage } from '../messages/helpInstall.message';

export class HelpInstallAction extends Action {
  constructor(bot: Telegraf<IBotContext>) {
    super(bot)
  }
  handle(): void {
    this.bot.action('help_install', async (ctx) => {
      const session = ctx.client.session;
      if (!session) { throw new Error('No session user.') }
      const helpInstall = new HelpInstallMessage()
      await ctx.editMessageText(helpInstall.message, helpInstall.parametrs)
    })
  }
}
