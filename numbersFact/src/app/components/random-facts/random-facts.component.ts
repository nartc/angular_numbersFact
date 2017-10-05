import { FactService } from '../../services/fact.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-random-facts',
  templateUrl: './random-facts.component.html',
  styleUrls: ['./random-facts.component.css']
})
export class RandomFactsComponent implements OnInit {
  private fact: any;

  constructor(
    private factService: FactService
  ) { }

  ngOnInit() {
    this.factService.getRandomFact().subscribe(
      (data: any): void => {
        this.fact = data;
      },
      (err: any) => {
        console.log(err);
      }
    );
    setInterval(() => {
      this.factService.getRandomFact().subscribe(
        (data: any): void => {
          this.fact = data;
        },
        (err: any) => {
          console.log(err);
        }
      );
    }, 5000)
  }

}
