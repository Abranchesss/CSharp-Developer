using Microsoft.EntityFrameworkCore;
using net_core_backend_api.Context;
using net_core_backend_api.Models.Entities;
using net_core_backend_api.Repositories.Interfaces;

namespace net_core_backend_api.Repositories
{
    public class OrderRepository : BaseRepository, IOrderRepository
    {
        private readonly OrdersContext _context;
        public OrderRepository(OrdersContext context) : base(context)
        {
            this._context = context;
        }

        public async Task<IEnumerable<Order>> GetOrders()
        {
            return await _context.orders.ToListAsync();
        }
    }
}
