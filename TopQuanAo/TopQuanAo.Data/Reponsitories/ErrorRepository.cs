using TopQuanAo.Data.Infrastructure;
using TopQuanAo.Model;

namespace TopQuanAo.Data.Reponsitories
{
    public interface IErrorRepository : IRepository<Error>
    {
    }

    public class ErrorRepository : RepositoryBase<Error>, IErrorRepository
    {
        public ErrorRepository(IDbFactory dbFactory) : base(dbFactory)
        {
        }
    }
}