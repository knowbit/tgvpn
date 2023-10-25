import { Markup, Telegraf } from "telegraf";
import { ConfigService } from "./config/config.service";
import { IConfigService } from "./config/config.interface";
import { Command } from "./commands/command.class";
import { StartCommand } from "./commands/start.command";
import { HelpCommand } from "./commands/help.command";
import { AnalyzeCommand } from "./commands/analyze.command";
import { DbClient } from "./orm/client";
import { IBotContext } from "./context/context.interface";
import { Action } from "./actions/action.class";
import { EnableTestAction } from "./actions/enableTest.action";
import { HelpInstallAction } from "./actions/helpInstall.action";
import { GetVpnAction } from "./actions/getVpn.action";
import { OrdersVpnAction } from "./actions/orders.action";

class Bot {
  bot: Telegraf<IBotContext>;
  comands: Command[] = [];
  actions: Action[] = [];
  constructor(private readonly configService: IConfigService) {
    this.bot = new Telegraf<IBotContext>(this.configService.get("TOKEN"));
    this.bot.use(async (ctx, next) => {
      ctx.client = new DbClient();
      if (ctx.from) {
        await ctx.client.init(ctx.from);
      }
      await next();
    });
    this.bot.use();
  }

  init() {
    this.comands = [
      new StartCommand(this.bot),
      new HelpCommand(this.bot),
      new AnalyzeCommand(this.bot),
    ];

    for (const comand of this.comands) {
      comand.handle();
    }

    this.actions = [
      new EnableTestAction(this.bot),
      new HelpInstallAction(this.bot),
      new GetVpnAction(this.bot),
      new OrdersVpnAction(this.bot),
    ];

    for (const action of this.actions) {
      action.handle();
    }

    this.bot.launch();
  }
}

const bot = new Bot(new ConfigService());
bot.init();
