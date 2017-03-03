using TopQuanAo.Data.Infrastructure;
using TopQuanAo.Model;

namespace TopQuanAo.Data.Reponsitories
{
    public interface IApplicationUserGroupRepository : IRepository<ApplicationUserGroup>
    {
    }

    public class ApplicationUserGroupRepository : RepositoryBase<ApplicationUserGroup>, IApplicationUserGroupRepository
    {
        public ApplicationUserGroupRepository(IDbFactory dbFactory) : base(dbFactory)
        {
        }
    }
}