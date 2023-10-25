import { Telegraf } from "telegraf";
import { Command } from "./command.class";
import { IBotContext } from "../context/context.interface";
import { SceneSessionData } from "telegraf/typings/scenes";
import { converMsToDate } from "../handlers/convertMsToDate";

export class HelpCommand extends Command {

  constructor(bot: Telegraf<IBotContext>) {
    super(bot);
  }

  handle(): void {

    // this.bot.command('status', (ctx) => {
    //   ctx.reply(
    //     'Приветствую! \n' +
    //     'Ваш статус "Пользователь". \n' +
    //     'Оставшийся период : ' +
    //     this.resLeftTime(ctx.session.timeLeft) + '\n'
    //   )
    // })

  }

  resLeftTime(ms: number): string {
    const leftTime = converMsToDate(BigInt(ms));
    if (leftTime.days === 0) {

    }
    const result = ms / 3600000;
    return String(Math.round(result));
  }
}

