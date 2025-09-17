using E_CommercaAPI.Application.Repositories.CustomerRepositories;
using E_CommercaAPI.Application.Repositories.OrderRepositories;
using E_CommercaAPI.Application.Repositories.ProductRepositories;
using E_CommerceAPI.Domain;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace E_CommerceAPI.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductsController : ControllerBase
    {
        private readonly IProductWriteRepository _writeRepository;
        private readonly IProductReadRepository _readRepository;

        private readonly IOrderWriteRepository _order;
        private readonly IOrderReadRepository _orderread;
        private readonly ICustomerWriteRepository _customer;

        public ProductsController(IProductWriteRepository writeRepository, IProductReadRepository readRepository, IOrderWriteRepository order, ICustomerWriteRepository customer, IOrderReadRepository orderread)
        {
            _writeRepository = writeRepository;
            _readRepository = readRepository;
            _order = order;
            _customer = customer;
            _orderread = orderread;
        }

        [HttpGet]
        public async Task Get()
        {
            Order o = await _orderread.GetByIdAsync("0199573d-e471-74dd-b372-c344b7fb2ed6");
            o.Address = "İstnanbul";
            await _order.SaveAsync();
        }
    }
}
