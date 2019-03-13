import { Component, OnInit } from '@angular/core';
import {Member} from '../../api/models/member';
import {MemberControllerService} from '../../api/services/member-controller.service';


@Component({
  selector: 'app-members',
  templateUrl: './list-guests.component.html',
  styleUrls: ['./list-guests.component.css']
})
export class ListGuestsComponent implements OnInit {

  members: Member[];

  constructor(private memberService: MemberControllerService) { }

  ngOnInit() {
    console.log('sending Get Request');
    this.memberService.getMembersUsingGET({ membershipType: null, memberName: null}).subscribe(
      members => {

        console.log('getting Data');
        this.members = members.slice(0, 10);
        console.log(members);
      }
    );
  }

}
