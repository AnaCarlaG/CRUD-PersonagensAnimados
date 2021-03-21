using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace PersonagemAnimado.Infraestrutura.Migrations
{
    public partial class AlteracaoFK : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Personagem_Filme_id",
                table: "Personagem");

            migrationBuilder.AddColumn<Guid>(
                name: "FilmeID",
                table: "Personagem",
                type: "uniqueidentifier",
                nullable: false,
                defaultValue: new Guid("00000000-0000-0000-0000-000000000000"));

            migrationBuilder.CreateIndex(
                name: "IX_Personagem_FilmeID",
                table: "Personagem",
                column: "FilmeID");

            migrationBuilder.AddForeignKey(
                name: "FK_Personagem_Filme_FilmeID",
                table: "Personagem",
                column: "FilmeID",
                principalTable: "Filme",
                principalColumn: "id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Personagem_Filme_FilmeID",
                table: "Personagem");

            migrationBuilder.DropIndex(
                name: "IX_Personagem_FilmeID",
                table: "Personagem");

            migrationBuilder.DropColumn(
                name: "FilmeID",
                table: "Personagem");

            migrationBuilder.AddForeignKey(
                name: "FK_Personagem_Filme_id",
                table: "Personagem",
                column: "id",
                principalTable: "Filme",
                principalColumn: "id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
