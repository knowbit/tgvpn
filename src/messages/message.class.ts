import { InlineKeyboardMarkup, ParseMode } from "telegraf/typings/core/types/typegram";
import { Markup } from "telegraf";

export interface ParamMessage {
  parse_mode?: ParseMode;
  disable_web_page_preview: boolean;
  reply_markup?: InlineKeyboardMarkup | undefined;
}

export class Message {
  protected text: string = '';
  protected parse_mode: ParseMode = 'Markdown';
  protected disable_web_page_preview: boolean = false;
  protected key_board?: InlineKeyboardMarkup | undefined;

  set setKeyBoard(val: { text: string, callback: string }[][]) {
    this.key_board = Markup.inlineKeyboard(val.map(elem => {
      return elem.map(mark => {
        return Markup.button.callback(mark.text, mark.callback)
      })
    })).reply_markup
  }

  set setText(val: string) {
    this.text = val;
  }

  set setParseMode(val: ParseMode) {
    this.parse_mode = val;
  }

  set setDisableWebPreview(bool: boolean) {
    this.disable_web_page_preview = bool;
  }

  get message(): string {
    return this.text;
  };

  get parametrs(): ParamMessage {
    return {
      parse_mode: this.parse_mode,
      disable_web_page_preview: this.disable_web_page_preview,
      reply_markup: this.key_board,
    }
  }
}
