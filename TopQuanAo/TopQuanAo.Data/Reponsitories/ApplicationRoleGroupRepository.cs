using TopQuanAo.Data.Infrastructure;
using TopQuanAo.Model;

namespace TopQuanAo.Data.Reponsitories
{
    public interface IApplicationRoleGroupRepository : IRepository<ApplicationRoleGroup>
    {
    }

    public class ApplicationRoleGroupRepository : RepositoryBase<ApplicationRoleGroup>, IApplicationRoleGroupRepository
    {
        public ApplicationRoleGroupRepository(IDbFactory dbFactory) : base(dbFactory)
        {
        }
    }
}