export interface Metric {
    eventName: string;
    scope: string;
}

export interface AnalyticsImplementation {
    recordEven(metric: Metric): void;
}