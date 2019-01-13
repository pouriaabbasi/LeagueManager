using leagueManager.LIB.Base;
using leagueManager.MODEL.Type;

namespace leagueManager.LIB
{
    public class TypeLib : BaseLib, ITypeLib
    {
        public TypeModel AddType(AddTypeModel model)
        {
            var command = $@"
            INSERT INTO Type(
                Name,
                Description)
            OUTPUT Inserted.Id
            VALUES(
                @Name,
                @Description)";

            var result = ExecCommandScaler<long>(command, model);

            if (result != 0)
                return new TypeModel
                {
                    Id = result,
                    Name = model.Name,
                    Description = model.Description
                };

            return null;
        }
    }
}