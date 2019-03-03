import { browser, by, element } from 'protractor';

export class NavBar {

  public getDashboardLink() {
    return element(by.css('[routerlink="/dashboard"]'));
  }

  public getMembersPageLink() {
    return element(by.css('[routerlink="/members"]'));
  }

  public getVisitsPageLink() {
    return element(by.css('[routerlink="/visits"]'));
  }

  public getReportsPageLink() {
    return element(by.css('[routerlink="/reports"]'));
  }
}
