using System;
using System.Linq;
using System.Collections.Generic;

namespace IntroToLinq
{
    class Program
    {
        static void Main(string[] args)
        {
            Product[] myProducts = new Product[]
            {
                new Product { Name = "Jeans", Category = "Clothing", Price = 24.7 },
                new Product { Name = "Socks", Category = "Clothing", Price = 8.12 },
                new Product { Name = "Scooter", Category = "Vehicle", Price = 99.99 },
                new Product { Name = "Skateboard", Category = "Vehicle", Price = 24.99 },
                new Product { Name = "Skirt", Category = "Clothing", Price = 17.5 }
            };

            IEnumerable<Product> Results = myProducts.Where(product => product.Category == "Clothing");
            var ResultsTwo = myProducts.OrderBy(product => product.Price).Select(product => new {Name = product.Name});
            double MaxPrice = myProducts.Max(product => product.Price);
            Product ResultsFour = myProducts.SingleOrDefault(product => product.Name == "Jeans");
            Product ResultsFive = myProducts.SingleOrDefault(product => product.Name == "Pants");
        }
    }
}
