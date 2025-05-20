using Microsoft.AspNetCore.Mvc;
using System.Linq;

[ApiController]
[Route("api/[controller]")]
public class AuthController : ControllerBase
{
    private readonly AppDbContext _db;

    public AuthController(AppDbContext db)
    {
        _db = db;
    }

    // POST: api/auth/login
    [HttpPost("login")]
    public IActionResult Login([FromBody] LoginRequest request)
    {
        var user = _db.Users.FirstOrDefault(u =>
            u.Username == request.Username &&
            u.Password == request.Password);

        if (user == null)
            return Unauthorized("Invalid login or password");

        return Ok("Access granted");
    }

    // POST: api/auth/register
    [HttpPost("register")]
    public IActionResult Register([FromBody] LoginRequest request)
    {
        if (_db.Users.Any(u => u.Username == request.Username))
        {
            return Conflict("Username with this name already exists");
        }

        var newUser = new User
        {
            Username = request.Username,
            Password = request.Password
        };

        _db.Users.Add(newUser);
        _db.SaveChanges();

        return Ok("Registration was successful");
    }
}

public class LoginRequest
{
    public string Username { get; set; } = "";
    public string Password { get; set; } = "";
}

