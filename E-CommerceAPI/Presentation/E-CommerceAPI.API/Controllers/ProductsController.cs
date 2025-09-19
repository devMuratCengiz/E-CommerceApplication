using E_CommercaAPI.Application.Repositories.CustomerRepositories;
using E_CommercaAPI.Application.Repositories.OrderRepositories;
using E_CommercaAPI.Application.Repositories.ProductRepositories;
using E_CommercaAPI.Application.ViewModels.Products;
using E_CommerceAPI.Domain;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Net;

namespace E_CommerceAPI.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductsController : ControllerBase
    {
        private readonly IProductWriteRepository _writeRepository;
        private readonly IProductReadRepository _readRepository;

        public ProductsController(IProductWriteRepository writeRepository, IProductReadRepository readRepository)
        {
            _writeRepository = writeRepository;
            _readRepository = readRepository;
        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            var values = _readRepository.GetAll(false);
            return Ok(values);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> Get(string id)
        {
            var values = _readRepository.GetByIdAsync(id,false);
            return Ok(values);
        }

        [HttpPost]
        public async Task<IActionResult> Post(CreateProductVM model)
        {
            await _writeRepository.AddAsync(new()
            {
                Name = model.Name,
                Price = model.Price,
                Stock = model.Stock
            });
            await _writeRepository.SaveAsync();
            return StatusCode((int)HttpStatusCode.Created);
        }

        [HttpPut]
        public async Task<IActionResult> Put(UpdateProductVM model)
        {
            Product product = await _readRepository.GetByIdAsync(model.Id);
            product.Stock = model.Stock;
            product.Price = model.Price;
            product.Name = model.Name;
            await _writeRepository.SaveAsync();
            return Ok();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult>Delete(string id)
        {
            await _writeRepository.RemoveAsync(id);
            await _writeRepository.SaveAsync();
            return Ok();
        }
    }
}
