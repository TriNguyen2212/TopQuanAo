using TopQuanAo.Data.Infrastructure;
using TopQuanAo.Model;

namespace TopQuanAo.Data.Reponsitories
{
    public interface IFeedbackRepository : IRepository<Feedback>
    {
    }

    public class FeedbackRepository : RepositoryBase<Feedback>, IFeedbackRepository
    {
        public FeedbackRepository(IDbFactory dbFactory) : base(dbFactory)
        {
        }
    }
}