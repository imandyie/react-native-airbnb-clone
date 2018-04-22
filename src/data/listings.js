/**
 * Airbnb Clone App
 * @author: Andy
 * @Url: https://www.cubui.com
 */
 
const listings = [
  {
  	title: 'Experiences',
  	boldTitle: false,
  	showAddToFav: true,
  	listings: [
  	  {
  	  	id: 1,
        photo: require('./photos/listing1.png'),
        type: 'BOAT RIDE',
        title: 'Sail past Japan\'s largest port with a certified skipper',
        price: 60,
        priceType: 'per person',
        stars: 29,
  	  },
  	  {
  	  	id: 2,
        photo: require('./photos/listing2.png'),
        type: 'CHEESE TASTING',
        title: 'Funny cheesemonger takes you on a Tour de Fromage',
        price: 70,
        priceType: 'per person',
        stars: 4,
  	  },
  	  {
  	  	id: 3,
        photo: require('./photos/listing3.png'),
        type: 'BIKE RIDE',
        title: 'Cycling, "KFC" & Drinking for your Seoul',
        price: 47,
        priceType: 'per person',
        stars: 30,
  	  },
  	  {
  	  	id: 4,
        photo: require('./photos/listing4.png'),
        type: 'BIKE RIDE',
        title: 'Cycle through side streets with a local',
        price: 57,
        priceType: 'per person',
        stars: 70,
  	  },
  	  {
  	  	id: 5,
        photo: require('./photos/listing5.png'),
        type: 'SURFING',
        title: 'Surf Bondi\'s waves, then eat & drink like a local',
        price: 61,
        priceType: 'per person',
        stars: 66,
  	  },
  	  {
  	  	id: 6,
        photo: require('./photos/listing6.png'),
        type: 'DRAWING CLASS',
        title: 'A drawing/walking tour in Montmartre',
        price: 55,
        priceType: 'per person',
        stars: 15,
  	  }
  	]
  },
  {
  	title: 'Homes',
  	boldTitle: false,
  	showAddToFav: true,
  	listings: [
   	  {
  	  	id: 7,
        photo: require('./photos/listing7.png'),
        type: 'ENTIRE HOUSE - 1 BED',
        title: 'BALIAN TREEHOUSE with beautiful pool',
        price: 72,
        priceType: 'per night',
        stars: 101,
  	  },
   	  {
  	  	id: 8,
        photo: require('./photos/listing8.png'),
        type: 'ENTIRE VILLA - 3 BEDS',
        title: 'Casa de Rio - Beach and Mountains',
        price: 69,
        priceType: 'per night',
        stars: 119,
  	  },
   	  {
  	  	id: 9,
        photo: require('./photos/listing9.png'),
        type: 'ENTIRE HOUSE - 1 BED',
        title: 'Cozy A-Frame Cabin in the Redwoods',
        price: 152,
        priceType: 'per night',
        stars: 320,
  	  },
   	  {
  	  	id: 10,
        photo: require('./photos/listing10.png'),
        type: 'ENTIRE GUESTHOUSE - 1 BED',
        title: '1880s Carriage House in Curtis Park',
        price: 116,
        priceType: 'per night',
        stars: 300,
  	  },
   	  {
  	  	id: 11,
        photo: require('./photos/listing11.png'),
        type: 'ENTIRE BOAT - 2 BEDS',
        title: 'A Pirate\'s Life for Me Houseboar!',
        price: 182,
        priceType: 'per night',
        stars: 132,
  	  }
  	]
  },
  {
  	title: 'Popular Reservations',
  	boldTitle: true,
  	showAddToFav: false,
  	listings: [
  	  {
  	    id: 12,
  	    photo: require('./photos/listing12.png'),
  	    type: 'RESERVATION',
  	    title: 'G\'raj Mahal',
  	    price: '30',
  	    priceType: 'per person',
  	    stars: 0,
  	  },
  	  {
  	    id: 13,
  	    photo: require('./photos/listing13.png'),
  	    type: 'RESERVATION',
  	    title: 'Le Fond',
  	    price: '30',
  	    priceType: 'per person',
  	    stars: 0,
  	  },
  	  {
  	    id: 14,
  	    photo: require('./photos/listing14.png'),
  	    type: 'RESERVATION',
  	    title: 'The Glass Onion',
  	    price: '34',
  	    priceType: 'per person',
  	    stars: 0,
  	  },
  	  {
  	    id: 15,
  	    photo: require('./photos/listing15.png'),
  	    type: 'RESERVATION',
  	    title: 'The Waiting Room',
  	    price: '34',
  	    priceType: 'per person',
  	    stars: 0,
  	  },
      {
        id: 16,
        photo: require('./photos/listing16.png'),
        type: 'RESERVATION',
        title: 'Bar Boulud',
        price: '46',
        priceType: 'per person',
        stars: 0,
      }
  	]
  }
];

export default listings;