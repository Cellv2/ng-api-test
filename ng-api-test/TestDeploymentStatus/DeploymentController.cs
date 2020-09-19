using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace ng_api_test.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class DeploymentController : ControllerBase
    {

        private DeploymentOperationStatus GetRandomStatus()
        {
            var random = new Random().Next(4);
            switch (random)
            {
                case 0:
                    return DeploymentOperationStatus.Complete;

                case 1:
                    return DeploymentOperationStatus.Enqueued;

                case 2:
                    return DeploymentOperationStatus.InProgress;
                
                case 3:
                    return DeploymentOperationStatus.Failed;

                default:
                    return DeploymentOperationStatus.Complete;
            }
        }

        [HttpGet]
        public IEnumerable<Deployment> Get()
        {
            return Enumerable.Range(1, 3).Select(index => new Deployment
            {
                Name = $"Deployment {index} - {Guid.NewGuid()}",
                CurrentOperationCompletionPercentage = Convert.ToByte(new Random().Next(100)),
                CurrentOperationStatus = GetRandomStatus()
            }).ToArray();
        }
    }
}
