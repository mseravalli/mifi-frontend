import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { MatButtonModule } from "@angular/material/button";
import { MatButtonToggleModule } from "@angular/material/button-toggle";
import { MatCardModule } from "@angular/material/card";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatChipsModule } from "@angular/material/chips";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatDialogModule } from "@angular/material/dialog";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatListModule } from "@angular/material/list";
import { MatMenuModule } from "@angular/material/menu";
import { MatNativeDateModule, MatRippleModule } from "@angular/material/core";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatRadioModule } from "@angular/material/radio";
import { MatSelectModule } from "@angular/material/select";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatSliderModule } from "@angular/material/slider";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatSortModule } from "@angular/material/sort";
import { MatStepperModule } from "@angular/material/stepper";
import { MatTableModule } from "@angular/material/table";
import { MatTabsModule } from "@angular/material/tabs";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatTooltipModule } from "@angular/material/tooltip";
import { NgModule, APP_INITIALIZER } from "@angular/core";

import { AccountComponent } from "./account/account.component";
import { AccountPieChartComponent } from "./account-pie-chart/account-pie-chart.component";
import { AppComponent } from "./app.component";
import { AppConfigService } from "./app-config.service";
import { CategoryComboChartComponent } from "./category-combo-chart/category-combo-chart.component";
import { CategoryComponent } from "./category/category.component";
import { CategoryPieChartInComponent } from "./category-pie-chart-in/category-pie-chart-in.component";
import { CategoryPieChartOutComponent } from "./category-pie-chart-out/category-pie-chart-out.component";
import { DateRangeComponent } from "./date-range/date-range.component";
import { GetterService } from "./getter.service";
import { ImportComponent, ImportDialog } from "./import/import.component";
import { ImportService } from "./import.service";
import { SubCategoryComboChartComponent } from "./sub-category-combo-chart/sub-category-combo-chart.component";
import { SubCategoryComponent } from "./sub-category/sub-category.component";
import { SubCategoryPieChartInComponent } from "./sub-category-pie-chart-in/sub-category-pie-chart-in.component";
import { SubCategoryPieChartOutComponent } from "./sub-category-pie-chart-out/sub-category-pie-chart-out.component";
import { TimeseriesComponent } from "./timeseries/timeseries.component";
import { TransactionsComponent } from "./transactions/transactions.component";
import { TransactionsService } from "./transactions.service";
import { Utils } from "./utils";
import { RecurringComponent } from "./recurring/recurring.component";

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
    RecurringComponent,
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
    MatDatepickerModule,
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
      deps: [AppConfigService],
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
