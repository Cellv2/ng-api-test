using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

using ng_api_test.DeploymentStatus.Enums;

namespace ng_api_test
{
    public class Deployments
    {
        public IEnumerable<Deployment> CurrentDeployments { get; set; }
    }
    public class Deployment
    {
        public string Name { get; set; }
        public EDeploymentOperationStatus CurrentOperationStatus { get; set; }
        public byte CurrentOperationCompletionPercentage { get; set; }
    }
}
