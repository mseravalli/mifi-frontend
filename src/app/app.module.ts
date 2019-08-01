import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; 
import { Utils } from './utils';
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
  MatStepperModule,
} from '@angular/material';

import { AppConfigService } from './app-config.service';
import { GetterService } from './getter.service';
import { TransactionsService } from './transactions.service';
import { ImportService } from './import.service';

import { AppComponent } from './app.component';
import { DateRangeComponent } from './date-range/date-range.component';
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
import { ImportComponent, ImportDialog } from './import/import.component';
import { AccountComponent } from './account/account.component';
import { AccountPieChartComponent } from './account-pie-chart/account-pie-chart.component';

const appInitializerFn = (appConfig: AppConfigService) => {
  return () => {
    return appConfig.loadAppConfig();
  };
};

@NgModule({
  declarations: [
    AppComponent,
    DateRangeComponent,
    ImportComponent,
    ImportDialog,
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
    AccountComponent,
    AccountPieChartComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule,
    MatRadioModule,
    MatNativeDateModule,
    MatSidenavModule,
    MatPaginatorModule,
    MatTableModule,
    MatCardModule,
		MatDialogModule,
		MatSnackBarModule,
    MatSortModule,
		MatSelectModule,
    MatStepperModule,
    MatDatepickerModule
  ],
  providers: [
    GetterService,
    ImportService,
    TransactionsService,
    AppConfigService,
    {
      provide: APP_INITIALIZER,
      useFactory: appInitializerFn,
      multi: true,
      deps: [AppConfigService]
    }
  ],
  bootstrap: [AppComponent],
  entryComponents: [ImportDialog]
})
export class AppModule { }
