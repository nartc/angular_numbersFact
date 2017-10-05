import { FactService } from '../../services/fact.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.css']
})
export class DatePickerComponent implements OnInit {
  private date: Date;

  constructor(
    private factService: FactService
  ) { }

  ngOnInit() {
  }

  onDateSelect(value: Date) {
    this.factService.getInput(value);
  }

}
