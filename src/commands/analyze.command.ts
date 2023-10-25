import { Telegraf } from "telegraf";
import { Command } from "./command.class";
import { IBotContext } from "../context/context.interface";

export class AnalyzeCommand extends Command {
  constructor(bot: Telegraf<IBotContext>) {
    super(bot);
  }

  handle(): void {
    let response: string = '';
    response += '/analyze = получить историю горгов.' +
      'Пример: "/analyze <адрес кошелька> eth" \n' +
      '/help - получить справку.';

    this.bot.command('analyze', (ctx) => {
      ctx.reply(response);
    })

  }
}

