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
}
