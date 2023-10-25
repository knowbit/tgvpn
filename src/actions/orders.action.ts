import { Telegraf } from 'telegraf';
import { IBotContext } from '../context/context.interface';
import { Action } from './action.class';

export class OrdersVpnAction extends Action {
  constructor(bot: Telegraf<IBotContext>) {
    super(bot)
  }
  handle(): void {
    this.bot.action('tmp_get_vpn', async (ctx) => {
      const session = ctx.client.session;
      if (!session) { throw new Error('No session user.') }
      await ctx.editMessageText(`
Данный бот работает в тестовом режиме бесплатно 💰 ‼️ 
Подключите "Тестовый период", и пользуйтесь.
Мы предупредим вас о любых изменениях.`)
    })

    this.bot.action('days_15', async (ctx) => {
      const session = ctx.client.session;
      if (!session) { throw new Error('No session user.') }
      await ctx.editMessageText('@@@@@@@@@@@@')
    })

    this.bot.action('month_1', async (ctx) => {
      const session = ctx.client.session;
      if (!session) { throw new Error('No session user.') }
      await ctx.editMessageText('sdfssssssssssssss')
    })

    this.bot.action('months_3', async (ctx) => {
      const session = ctx.client.session;
      if (!session) { throw new Error('No session user.') }
      await ctx.editMessageText('sdfssssssssssssss')
    })

    this.bot.action('months_6', async (ctx) => {
      const session = ctx.client.session;
      if (!session) { throw new Error('No session user.') }
      await ctx.editMessageText('sdfssssssssssssss')
    })

    this.bot.action('year_1', async (ctx) => {
      const session = ctx.client.session;
      if (!session) { throw new Error('No session user.') }
      await ctx.editMessageText('sdfssssssssssssss')
    })
  }
} 
