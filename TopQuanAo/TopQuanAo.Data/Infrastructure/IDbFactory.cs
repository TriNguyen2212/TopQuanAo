using System;

namespace TopQuanAo.Data.Infrastructure
{
    public interface IDbFactory : IDisposable
    {
        TopQuanAoDbContext Init();
    }
}