using leagueManager.LIB;
using leagueManager.MODEL.Type;
using Microsoft.AspNetCore.Mvc;

namespace leagueManager.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class TypeController : ControllerBase
    {
        private readonly ITypeLib _typeLib;
        public TypeController(
            ITypeLib typeLib)
        {
            _typeLib = typeLib;
        }

        [HttpPost]
        public TypeModel AddType([FromBody]AddTypeModel model)
        {
            return _typeLib.AddType(model);
        }
    }
}