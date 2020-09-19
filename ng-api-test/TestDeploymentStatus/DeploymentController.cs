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
        private Deployment deployment = new Deployment
        {
            Name = "Test Deployment",
            CurrentOperationStatus = DeploymentOperationStatus.Complete,
            CurrentOperationCompletionPercentage = 0,
        };

        [HttpGet]
        public IEnumerable<Deployment> Get()
        {
            return Enumerable.Range(1, 3).Select(index => new Deployment
            {
                Name = $"Deployment {index}",
                CurrentOperationCompletionPercentage = 50,
                CurrentOperationStatus = DeploymentOperationStatus.Complete
            }).ToArray();
        }
    }
}
