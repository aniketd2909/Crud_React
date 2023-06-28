using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Employee_API.Context;
using Employee_API.Models;
using Employee_API.Services;

namespace Employee_API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeeController : ControllerBase
    {
        private readonly IEmployeeService _employeeService;

        public EmployeeController(IEmployeeService employeeService)
        {
            
            _employeeService = employeeService;
        }

        // GET: api/Employee
        [HttpGet]
        public async Task<IActionResult> GetAllEmployees()
        {
            try
            {
                //Returns the success message
                return Ok(await _employeeService.GetEmployeeListAsync());
            }

            catch (Exception ex)
            {
                //Returns BadRequest response for other excpetions
                return BadRequest(ex.Message);
            }

        }

        // GET: api/Employee/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetEmployeeById(Guid id)
        {
            try
            {
                //Returns the success message
                return Ok(await _employeeService.GetEmployeeByIdAsync(id));

            }

            catch (Exception ex)
            {
                //Returns BadRequest response for other excpetions
                return BadRequest(ex.Message); ;
            }

        }

        // PUT: api/Employee/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateEmployee(Employee employee)
        {
            try
            {
                bool flag = await _employeeService.UpdateEmployeeAsync(employee);
                if (flag == true)
                {
                    //Returns Created response if update successfully
                    return Created("Updated Succesfully", employee);
                }

                //Returns Conflict if id was not able to update
                return Conflict("Employee was not Updated");

            }

            catch (Exception ex)
            {
                //Returns BadRequest response for other excpetions
                return BadRequest(ex.Message);
            }

        }



        // POST: api/Employee
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<IActionResult> AddEmployee(Employee employee)
        {
            try
            {
                bool flag = await _employeeService.AddEmployeeAsync(employee);
                if (flag == true)
                {
                    //Returns Created response if added successfully
                    return Created("Employee Added", employee);
                }

                //Returns Conflict if it was not able to add
                return Conflict("Employee was not Added");

            }
            catch (Exception ex)
            {
                //Returns BadRequest response for other excpetions
                return BadRequest(ex.Message);
            }

        }

        // DELETE: api/Employee/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteEmployee(Guid id)
        {
            try
            {
                bool flag = await _employeeService.DeleteEmployeeAsync(id);
                if (flag == true)
                {
                    //Returns success response if deleted successfully  
                    return Ok("Deleted Successfully");
                }

                //Returns Conflict if it was not able to delete
                return Conflict("Employee was not Deleted");

            }

            catch (Exception ex)
            {
                //Returns BadRequest response for other excpetions
                return BadRequest(ex.Message);
            }
        }
    }
}
