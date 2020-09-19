using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ng_api_test
{
    public class Deployments
    {
        public IEnumerable<Deployment> CurrentDeployments { get; set; }
    }
    public class Deployment
    {
        public string Name { get; set; }
        public DeploymentOperationStatus CurrentOperationStatus { get; set; }
        public byte CurrentOperationCompletionPercentage { get; set; }
    }

    public class DeploymentOperationStatus
    {
        private DeploymentOperationStatus(string value) { Value = value; }

        public string Value { get; set; }

        public static DeploymentOperationStatus Complete { get { return new DeploymentOperationStatus("Complete"); } }
        public static DeploymentOperationStatus Failed { get { return new DeploymentOperationStatus("Failed"); } }
        public static DeploymentOperationStatus InProgress { get { return new DeploymentOperationStatus("In Progress"); } }
        public static DeploymentOperationStatus Enqueued { get { return new DeploymentOperationStatus("Enqueued"); } }
    }
}
