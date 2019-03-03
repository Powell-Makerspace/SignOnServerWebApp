import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  showSideBar = true;


  public ngOnInit() {
    setInterval(this.toggleSidebar(), 1000);
  }

  toggleSidebar() {
    this.showSideBar = !this.showSideBar;
  }
}
