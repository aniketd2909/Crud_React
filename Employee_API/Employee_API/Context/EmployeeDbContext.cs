using System;
using Employee_API.Models;
using Microsoft.EntityFrameworkCore;

namespace Employee_API.Context
{
    public class EmployeeDbContext : DbContext
    {
        public EmployeeDbContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<Employee> Employees { get; set; }

    }
}

