module.exports = [
  {
    WorldID: 0,
    WorldName: "Nile",
    WorldDetails: {
      Revolution: 365,
      Rotation: 24,
      Seasons: "four seasons, summer, fall, winter and spring",
      Satellites: "three suns and one moon",
    },
    WorldRegions: [
      {
        RegionName: "West", //worlds[0].world_regions[0]
        RegionDetails: {
          Environment: "swamp",
        },
        RegionCities: [
          {
            CityName: "Fly",
            CityDetails: {
              Size: "small town", //worlds[0].world_regions[0].region_cities[0].city_details.size
              Exports: "glass",
            }
          },
          {
            CityName: "Eauville",
            CityDetails: {
              Size: "medium sized port city",
              Exports: "seafood; fish and oysters",
            }
          }
        ],
      },
      {
        RegionName: "South",
        RegionDetails: {
          Environment: "tropical",
        },
        RegionCities: [
          {
            CityName: "Jet",
            CityDetails: {
              Size: "large city",
              Exports: "tobacco, crafted goods, fabric",
            }
          }
        ],
      },
    ],
  },

  {
    WorldID: 1,
    WorldName: "TestWorld",
    WorldDetails: {
      Revolution: 42,
      Rotation: 54,
      Seasons: "three seasons that last seven years each",
      Satellites: "six hundred satellites; you can't even see the sun",
    },
    WorldRegions: [
      {
        RegionName: "region name",
        RegionDetails: {
          Environment: "type of environment",
        },
        RegionCities: [
          {
            CityName: "city name",
            CityDetails: {
              Size: "size of city",
              Exports: "major exports",
            }
          }
        ],
      }
    ],
  },
]

//worlds [ ]
//regions [ { [ ]
//cities [ { [ { []