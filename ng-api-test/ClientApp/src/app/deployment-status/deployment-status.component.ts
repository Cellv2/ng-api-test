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
                // this.deployments = result.map(deployment => deployment.currentOperationStatus = CurrentOperationStatus[deployment.currentOperationStatus]);
                this.deployments = result.map((deployment) => {
                    let current = {... deployment};
                    current.currentOperationStatus = CurrentOperationStatus.Complete
                    return current
                    // return {...deployment, {deployment.currentOperationStatus: "awdawd"}}
                    // // deployment.currentOperationStatus =
                    // //     "sefsef"
                });
            },
            (err) => console.log(err)
        );
    }
}

interface Deployment {
    name: string;
    currentOperationStatus: CurrentOperationStatus;
    currentOperationCompletionPercentage: number;
}

enum CurrentOperationStatus {
    Complete = "COMPLETE",
    Failed = "FAILED",
    InProgress = "IN_PROGRESS",
    Enqueued = "EMQUEUED",
}
