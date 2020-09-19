import { Component, Inject } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
    selector: "app-deployment-status",
    templateUrl: "./deployment-status.component.html",
    styleUrls: ["./deployment-status.component.css"],
})
/** DeploymentStatus component*/
export class DeploymentStatusComponent {
    deployments: Deployment[];

    /** DeploymentStatus ctor */
    constructor(http: HttpClient, @Inject("BASE_URL") baseUrl: string) {
        http.get<Deployment[]>(`${baseUrl}deployment`).subscribe(
            (result) => {
                this.deployments = result;
            },
            (err) => console.log(err)
        );
    }
}

interface Deployment {
    name: string;
    currentOperationStatus: {
        value: string;
    };
    currentOperationCompletionPercentage: number;
}
