using Microsoft.AspNetCore.Mvc;
using System.Linq;

[ApiController]
[Route("api/[controller]")]
public class UserController : ControllerBase
{
    private readonly AppDbContext _db;

    public UserController(AppDbContext db)
    {
        _db = db;
    }

    // GET: api/user
    [HttpGet]
    public IActionResult GetUsers()
    {
        var users = _db.Users.ToList();
        return Ok(users);
    }
    // PUT: api/user/password
    [HttpPut("password")]
    public IActionResult UpdatePassword([FromBody] PasswordUpdateRequest request)
    {
        var user = _db.Users.FirstOrDefault(u => u.Username == request.Username);
        if (user == null)
            return NotFound("User not found");

        user.Password = request.NewPassword;
        _db.SaveChanges();

        return Ok("Password updated successfully");
    }

    // DELETE: api/user/{id}
    [HttpDelete("{id}")]
    public IActionResult DeleteUser(int id)
    {
        var user = _db.Users.FirstOrDefault(u => u.Id == id);
        if (user == null)
            return NotFound("User not found");

        _db.Users.Remove(user);
        _db.SaveChanges();

        return Ok("User deleted successfully");
    }
}
public class PasswordUpdateRequest
{
    public required string Username { get; set; } = "";
    public string NewPassword { get; set; } = "";
}
