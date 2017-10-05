import { Observable } from 'rxjs/Rx';
import { EventEmitter, Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Headers, Http, Response } from '@angular/http';

@Injectable()
export class FactService {

  private apiUrl = 'http://numbersapi.com/';
  private randomApiUrl = 'http://numbersapi.com/random/';
  private jsonQuery = '?json'
  private month: string;
  private day: string;
  private year: string;
  public datePicked: EventEmitter<any> = new EventEmitter<any>()

  constructor(
    private http: Http
  ) { }

  getRandomFact(): Observable<any> {
    return this.http.get(this.randomApiUrl + this.jsonQuery)
      .map((res: Response) => { return res.json() })
      .catch((err: Response) => Observable.throw(err));
  }

  getInput(dateInput: Date) {
    this.datePicked.emit(dateInput);
  }

  getDateFact(month: string, day: string): Observable<any> {
    return this.http.get(`${this.apiUrl}${month}/${day}/date${this.jsonQuery}`)
      .map((res: Response) => { return res.json() })
      .catch((err: Response) => Observable.throw(err));
  }

  getYearFact(year: string): Observable<any> {
    return this.http.get(`${this.apiUrl}${year}/year${this.jsonQuery}`)
      .map((res: Response) => { return res.json() })
      .catch((err: Response) => Observable.throw(err));
  }

}
