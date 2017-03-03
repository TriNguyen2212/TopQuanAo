namespace TopQuanAo.Data.Infrastructure
{
    public class DbFactory : Disposable, IDbFactory
    {
        private TopQuanAoDbContext dbContext;

        public TopQuanAoDbContext Init()
        {
            return dbContext ?? (dbContext = new TopQuanAoDbContext());
        }

        protected override void DisposeCore()
        {
            if (dbContext != null)
                dbContext.Dispose();
        }
    }
}