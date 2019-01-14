using System.Collections.Generic;
using leagueManager.LIB.Base;
using leagueManager.MODEL.Person;

namespace leagueManager.LIB
{
    public class PersonLib : BaseLib, IPersonLib
    {
        public PersonModel AddPerson(AddPersonModel model)
        {
            throw new System.NotImplementedException();
        }

        public bool DeletePerson(long personId)
        {
            throw new System.NotImplementedException();
        }

        public PersonModel GetPerson(long personId)
        {
            throw new System.NotImplementedException();
        }

        public List<PersonModel> GetPersons()
        {
            throw new System.NotImplementedException();
        }

        public PersonModel UpdatePerson(long personId, UpdatePersonModel model)
        {
            throw new System.NotImplementedException();
        }
    }
}