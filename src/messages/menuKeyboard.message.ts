import { Message } from './message.class';


export class MenuKeyboardMessage extends Message {
  constructor() {
    super()
    super.setKeyBoard = [
      [{ text: '📲 Получить VPN  /  Тарифы 💰', callback: "get_vpn" }],
      [{ text: '🔧 Как установить VPN ? 🤷🏼‍♂️', callback: "help_install" }],
      // [{ text: '💰 Тарифы 💲', callback: "rates" }],
      // [{ text: '🍭 Подключить тестовй период 24ч.', callback: "get_vpn_test" }],
      [{ text: '🍭 Подключить тестовй период', callback: "get_vpn_test" }],
      [{ text: '❔Оставшийся период подписки.', callback: "remaining_time" }],
    ];
  }
}
