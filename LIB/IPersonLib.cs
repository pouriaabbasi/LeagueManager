using System.Collections.Generic;
using leagueManager.MODEL.Person;

namespace leagueManager.LIB
{
    public interface IPersonLib
    {
        List<PersonModel> GetPersons();
        PersonModel GetPerson(long personId);
        PersonModel AddPerson(AddPersonModel model);
        PersonModel UpdatePerson(long personId, UpdatePersonModel model);
        bool DeletePerson(long personId);
    }
}