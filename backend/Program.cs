using Serilog;
using Serilog.Events;
using Serilog.Formatting.Json;
using System.Diagnostics;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

Log.Logger = new LoggerConfiguration()
    .ReadFrom.Configuration(builder.Configuration)
    .Enrich.FromLogContext()
// add console as logging target
    .WriteTo.Console()
// add a logging target for warnings and higher severity logs
// structured in JSON format
    .WriteTo.File(new JsonFormatter(),
    "Errors.json",
    restrictedToMinimumLevel: LogEventLevel.Error)
    // add a rolling file for all logs
    .WriteTo.File("all-.logs",
    rollingInterval: RollingInterval.Day)
// set default minimum level
    .MinimumLevel.Information()
    .CreateLogger();

builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowReactApp",
        policy =>
        {
            policy.WithOrigins("http://localhost:5173")
                  .AllowAnyHeader()
                  .AllowAnyMethod();
        });
});

builder.Host.UseSerilog();

builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));


builder.Services.AddControllers();// Add services to the container.

builder.Services.AddOpenApi();// Learn more about configuring OpenAPI at https://aka.ms/aspnet/openapi


var app = builder.Build();

if (app.Environment.IsDevelopment())// Configure the HTTP request pipeline.
{
    app.MapOpenApi();
}

app.UseSerilogRequestLogging(options =>
{
    options.GetLevel = (httpContext, elapsed, ex) =>
    {
        var statusCode = httpContext.Response?.StatusCode;

        if (statusCode >= 500 || statusCode == 404)
            return LogEventLevel.Error;
        if (statusCode == 401 || statusCode == 403)
            return LogEventLevel.Warning;
        if (statusCode >= 400)
            return LogEventLevel.Information;
        return LogEventLevel.Information;
    };
});
app.UseCors("AllowReactApp");

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
