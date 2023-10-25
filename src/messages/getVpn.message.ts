import { Message, ParamMessage } from "./message.class";

export class GetVpnMessage extends Message {

  constructor() {
    super()
    super.setKeyBoard = [
      [{ text: '🔐 15 дней: 50 руб.', callback: 'tmp_get_vpn' }],
      [{ text: '🔐 1 месяц: 100 руб.', callback: 'tmp_get_vpn' }],
      [{ text: '🔐 3 месяца: 300 руб.', callback: 'tmp_get_vpn' }],
      [{ text: '💰 🔐 6 месяцев: 500 руб. (-20%)', callback: 'tmp_get_vpn' }],
      [{ text: '💰 🔐 1 год: 1200 руб. (-20%)', callback: 'tmp_get_vpn' }],

      // [{ text: '🔐 15 дней: 50 руб.', callback: 'days_15' }],
      // [{ text: '🔐 1 месяц: 100 руб.', callback: 'month_1' }],
      // [{ text: '🔐 3 месяца: 300 руб.', callback: 'months_3' }],
      // [{ text: '💰 🔐 6 месяцев: 500 руб. (-20%)', callback: 'months_6' }],
      // [{ text: '💰 🔐 1 год: 1200 руб. (-20%)', callback: 'year_1' }],
    ]
  }

  get message(): string {
    const message = `
☑️ Выберите срок подписки.

📲 После оплаты вам будет выслан уникальный файл для подключения к VPN.

❔Инструкцию по установке вы можете найти в главном меню.`;

    if (this.text) { return this.text }
    return message;
  };

  get parametrs(): ParamMessage {
    return {
      parse_mode: 'HTML',
      disable_web_page_preview: true,
      reply_markup: this.key_board
    }
  }
}

// ☑️✅
//     📌🛜⤴️⚙️📆🔐  
