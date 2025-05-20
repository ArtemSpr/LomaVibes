public class Location
{
    public double? Latitude { get; set; }
    public double? Longitude { get; set; }
}

public class Place
{
    public int? Id { get; set; }
    public required string Name { get; set; }
    public required string Description { get; set; }
    public Location? Location { get; set; }
    public required string Adress { get; set; }
    public string? Date { get; set; }
    public string? Status { get; set; }
}
