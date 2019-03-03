import { Component, OnInit } from '@angular/core';
import {VisitControllerService} from '../api/services/visit-controller.service';
import {Visit} from '../api/models/visit';

@Component({
  selector: 'app-visits',
  templateUrl: './visits.component.html',
  styleUrls: ['./visits.component.css']
})
export class VisitsComponent implements OnInit {

  visits: Visit[];

  startDateEnabled: Date;
  endDateEnabled: Date;

  startDate: Date;
  endDate: Date;

  constructor(private visitsService: VisitControllerService) { }

  ngOnInit() {
    this.search();
  }


  search() {

    let searchParams = {
      startDate: this.startDateEnabled ? this.startDate.toISOString().slice(0, -1) : null,
      endDate: this.endDateEnabled ? this.endDate.toISOString().slice(0, -1) : null,
    };

    console.info(searchParams);

    this.visitsService.searchVisitsUsingGET(searchParams).subscribe(
      (visits: Visit[]) => {
        this.visits = visits.slice(0, 10);
      }
    );
  }
}
