import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {MemberControllerService} from '../../api/services/member-controller.service';

@Component({
  selector: 'app-add-guest',
  templateUrl: './add-guest.component.html',
  styleUrls: ['./add-guest.component.css']
})
export class AddGuestComponent implements OnInit {

  memberName = ''; // This is an interface

  constructor(private memberService: MemberControllerService, private router: Router) { }

  ngOnInit() {
  }

  createMember() {
    this.memberService.createMemberUsingPUT( { memberName: this.memberName }).subscribe(
      (response) => {
        console.log(response);
        console.log('successfully created user');
        this.router.navigate(['dashboard']);
      },
      (err) => {
        console.error('failed to create user');
      }
    );
  }
}
