var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddCors();


var app = builder.Build();

// Configure the HTTP request pipeline.

app.UseCors(a => a.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader());

app.UseHttpsRedirection();

app.MapPost("/calcularfrete", (int qtdItens) =>
{
    return qtdItens * new Random().Next(5, 11);
});

app.Run();