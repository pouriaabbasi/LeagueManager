using System.Collections.Generic;
using leagueManager.MODEL.Type;

namespace leagueManager.LIB
{
    public interface ITypeLib
    {
        List<TypeModel> GetTypes();
        TypeModel GetType(long typeId);
        TypeModel AddType(AddTypeModel mdoel);
        TypeModel UpdateType(UpdateTypeModel model);
        bool DeleteType(long typeId);
    }
}