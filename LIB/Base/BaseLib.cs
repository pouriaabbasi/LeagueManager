using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using Dapper;

namespace leagueManager.LIB.Base
{
    public class BaseLib
    {
        private IDbConnection SqlConnection =>
            new SqlConnection(Startup.ConnectionString);

        public BaseLib() { }

        public List<T> GetList<T>(string query)
        {
            return SqlConnection.Query<T>(query).ToList();
        }

        public T SingleOrDefault<T>(string query)
        {
            return SqlConnection.QuerySingleOrDefault<T>(query);
        }

        public T FitstOrDefault<T>(string query)
        {
            return SqlConnection.QueryFirstOrDefault<T>(query);
        }

        public bool ExecCommand(string command, object parameterModel)
        {
            try
            {
                SqlConnection.Execute(command, parameterModel);
                return true;
            }
            catch (System.Exception)
            {
                return false;
            }
        }

        public T ExecCommandScaler<T>(string command, object parameterModel)
        {
            try
            {
                var result = SqlConnection.ExecuteScalar(command, parameterModel);
                return (T)result;
            }
            catch (System.Exception)
            {
                return default(T);
            }
        }
    }
}