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
            VALUES(
                @Name,
                @Description)";

            var result = ExecCommand(command, model);

            if (result)
                return new TypeModel
                {
                    Name = model.Name,
                    Description = model.Description
                };

            return null;
        }
    }
}