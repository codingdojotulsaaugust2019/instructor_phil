﻿using System;
using System.Collections.Generic;
using System.Linq;
using JsonData;

namespace ConsoleApplication
{
    public class Program
    {
        public static void Main(string[] args)
        {
            //Collections to work with
            List<Artist> Artists = MusicStore.GetData().AllArtists;
            List<Group> Groups = MusicStore.GetData().AllGroups;

            //========================================================
            //Solve all of the prompts below using various LINQ queries
            //========================================================

            //There is only one artist in this collection from Mount Vernon, what is their name and age?
            var OneArtist = Artists.Select(Artist => new {name = Artist.RealName, age = Artist.Age, hometown = Artist.Hometown}).FirstOrDefault(artist => artist.hometown == "Mount Vernon");
	        Console.WriteLine(OneArtist);
            //Who is the youngest artist in our collection of artists?

            //Display all artists with 'William' somewhere in their real name

            //Display the 3 oldest artist from Atlanta

            //(Optional) Display the Group Name of all groups that have members that are not from New York City

            //(Optional) Display the artist names of all members of the group 'Wu-Tang Clan'
	        Console.WriteLine(Groups.Count);
        }
    }
}
