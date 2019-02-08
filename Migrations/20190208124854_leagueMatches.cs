using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace leagueManager.Migrations
{
    public partial class leagueMatches : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "LeagueMatch",
                columns: table => new
                {
                    Id = table.Column<long>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    LeagueId = table.Column<long>(nullable: false),
                    FirstPlayerId = table.Column<long>(nullable: false),
                    SecondPlayerId = table.Column<long>(nullable: false),
                    FirstPlayerScore = table.Column<int>(nullable: true),
                    SecondPlayerScore = table.Column<int>(nullable: true),
                    WinnerPlayerId = table.Column<long>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_LeagueMatch", x => x.Id);
                    table.ForeignKey(
                        name: "FK_LeagueMatch_Player_FirstPlayerId",
                        column: x => x.FirstPlayerId,
                        principalTable: "Player",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_LeagueMatch_League_LeagueId",
                        column: x => x.LeagueId,
                        principalTable: "League",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_LeagueMatch_Player_SecondPlayerId",
                        column: x => x.SecondPlayerId,
                        principalTable: "Player",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_LeagueMatch_Player_WinnerPlayerId",
                        column: x => x.WinnerPlayerId,
                        principalTable: "Player",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_LeagueMatch_FirstPlayerId",
                table: "LeagueMatch",
                column: "FirstPlayerId");

            migrationBuilder.CreateIndex(
                name: "IX_LeagueMatch_LeagueId",
                table: "LeagueMatch",
                column: "LeagueId");

            migrationBuilder.CreateIndex(
                name: "IX_LeagueMatch_SecondPlayerId",
                table: "LeagueMatch",
                column: "SecondPlayerId");

            migrationBuilder.CreateIndex(
                name: "IX_LeagueMatch_WinnerPlayerId",
                table: "LeagueMatch",
                column: "WinnerPlayerId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "LeagueMatch");
        }
    }
}
