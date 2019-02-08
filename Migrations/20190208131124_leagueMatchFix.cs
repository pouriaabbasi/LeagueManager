using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace leagueManager.Migrations
{
    public partial class leagueMatchFix : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<DateTime>(
                name: "MatchDate",
                table: "LeagueMatch",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "MatchDate",
                table: "LeagueMatch");
        }
    }
}
