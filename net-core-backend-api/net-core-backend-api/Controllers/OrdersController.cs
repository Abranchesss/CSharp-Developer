using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using net_core_backend_api.Models.DTOs;
using net_core_backend_api.Models.Entities;
using net_core_backend_api.Repositories.Interfaces;

namespace net_core_backend_api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OrdersController : ControllerBase
    {
        private readonly IOrderRepository _repository;
        private readonly IMapper _mapper;

        public OrdersController(IOrderRepository repository, IMapper mapper)
        {
            _repository = repository;
            _mapper = mapper;
        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            var orders = await _repository.GetOrders();
            return Ok(orders);
        }

        [HttpPost]
        public async Task<IActionResult> Post(OrderDTO order)
        {
            if(order == null) { return BadRequest(); }

            var addOrder = _mapper.Map<Order>(order);
            _repository.Add(addOrder);

            return await _repository.SaveChanges() ? Ok("Pedido Adicionado com Sucesso!") : BadRequest("Falha ao Cadastrar Pedido!");
        }
    }
}
