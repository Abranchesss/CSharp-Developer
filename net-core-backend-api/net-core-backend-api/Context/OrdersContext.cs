using Microsoft.EntityFrameworkCore;
using net_core_backend_api.Models.Entities;

namespace net_core_backend_api.Context
{
    public class OrdersContext : DbContext
    {
        public OrdersContext(DbContextOptions<OrdersContext> options) : base(options) { }

        public DbSet<Order> orders { get; set; }
    }
}
