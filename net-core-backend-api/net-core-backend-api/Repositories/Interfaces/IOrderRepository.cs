using net_core_backend_api.Models.Entities;

namespace net_core_backend_api.Repositories.Interfaces
{
    public interface IOrderRepository : IBaseRepository
    {
        Task<IEnumerable<Order>> GetOrders();
    }
}
