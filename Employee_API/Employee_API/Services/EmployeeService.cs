using System;
using Employee_API.Context;
using Employee_API.Models;
using Microsoft.EntityFrameworkCore;

namespace Employee_API.Services
{
	public class EmployeeService:IEmployeeService
	{

        private readonly EmployeeDbContext _context;

        public EmployeeService(EmployeeDbContext context)
		{
            _context = context;
		}

        public async Task<bool> AddEmployeeAsync(Employee employee)
        {
            bool flag = true;
            await _context.Employees.AddAsync(employee);
            int check = await _context.SaveChangesAsync(); // saves the changes 
            if (check < 0)
            {
                flag = false;
            }
            return flag;
        }

        public async Task<bool> DeleteEmployeeAsync(Guid id)
        {
            bool flag = true;
            Employee employee = await _context.Employees.FindAsync(id);


            if (employee == null)
            {
                throw new NotImplementedException();
            }

            _context.Employees.Remove(employee);
            int check = await _context.SaveChangesAsync();
            if (check < 0)
            {
                flag = false;
            }
            return flag;
        }

        public async Task<Employee> GetEmployeeByIdAsync(Guid id)
        {
            Employee employee = await _context.Employees.FindAsync(id);

            if (employee == null)
            {
                throw new NotImplementedException("Employee not Present");
            }

            return employee;
        }

        public async Task<List<Employee>> GetEmployeeListAsync()
        {
            List<Employee> employees = await _context.Employees.ToListAsync();

            return employees;
        }

        public async Task<bool> UpdateEmployeeAsync(Employee employee)
        {
            bool flag = true;
            _context.Employees.Update(employee);
            int check = await _context.SaveChangesAsync();
            if (check < 0)
            {
                flag = false;
            }
            return flag;
        }
    }
}

