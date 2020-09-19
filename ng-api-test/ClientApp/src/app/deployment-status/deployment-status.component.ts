import { Component, OnInit, OnDestroy } from "@angular/core";

import { DeploymentStatusService } from "./deployment-status.service";
import { Subscription, timer } from "rxjs";
import { switchMap } from "rxjs/operators";

@Component({
    selector: "app-deployment-status",
    templateUrl: "./deployment-status.component.html",
    styleUrls: ["./deployment-status.component.css"],
})
export class DeploymentStatusComponent implements OnInit, OnDestroy {
    subscription: Subscription;
    deployments: Deployment[];
    interval: number = 5000;

    // empty constructor but still provides our dependency injection
    constructor(private deploymentStatusService: DeploymentStatusService) {}

    ngOnInit() {
        this.subscription = timer(0, this.interval)
            .pipe(switchMap(() => this.deploymentStatusService.getData()))
            .subscribe(
                (result) => {
                    console.log("Subscription called");
                    this.deployments = result;
                },
                (err) => console.error(err)
            );
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}

interface Deployment {
    name: string;
    currentOperationStatus: {
        value: string;
    };
    currentOperationCompletionPercentage: number;
}
