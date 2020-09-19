import { Inject, Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: "root",
})
export class DeploymentStatusService {
    _http: HttpClient;
    _baseUrl: string;
    constructor(http: HttpClient, @Inject("BASE_URL") baseUrl: string) {
        this._http = http;
        this._baseUrl = baseUrl;
    }

    getData() {
        return this._http.get<Deployment[]>(`${this._baseUrl}deployment`);
    }
}

interface Deployment {
    name: string;
    currentOperationStatus: {
        value: string;
    };
    currentOperationCompletionPercentage: number;
}
