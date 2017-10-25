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

import { CategoryService } from './category.service';
import { TimeseriesService } from './timeseries.service';
import { CategoryComboChartService }  from './category-combo-chart.service';
import { CategoryPieChartInService }  from './category-pie-chart-in.service';
import { CategoryPieChartOutService } from './category-pie-chart-out.service';
import { SubCategoryComboChartService }  from './sub-category-combo-chart.service';
import { SubCategoryPieChartInService }  from './sub-category-pie-chart-in.service';
import { SubCategoryPieChartOutService } from './sub-category-pie-chart-out.service';
import { TransactionsService } from './transactions.service';

import { AppComponent } from './app.component';
import { DateRangeComponent } from './date-range/date-range.component';
import { ImportComponent } from './import/import.component';
import { CategoryComponent } from './category/category.component';
import { SubCategoryComponent } from './sub-category/sub-category.component';
import { TimeseriesComponent } from './timeseries/timeseries.component';
import { CategoryComboChartComponent } from './category-combo-chart/category-combo-chart.component';
import { CategoryPieChartInComponent } from './category-pie-chart-in/category-pie-chart-in.component';
import { CategoryPieChartOutComponent } from './category-pie-chart-out/category-pie-chart-out.component';
import { SubCategoryComboChartComponent } from './sub-category-combo-chart/sub-category-combo-chart.component';
import { SubCategoryPieChartInComponent } from './sub-category-pie-chart-in/sub-category-pie-chart-in.component';
import { SubCategoryPieChartOutComponent } from './sub-category-pie-chart-out/sub-category-pie-chart-out.component';
import { TransactionsComponent } from './transactions/transactions.component';

@NgModule({
  declarations: [
    AppComponent,
    DateRangeComponent,
    ImportComponent,
    CategoryComponent,
    SubCategoryComponent,
    TimeseriesComponent,
    CategoryComboChartComponent,
    CategoryPieChartInComponent,
    CategoryPieChartOutComponent,
    SubCategoryComboChartComponent,
    SubCategoryPieChartInComponent,
    SubCategoryPieChartOutComponent,
    TransactionsComponent,
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
    MatPaginatorModule,
    MatTableModule,
		MatSnackBarModule,
    MatSortModule,
		MatSelectModule,
    MatDatepickerModule
  ],
  providers: [
    CategoryService,
    TimeseriesService,
    CategoryComboChartService,
    CategoryPieChartInService,
    CategoryPieChartOutService,
    SubCategoryComboChartService,
    SubCategoryPieChartInService,
    SubCategoryPieChartOutService,
    TransactionsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
