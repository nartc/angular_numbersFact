import { FactService } from '../../services/fact.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fact-list',
  templateUrl: './fact-list.component.html',
  styleUrls: ['./fact-list.component.css']
})
export class FactListComponent implements OnInit {
  
  private dateFact: Object;
  private yearFact: Object;

  constructor(
    private factService: FactService
  ) { }

  ngOnInit() {
    this.factService.datePicked.subscribe(
      (data: Date): void => {
        let month = (data.getMonth() + 1).toString();
        let day = data.getDate().toString();
        let year = data.getFullYear().toString();
        this.factService.getDateFact(month, day).subscribe(
          (data: Object): void => {
            this.dateFact = data;
          },
          (err: Error) => {
            console.error(err);
          }
        );
        this.factService.getYearFact(year).subscribe(
          (data: Object): void => {
            this.yearFact = data;
          },
          (err: Error) => {
            console.error(err);
          }
        );
      }
    );
  }

}
