using AutoMapper;
using net_core_backend_api.Models.DTOs;
using net_core_backend_api.Models.Entities;

namespace net_core_backend_api.Helpers
{
    public class OrdersProfile : Profile
    {
        public OrdersProfile()
        {
            CreateMap<OrderDTO, Order>();
        }
    }
}
