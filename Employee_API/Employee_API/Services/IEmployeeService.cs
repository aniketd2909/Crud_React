using System;
using Employee_API.Models;

namespace Employee_API.Services
{
	public interface IEmployeeService
	{

        public Task<List<Employee>> GetEmployeeListAsync();
        public Task<Employee> GetEmployeeByIdAsync(Guid id);
        public Task<bool> AddEmployeeAsync(Employee employee);
        public Task<bool> UpdateEmployeeAsync(Employee employee);
        public Task<bool> DeleteEmployeeAsync(Guid id);



    }
}

