using E_CommercaAPI.Application.Repositories.ProductRepositories;
using E_CommerceAPI.Domain;
using E_CommerceAPI.Persistance.Contexts;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace E_CommerceAPI.Persistance.Repositories.ProductRepositories
{
    public class ProductWriteRepository : WriteRepository<Product>, IProductWriteRepository
    {
        public ProductWriteRepository(ECommerceAPIDbContext _context) : base(_context)
        {
        }
    }
}
