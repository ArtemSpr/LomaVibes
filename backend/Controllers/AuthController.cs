using Microsoft.AspNetCore.Mvc;
using System.Text.Json;

[ApiController]
[Route("api/[controller]")]
public class AuthController : ControllerBase
{
    private readonly string _filePath = "users.json";

    [HttpPost("login")]
    public IActionResult Login([FromBody] LoginRequest request)
    {
        var users = LoadUsers();
        if (users == null)
            return StatusCode(500, "Error from database");

        var user = users.FirstOrDefault(u =>
            u.Username == request.Username &&
            u.Password == request.Password);

        if (user == null)
            return Unauthorized("Invalid login or password");

        return Ok("Access granted");
    }

    [HttpPost("register")]
    public IActionResult Register([FromBody] LoginRequest request)
    {
        var users = LoadUsers() ?? new List<User>();

        if (users.Any(u => u.Username == request.Username))
            return Conflict("Username with this name already exist");

        users.Add(new User { Username = request.Username, Password = request.Password });

        try
        {
            var json = JsonSerializer.Serialize(users, new JsonSerializerOptions { WriteIndented = true });
            System.IO.File.WriteAllText(_filePath, json);
            return Ok("Registration was succesfully");
        }
        catch
        {
            return StatusCode(500, "Error write to file");
        }
    }

    private List<User>? LoadUsers()
    {
        if (!System.IO.File.Exists(_filePath)) return new List<User>();
        var json = System.IO.File.ReadAllText(_filePath);
        return JsonSerializer.Deserialize<List<User>>(json);
    }
}

public class LoginRequest
{
    public string Username { get; set; } = "";
    public string Password { get; set; } = "";
}

public class User
{
    public string Username { get; set; } = "";
    public string Password { get; set; } = "";
}
