using System.Collections.Generic;
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

        [HttpGet]
        public List<TypeModel> GetTypes()
        {
            return _typeLib.GetTypes();
        }

        [HttpGet("{id}")]
        public TypeModel GetType(long id)
        {
            return _typeLib.GetType(id);
        }

        [HttpPost]
        public TypeModel AddType([FromBody]AddTypeModel model)
        {
            return _typeLib.AddType(model);
        }

        [HttpPut("{id}")]
        public TypeModel UpdateType(long id, [FromBody]UpdateTypeModel model)
        {
            return _typeLib.UpdateType(id, model);
        }

        [HttpDelete("{id}")]
        public bool DeleteType(long id)
        {
            return _typeLib.DeleteType(id);
        }
    }
}