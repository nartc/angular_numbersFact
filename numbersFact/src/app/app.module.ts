import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { DatePickerComponent } from './components/date-picker/date-picker.component';
import { FactListComponent } from './components/fact-list/fact-list.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RandomFactsComponent } from './components/random-facts/random-facts.component';
import { PrimeNgImports } from './primeng-imports/primeng-imports.module';
import { FactService } from './services/fact.service';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    DatePickerComponent,
    FactListComponent,
    NavbarComponent,
    RandomFactsComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    PrimeNgImports,
    HttpModule
  ],
  providers: [FactService],
  bootstrap: [AppComponent]
})
export class AppModule { }
