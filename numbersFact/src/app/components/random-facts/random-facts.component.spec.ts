import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomFactsComponent } from './random-facts.component';

describe('RandomFactsComponent', () => {
  let component: RandomFactsComponent;
  let fixture: ComponentFixture<RandomFactsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RandomFactsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RandomFactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
