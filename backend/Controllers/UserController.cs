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

    // POST: api/user/register
    [HttpPost("register")]
    public IActionResult Register([FromBody] User user)
    {
        if (_db.Users.Any(u => u.Username == user.Username))
        {
            return Conflict("Username already exists");
        }

        _db.Users.Add(user);
        _db.SaveChanges();

        return Ok("User registered");
    }
}
