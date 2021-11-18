import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Metric, AnalyticsImplementation } from "./analytics-demo.interface";
import { AnalyticsService } from "../services/analytics.service";

import { HttpClientModule, HttpClient } from "@angular/common/http";

@NgModule({
    imports: [
        CommonModule,
        HttpClientModule
    ],
    providers: [
        {   provide: "API_URL", useValue: "http://devserver.com"},
        { 
            provide: AnalyticsService,
            deps: [HttpClient, "API_URL"],

            useFactory(http: HttpClient, apiUrl: string){
                const loggingImplementation: AnalyticsImplementation = {
                    recordEven: (metric: Metric): void => {
                        console.log("The metric is: ", metric);
                        console.log("Sending to: ", apiUrl);
                    }
                };
            return new AnalyticsService(loggingImplementation);
            }
        }
    ],
    declarations: []
})

export class AnalyticsDemoModule{}