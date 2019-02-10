/**
 * Airbnb Clone App
 * @author: Andy
 * @Url: https://www.cubui.com
 */
import colors from '../styles/colors';

const listing1Photo = require('./photos/listing1.png');
const listing2Photo = require('./photos/listing2.png');
const listing3Photo = require('./photos/listing3.png');
const listing4Photo = require('./photos/listing4.png');
const listing5Photo = require('./photos/listing5.png');
const listing6Photo = require('./photos/listing6.png');
const listing7Photo = require('./photos/listing7.png');
const listing8Photo = require('./photos/listing8.png');
const listing9Photo = require('./photos/listing9.png');
const listing10Photo = require('./photos/listing10.png');
const listing11Photo = require('./photos/listing11.png');
const listing12Photo = require('./photos/listing12.png');
const listing13Photo = require('./photos/listing13.png');
const listing14Photo = require('./photos/listing14.png');
const listing15Photo = require('./photos/listing15.png');
const listing16Photo = require('./photos/listing16.png');

const listings = [
  {
    title: 'Experiences',
    boldTitle: false,
    showAddToFav: true,
    listings: [
      {
        id: 1,
        photo: listing1Photo,
        type: 'BOAT RIDE',
        title: 'Sail past Japan\'s largest port with a certified skipper',
        location: 'Tokyo, Japan',
        price: 60,
        priceType: 'per person',
        stars: 29,
        color: colors.gray04,
      },
      {
        id: 2,
        photo: listing2Photo,
        type: 'CHEESE TASTING',
        title: 'Funny cheesemonger takes you on a Tour de Fromage',
        location: 'Paris, France',
        price: 70,
        priceType: 'per person',
        stars: 4,
        color: colors.darkOrange,
      },
      {
        id: 3,
        photo: listing3Photo,
        type: 'BIKE RIDE',
        title: 'Cycling, "KFC" & Drinking for your Seoul',
        location: 'Seoul, South Korea',
        price: 47,
        priceType: 'per person',
        stars: 30,
        color: colors.black,
      },
      {
        id: 4,
        photo: listing4Photo,
        type: 'BIKE RIDE',
        title: 'Cycle through side streets with a local',
        location: 'Amsterdam, Netherlands',
        price: 57,
        priceType: 'per person',
        stars: 70,
        color: colors.brown01,
      },
      {
        id: 5,
        photo: listing5Photo,
        type: 'SURFING',
        title: 'Surf Bondi\'s waves, then eat & drink like a local',
        location: 'Sydney, Australia',
        price: 61,
        priceType: 'per person',
        stars: 66,
        color: colors.blue,
      },
      {
        id: 6,
        photo: listing6Photo,
        type: 'DRAWING CLASS',
        title: 'A drawing/walking tour in Montmartre',
        location: 'Paris, France',
        price: 55,
        priceType: 'per person',
        stars: 15,
        color: colors.brown02,
      },
    ],
  },
  {
    title: 'Homes',
    boldTitle: false,
    showAddToFav: true,
    listings: [
      {
        id: 7,
        photo: listing7Photo,
        type: 'ENTIRE HOUSE - 1 BED',
        title: 'BALIAN TREEHOUSE with beautiful pool',
        location: 'Bali, Indonesia',
        price: 72,
        priceType: 'per night',
        stars: 101,
        color: colors.green01,
      },
      {
        id: 8,
        photo: listing8Photo,
        type: 'ENTIRE VILLA - 3 BEDS',
        title: 'Casa de Rio - Beach and Mountains',
        location: 'Secarias, Portugal',
        price: 69,
        priceType: 'per night',
        stars: 119,
        color: colors.brown01,
      },
      {
        id: 9,
        photo: listing9Photo,
        type: 'ENTIRE HOUSE - 1 BED',
        title: 'Cozy A-Frame Cabin in the Redwoods',
        location: 'Cazadero, United States',
        price: 152,
        priceType: 'per night',
        stars: 320,
        color: colors.darkOrange,
      },
      {
        id: 10,
        photo: listing10Photo,
        type: 'ENTIRE GUESTHOUSE - 1 BED',
        title: '1880s Carriage House in Curtis Park',
        location: 'Denver, United States',
        price: 116,
        priceType: 'per night',
        stars: 300,
        color: colors.gray04,
      },
      {
        id: 11,
        photo: listing11Photo,
        type: 'ENTIRE BOAT - 2 BEDS',
        title: 'A Pirate\'s Life for Me Houseboar!',
        location: 'Charleston, United States',
        price: 182,
        priceType: 'per night',
        stars: 132,
        color: colors.green01,
      },
    ],
  },
  {
    title: 'Popular Reservations',
    boldTitle: true,
    showAddToFav: false,
    listings: [
      {
        id: 12,
        photo: listing12Photo,
        type: 'RESERVATION',
        title: 'G\'raj Mahal',
        price: '30',
        priceType: 'per person',
        stars: 0,
        color: colors.blue,
      },
      {
        id: 13,
        photo: listing13Photo,
        type: 'RESERVATION',
        title: 'Le Fond',
        price: '30',
        priceType: 'per person',
        stars: 0,
        color: colors.black,
      },
      {
        id: 14,
        photo: listing14Photo,
        type: 'RESERVATION',
        title: 'The Glass Onion',
        price: '34',
        priceType: 'per person',
        stars: 0,
        color: colors.brown01,
      },
      {
        id: 15,
        photo: listing15Photo,
        type: 'RESERVATION',
        title: 'The Waiting Room',
        price: '34',
        priceType: 'per person',
        stars: 0,
        color: colors.green01,
      },
      {
        id: 16,
        photo: listing16Photo,
        type: 'RESERVATION',
        title: 'Bar Boulud',
        price: '46',
        priceType: 'per person',
        stars: 0,
        color: colors.gray04,
      },
    ],
  },
];

export default listings;
