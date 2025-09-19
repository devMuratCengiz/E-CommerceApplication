using E_CommercaAPI.Application.ViewModels.Products;
using FluentValidation;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace E_CommercaAPI.Application.Validators.Products
{
    public class CreateProductValidator : AbstractValidator<CreateProductVM>
    {
        public CreateProductValidator()
        {
            RuleFor(p => p.Name)
                .NotEmpty()
                .NotNull()
                .WithMessage("Name field can not be empty!")
                .MaximumLength(100)
                .MinimumLength(2)
                .WithMessage("Name field must be between 2 and 100 characters!");

            RuleFor(p => p.Stock)
                .NotEmpty()
                .NotNull()
                .WithMessage("Stock field can not be empty!")
                .Must(s => s >= 0)
                .WithMessage("Stock field must be bigger than 0!");

            RuleFor(p => p.Stock)
                .NotEmpty()
                .NotNull()
                .WithMessage("Price field can not be empty!")
                .Must(s => s >= 0)
                .WithMessage("Price field can not be negative!");
        }
    }
}
