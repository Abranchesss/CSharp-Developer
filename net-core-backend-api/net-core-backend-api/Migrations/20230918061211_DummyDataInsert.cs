using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace net_core_backend_api.Migrations
{
    /// <inheritdoc />
    public partial class DummyDataInsert : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.Sql("insert into public.orders(\"valorTotal\", \"qtdeItens\", \"valorFrete\") values (30.50, 4, 28.0), (59.90, 8, 40.0), (9.80, 1, 7.0);");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {

        }
    }
}
