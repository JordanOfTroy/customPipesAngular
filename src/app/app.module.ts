import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BirthdaycomponentComponent } from './birthdaycomponent/birthdaycomponent.component';
import { MyCustomPipeComponent } from './my-custom-pipe/my-custom-pipe.component';
import {MatDividerModule} from '@angular/material/divider';
import { PipesForFunComponent } from './pipes-for-fun/pipes-for-fun.component';
import { ExponentialStrengthPipe } from './exponential-strength.pipe';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { EeveelutionComponent } from './eeveelution/eeveelution.component';
import { EvolvePipe } from './evolve.pipe';



@NgModule({
  declarations: [
    AppComponent,
    BirthdaycomponentComponent,
    MyCustomPipeComponent,
    PipesForFunComponent,
    ExponentialStrengthPipe,
    EeveelutionComponent,
    EvolvePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDividerModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
