using Microsoft.AspNetCore.Mvc;
using System.Text.Json;

[ApiController]
[Route("api/[controller]")]
public class PlacesController : ControllerBase
{
    private readonly string _filePath = Path.Combine(Directory.GetCurrentDirectory(), "AppData", "places.json");

    private async Task<List<Place>> ReadPlacesAsync()
    {
        if (!System.IO.File.Exists(_filePath))
            return new List<Place>();

        string json = await System.IO.File.ReadAllTextAsync(_filePath);
        var options = new JsonSerializerOptions
        {
            PropertyNameCaseInsensitive = true
        };
        var root = JsonSerializer.Deserialize<RootPlaces>(json, options);
        return root?.Places ?? new List<Place>();
    }

    public class RootPlaces
    {
        public required List<Place> Places { get; set; }
    }

    private async Task WritePlacesAsync(List<Place> places)
    {
        var data = new { places = places };
        string json = JsonSerializer.Serialize(data, new JsonSerializerOptions { WriteIndented = true });
        await System.IO.File.WriteAllTextAsync(_filePath, json);
    }

    [HttpGet]
    public async Task<IActionResult> Get()
    {
        var places = await ReadPlacesAsync();
        return Ok(places);
    }

    [HttpPost]
    public async Task<IActionResult> Post([FromBody] Place newPlace)
    {
        var places = await ReadPlacesAsync();
        places.Add(newPlace);
        await WritePlacesAsync(places);
        return Ok(newPlace);
    }
}
