import { Message, ParamMessage } from "./message.class";

export class HelpInstallMessage extends Message {
  get message(): string {
    const androidApp = 'https://play.google.com/store/apps/details?id=org.outline.android.client'
    const windowsApp = 'https://s3.amazonaws.com/outline-releases/client/windows/stable/Outline-Client.exe';
    const macOSApp = 'https://itunes.apple.com/us/app/outline-app/id1356178125';
    const iosApp = 'https://itunes.apple.com/us/app/outline-app/id1356177741';
    const message = `
1) Установите outline клиент для вашего устройства с официального сайта. 
  <a href="${androidApp}">Android</a>
  <a href="${windowsApp}">Windows </a> 
  <a href="${macOSApp}">MacOS</a> 
  <a href="${iosApp}">iosApp</a>
2) Открываем наш телеграм бот, жмем /start далее "Подлючить тестовый период", или вибираем тариф и оплачиваем.
  Вам будет выслан ключ доступа, скопируйте его.
3) Открываем приложение Outline жмем "Добавить сервер" появится поде для ввода, вставляем наш ключ,
  далее жмем "добавить сервер" и "подключить".`;

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
