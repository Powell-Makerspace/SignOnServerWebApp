import { Component, OnInit } from '@angular/core';
import {MemberControllerService} from '../api/services/member-controller.service';
import {VisitControllerService} from '../api/services/visit-controller.service';
import {Member} from '../api/models/member';
import {Visit} from '../api/models/visit';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  totalMembers: number;
  totalVisits: number;

  constructor(
    private memberService: MemberControllerService,
    private visitService: VisitControllerService
  ) { }

  ngOnInit() {
    this.memberService.getMembersUsingGET({ membershipType: null, memberName: null }).subscribe(
      (totalMembers: Member[]) => {
        this.totalMembers = totalMembers.length;
      },
      error => {
        this.totalMembers = -1;
      }
    );

    this.visitService.searchVisitsUsingGET(null).subscribe(
      (totalVisits: Visit[]) => {
        this.totalVisits = totalVisits.length;
      },
      error => {
        this.totalVisits = -1;
      }
    );
  }

}
