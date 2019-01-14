using System.Collections.Generic;
using leagueManager.MODEL.Type;

namespace leagueManager.LIB
{
    public interface ITypeLib
    {
        TypeModel AddType(AddTypeModel mdoel);
        List<TypeModel> GetTypes();
        TypeModel GetType(long typeId);
        TypeModel UpdateType(long typeId, UpdateTypeModel model);
        bool DeleteType(long typeId);
    }
}