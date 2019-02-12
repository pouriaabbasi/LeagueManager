﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using leagueManager.DAL;

namespace leagueManager.Migrations
{
    [DbContext(typeof(MainDbContext))]
    [Migration("20190212061121_leagueWinnerNullable")]
    partial class leagueWinnerNullable
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.2.1-servicing-10028")
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("leagueManager.DOMAIN.Entity.League", b =>
                {
                    b.Property<long>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<DateTime?>("EndDate");

                    b.Property<bool>("IsCompleted");

                    b.Property<int>("Iteration");

                    b.Property<DateTime>("StartDate");

                    b.Property<string>("Title")
                        .HasMaxLength(200);

                    b.Property<long>("TypeId");

                    b.Property<long?>("WinnerPlayerId");

                    b.HasKey("Id");

                    b.HasIndex("TypeId");

                    b.ToTable("League");
                });

            modelBuilder.Entity("leagueManager.DOMAIN.Entity.LeagueMatch", b =>
                {
                    b.Property<long>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<long>("FirstPlayerId");

                    b.Property<int?>("FirstPlayerScore");

                    b.Property<long>("LeagueId");

                    b.Property<DateTime?>("MatchDate");

                    b.Property<long>("SecondPlayerId");

                    b.Property<int?>("SecondPlayerScore");

                    b.Property<long?>("WinnerPlayerId");

                    b.HasKey("Id");

                    b.HasIndex("FirstPlayerId");

                    b.HasIndex("LeagueId");

                    b.HasIndex("SecondPlayerId");

                    b.HasIndex("WinnerPlayerId");

                    b.ToTable("LeagueMatch");
                });

            modelBuilder.Entity("leagueManager.DOMAIN.Entity.LeaguePlayer", b =>
                {
                    b.Property<long>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<long>("LeagueId");

                    b.Property<long>("PlayerId");

                    b.HasKey("Id");

                    b.HasIndex("LeagueId");

                    b.HasIndex("PlayerId");

                    b.ToTable("LeaguePlayer");
                });

            modelBuilder.Entity("leagueManager.DOMAIN.Entity.Player", b =>
                {
                    b.Property<long>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("FirstName")
                        .HasMaxLength(100);

                    b.Property<string>("LastName")
                        .HasMaxLength(100);

                    b.Property<string>("Profile")
                        .HasMaxLength(500);

                    b.HasKey("Id");

                    b.ToTable("Player");
                });

            modelBuilder.Entity("leagueManager.DOMAIN.Entity.Type", b =>
                {
                    b.Property<long>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Description")
                        .HasMaxLength(2000);

                    b.Property<bool>("IsContinuous");

                    b.Property<string>("Name")
                        .HasMaxLength(200);

                    b.Property<int>("P2PPlayCount");

                    b.HasKey("Id");

                    b.ToTable("Type");
                });

            modelBuilder.Entity("leagueManager.DOMAIN.Entity.League", b =>
                {
                    b.HasOne("leagueManager.DOMAIN.Entity.Type", "Type")
                        .WithMany("Leagues")
                        .HasForeignKey("TypeId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("leagueManager.DOMAIN.Entity.LeagueMatch", b =>
                {
                    b.HasOne("leagueManager.DOMAIN.Entity.Player", "FirstPlayer")
                        .WithMany("FirstPlayers")
                        .HasForeignKey("FirstPlayerId")
                        .OnDelete(DeleteBehavior.Restrict);

                    b.HasOne("leagueManager.DOMAIN.Entity.League", "League")
                        .WithMany("LeagueMatches")
                        .HasForeignKey("LeagueId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("leagueManager.DOMAIN.Entity.Player", "SecondPlayer")
                        .WithMany("SecondPlayers")
                        .HasForeignKey("SecondPlayerId")
                        .OnDelete(DeleteBehavior.Restrict);

                    b.HasOne("leagueManager.DOMAIN.Entity.Player", "WinnerPlayer")
                        .WithMany("WinnerPlayers")
                        .HasForeignKey("WinnerPlayerId")
                        .OnDelete(DeleteBehavior.Restrict);
                });

            modelBuilder.Entity("leagueManager.DOMAIN.Entity.LeaguePlayer", b =>
                {
                    b.HasOne("leagueManager.DOMAIN.Entity.League", "League")
                        .WithMany("LeaguePlayers")
                        .HasForeignKey("LeagueId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("leagueManager.DOMAIN.Entity.Player", "Player")
                        .WithMany("LeaguePlayers")
                        .HasForeignKey("PlayerId")
                        .OnDelete(DeleteBehavior.Cascade);
                });
#pragma warning restore 612, 618
        }
    }
}