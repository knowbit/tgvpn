import { Telegraf } from "telegraf";
import { Command } from "./command.class";
import { IBotContext } from "../context/context.interface";
import { MenuKeyboardMessage } from "../messages/menuKeyboard.message";
// import { Markup } from "telegraf/typings/markup";

export class StartCommand extends Command {
  constructor(bot: Telegraf<IBotContext>) {
    super(bot);
  }

  handle(): void {
    this.bot.start(async (ctx) => {
      const startMessage = `
Данный бот работает в тестовом режиме бесплатно 💰 ‼️ 
Подключите "Тестовый период", и пользуйтесь.
Мы предупредим вас о любых изменениях.

📱 Доступ ко всем ресурсм, таким как: Facebook, TikTok, Instagram, Twitter, Netflix, Spotify, Apple ...

💳 Оплата  удобным способом, QIWI / МИР / VISA.   

‼️ Безлимитный трафик и самые низкие цены на рынке <b>!</b>`

      await ctx.replyWithHTML(startMessage, {
        reply_markup: {
          keyboard: [['Menu']],
          resize_keyboard: true,
        }
      })

      const menu = new MenuKeyboardMessage();
      menu.setParseMode = 'HTML';

      await ctx.replyWithHTML('Выберите действие', menu.parametrs)
    })

    this.bot.hears('Menu', (ctx) => {
      ctx.deleteMessage();
      const menu = new MenuKeyboardMessage();
      menu.setParseMode = 'HTML';
      ctx.replyWithHTML('Выберите действие', menu.parametrs)
    })
  }
}
