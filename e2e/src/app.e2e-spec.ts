import { AppPage } from './app.po';
import { NavBar } from './nav-bar.po';
import {browser, element, by} from 'protractor';


describe('workspace-project App', () => {
  let page: AppPage;
  let navBar: NavBar;

  beforeEach(() => {
    page = new AppPage();
    navBar = new NavBar();
  });

  it('should navigate to the dashboard when the dashboard link is clicked', () => {
    browser.get('/');
    navBar.getDashboardLink().click();
    expect(element(by.css('h1')).getText()).toEqual('Dashboard');
  });

  it('should navigate to the members when the members link is clicked', () => {
    browser.get('/');
    navBar.getMembersPageLink().click();
    expect(element(by.css('h1')).getText()).toEqual('Members Management');
  });

  it('should navigate to the visits page when the visits link is clicked', () => {
    browser.get('/');
    navBar.getVisitsPageLink().click();
    expect(element(by.css('h1')).getText()).toEqual('Visits Management');
  });

  // it('should navigate to the reports page when the reports link is clicked', () => {
  //   browser.get('/');
  //   navBar.getReportsPageLink().click();
  //   expect(element(by.css('h1')).getText()).toEqual('Visits Management');
  // });
});
