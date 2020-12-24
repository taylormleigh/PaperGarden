let worlds = [
  {
    world_id: 0,
    world_name: "Nile",
    world_details: {
      revolution: 365,
      rotation: 24,
      seasons: "four seasons, summer, fall, winter and spring",
      satellites: "three suns and one moon",
    },
    world_regions: [
      {
        region_name: "West", //worlds[0].world_regions[0]
        region_details: {
          environment: "swamp",
        },
        region_cities: [
          {
            city_name: "Fly",
            city_details: {
              size: "small town", //worlds[0].world_regions[0].region_cities[0].city_details.size
              exports: "glass",
            }
          },
          {
            city_name: "Eauville",
            city_details: {
              size: "medium sized port city",
              exports: "seafood; fish and oysters",
            }
          }
        ],
      },
      {
        region_name: "South",
        region_details: {
          environment: "tropical",
        },
        region_cities: [
          {
            city_name: "Jet",
            city_details: {
              size: "large city",
              exports: "tobacco, crafted goods, fabric",
            }
          }
        ],
      },
    ],
  },

  {
    world_id: 1,
    world_name: "TestWorld",
    world_details: {
      revolution: 42,
      rotation: 54,
      seasons: "three seasons that last seven years each",
      satellites: "six hundred satellites; you can't even see the sun",
    },
    world_regions: [
      {
        region_name: "region name",
        region_details: {
          environment: "type of environment",
        },
        region_cities: [
          {
            city_name: "city name",
            city_details: {
              size: "size of city",
              exports: "major exports",
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