using E_CommercaAPI.Application.Repositories.OrderRepositories;
using E_CommerceAPI.Domain;
using E_CommerceAPI.Persistance.Contexts;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace E_CommerceAPI.Persistance.Repositories.OrderRepositories
{
    public class OrderWriteRepository : WriteRepository<Order>, IOrderWriteRepository
    {
        public OrderWriteRepository(ECommerceAPIDbContext _context) : base(_context)
        {
        }
    }
}
