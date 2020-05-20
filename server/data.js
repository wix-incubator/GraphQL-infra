const places = {
  Jerusalem: {
    id: 1,
    name: 'Jerusalem',
  },
  TelAviv: {
    id: 2,
    name: 'Tel-Aviv',
  },
  RamatGan: {
    id: 3,
    name: 'Ramat Gan'
  },
  Givatayim: {
    id: 4,
    name: 'Givatayim'
  },
  Herzliya: {
    id: 5,
    name: 'Herzliya',
  },
  Holon: {
    id: 6,
    name: 'Holon'
  },
  Modiin: {
    id: 7,
    name: 'Modiin-Maccabim-Reut'
  }
};

export default {
  users: [
    {
      id: 1,
      firstName: 'Roni',
      lastName: 'Levi',
      livesIn: places.Jerusalem,
      dateId: 2,
    },
    {
      id: 2,
      firstName: 'Noam',
      lastName: 'Katzir',
      livesIn: places.TelAviv,
      dateId: 1,
    },
    {
      id: 3,
      firstName: 'Amir',
      lastName: 'Zehavi',
      livesIn: places.TelAviv,
      dateId: 4,
    },
    {
      id: 4,
      firstName: 'Danit',
      lastName: 'Livnat',
      livesIn: places.TelAviv,
      dateId: 3,
    },
    {
      id: 5,
      firstName: 'Mor',
      lastName: 'Lerman',
      livesIn: places.RamatGan,
      dateId: 6,
    },
    {
      id: 6,
      firstName: 'Maor',
      lastName: 'Finkelstein',
      livesIn: places.TelAviv,
      dateId: 5,
    },
    {
      id: 7,
      firstName: 'Denis',
      lastName: 'Roskov',
      livesIn: places.TelAviv,
      dateId: 8,
    },
    {
      id: 8,
      firstName: 'Hadar',
      lastName: 'Brayer',
      livesIn: places.TelAviv,
      dateId: 7,
    },
    {
      id: 9,
      firstName: 'Hagar',
      lastName: 'Moshe',
      livesIn: places.TelAviv,
      dateId:10,
    },
    {
      id: 10,
      firstName: 'Nir',
      lastName: 'Pour',
      livesIn: places.Herzliya,
      dateId:9,
    },
    {
      id: 11,
      firstName: 'Arik',
      lastName: 'Haviv',
      livesIn: places.Holon,
      dateId:12,
    },
    {
      id: 12,
      firstName: 'Dobi',
      lastName: 'Amiram',
      livesIn: places.Modiin,
      dateId:11,
    },
  ]
}
