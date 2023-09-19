using net_core_backend_api.Context;
using net_core_backend_api.Repositories.Interfaces;

namespace net_core_backend_api.Repositories
{
    public class BaseRepository : IBaseRepository
    {
        private readonly OrdersContext _context;
        public BaseRepository(OrdersContext context)
        {
            this._context = context;
        }
        public void Add<T>(T entity) where T : class
        {
            _context.Add(entity);
        }

        public void Delete<T>(T entity) where T : class
        {
            throw new NotImplementedException();
        }

        public async Task<bool> SaveChanges()
        {
            return await _context.SaveChangesAsync() > 0;
        }

        public void Update<T>(T entity) where T : class
        {
            throw new NotImplementedException();
        }
    }
}
