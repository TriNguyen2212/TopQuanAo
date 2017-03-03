using TopQuanAo.Data.Infrastructure;
using TopQuanAo.Model;

namespace TopQuanAo.Data.Reponsitories
{
    public interface IProductResository
    {
    }

    public class ProductResository : RepositoryBase<Product>
    {
        public ProductResository(IDbFactory dbFactory) : base(dbFactory)
        {
        }
    }
}