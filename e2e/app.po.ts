import { browser, by, element } from 'protractor';

export class HiakioskPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('hk-root h1')).getText();
  }
}
