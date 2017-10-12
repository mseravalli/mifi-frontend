import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule }    from '@angular/http';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
} from '@angular/material';

import { AppComponent } from './app.component';
import { DateRangeComponent } from './date-range/date-range.component';
import { ImportComponent } from './import/import.component';
import { CategoryComponent } from './category/category.component';
import { SubCategoryComponent } from './sub-category/sub-category.component';

import { CategoryService } from './category.service';
import { TimeseriesService } from './timeseries.service';
import { TimeseriesComponent } from './timeseries/timeseries.component';

@NgModule({
  declarations: [
    AppComponent,
    DateRangeComponent,
    ImportComponent,
    CategoryComponent,
    SubCategoryComponent,
    TimeseriesComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule,
    MatRadioModule,
    MatNativeDateModule,
    MatSidenavModule,
    MatDatepickerModule
  ],
  providers: [CategoryService, TimeseriesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
