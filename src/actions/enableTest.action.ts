import { Telegraf } from "telegraf";
import { IBotContext } from "../context/context.interface";
import { Action } from "./action.class";
import { OutlineApi } from "../outline/api.outlile";
import { ConfigService } from "../config/config.service";

export class EnableTestAction extends Action {
  constructor(bot: Telegraf<IBotContext>) {
    super(bot)
  }
  handle(): void {
    this.bot.action('get_vpn_test', async (ctx) => {
      const session = ctx.client.session;
      if (!session) { throw new Error('No session user.') }

      if (session.test_period_is_over) {
        ctx.editMessageText('Вы уже используете тестовый период.');
    } else {
      const configService = new ConfigService();
      const outapi = new OutlineApi(configService.get('OUTLINE_URL_API'));
      const { data } = await outapi.createKey();
      if(data) {
        await ctx.client.update({
          user_status: 'testing',
          test_period_is_over: true,
          outline_keys: data.id,
        })
        await ctx.editMessageText(`
Тестовый период активирован. 
Ваш ключ: \` ${data.accessUrl}\``, { parse_mode: 'Markdown' });
      }
    }
    })
}
}
