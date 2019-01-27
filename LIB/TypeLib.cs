using System.Collections.Generic;
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
                Description,
                P2PPlayCount,
                IsContinuous)
            OUTPUT Inserted.Id
            VALUES(
                @Name,
                @Description,
                @P2PPlayCount,
                @IsContinuous)";

            var result = ExecCommandScaler<long>(command, model);

            if (result != 0)
                return new TypeModel
                {
                    Id = result,
                    Name = model.Name,
                    Description = model.Description,
                    P2PPlayCount = model.P2PPlayCount,
                    IsContinuous = model.IsContinuous
                };

            return null;
        }

        public List<TypeModel> GetTypes()
        {
            var query = @"
SELECT  Id,
        Name,
        [Description],
        P2PPlayCount,
        IsContinuous
FROM    [Type]";

            var result = GetList<TypeModel>(query);

            return result;
        }

        public TypeModel GetType(long typeId)
        {
            var query = $@"
SELECT  Id,
        Name,
        [Description],
        P2PPlayCount,
        IsContinuous
FROM    [Type]
WHERE   Id = {typeId}";

            var result = FitstOrDefault<TypeModel>(query);

            return result;
        }

        public TypeModel UpdateType(UpdateTypeModel model)
        {
            var command = $@"
UPDATE  [Type]
SET     Name = @Name,
        [Description] = @Description,
        P2PPlayCount = @P2PPlayCount,
        IsContinuous = @IsContinuous
WHERE   Id = @Id";

            var result = ExecCommand(command, model);

            if (result)
                return new TypeModel
                {
                    Id = model.Id,
                    Name = model.Name,
                    Description = model.Description
                };

            return null;
        }

        public bool DeleteType(long typeId)
        {
            var command = $@"
DELETE FROM [Type]
WHERE   Id = @Id";

            var result = ExecCommand(command, new { Id = typeId });

            return result;
        }
    }
}