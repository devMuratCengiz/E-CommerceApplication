using E_CommercaAPI.Application.Repositories.CustomerRepositories;
using E_CommerceAPI.Domain;
using E_CommerceAPI.Persistance.Contexts;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace E_CommerceAPI.Persistance.Repositories.CustomerRepositories
{
    public class CustomerWriteRepository : WriteRepository<Customer>, ICustomerWriteRepository
    {
        public CustomerWriteRepository(ECommerceAPIDbContext _context) : base(_context)
        {
        }
    }
}
