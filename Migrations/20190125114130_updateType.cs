using Microsoft.EntityFrameworkCore.Migrations;

namespace leagueManager.Migrations
{
    public partial class updateType : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<bool>(
                name: "IsContinuous",
                table: "Type",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<int>(
                name: "P2PPlayCount",
                table: "Type",
                nullable: false,
                defaultValue: 0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "IsContinuous",
                table: "Type");

            migrationBuilder.DropColumn(
                name: "P2PPlayCount",
                table: "Type");
        }
    }
}
