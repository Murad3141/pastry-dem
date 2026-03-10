// Product data for The Pastry
// Images reference the live site CDN for fidelity;
// replace with /images/<filename> after running migrate_images.js

const CDN = 'https://thepastry.nl/wp-content/uploads/2020/02'

export const products = [
  {
    id: 1,
    name: 'Honeycomb Orange & Mango',
    category: 'Signature Cake',
    tag: 'Bestseller',
    price: 88.00,
    shortDesc:
      'As bees gather honey, we collected what is sweetest of all things and created our own honey comb of wonder — a unique orange mango and carrot confit, yoghurt mousse, and an exciting blend of nuts with caramel, all seated on a light sponge base.',
    specs: [
      { label: 'Weight',    value: '1 kg' },
      { label: 'Portions',  value: '8–9 people' },
      { label: 'Size',      value: '19 × 19 × 5 cm' },
      { label: 'Shelf life',value: '2 days (fridge)' },
    ],
    allergens: 'Gluten, milk, nuts, eggs',
    ingredients:
      'Cream, sugar, milk, carrots, eggs, white chocolate, cocoa butter, orange, walnuts, mango, flour, olive oil, water, yoghurt powder, oil, pork gelatin (halal on request), dextrose, glucose syrup, pectin, baking powder, salt, cinnamon, clove, nutmeg.',
    images: [
      `${CDN}/honeycomb-carrotcake-thepastrynl-m.jpg`,
      `${CDN}/honeycomb-carrotcake-topview-thepastrynl-m.jpg`,
      `${CDN}/honeycomb-carrotcake-cut-thepastrynl-m.jpg`,
      `${CDN}/honeycomb-carrotcake-sideview-thepastrynl-m.jpg`,
    ],
  },
  {
    id: 2,
    name: 'Rosebox Cake',
    category: 'Signature Cake',
    tag: 'Most Loved',
    price: 129.00,
    shortDesc:
      'Roses speak of love in a silent language known only to the heart. Beautiful and delicious roses made of luxurious crème-brûlée, enhanced with raspberry jelly and mousse, an indulgent lychee mousse, all seated on a delicious sponge cake base.',
    specs: [
      { label: 'Weight',    value: '1.6 kg' },
      { label: 'Portions',  value: '12–16 people' },
      { label: 'Size',      value: '20 × 20 × 6 cm' },
      { label: 'Shelf life',value: '2 days (fridge)' },
    ],
    allergens: 'Gluten, milk, eggs',
    ingredients:
      'Cream, raspberries, sugar, lychee, rose water, eggs, white chocolate, cocoa butter, milk, flour, cherries, pork gelatin (halal on request), butter, inulin, food coloring.',
    images: [
      `${CDN}/rozentaart-cake-frambozentaart-lycheetaart-1.jpeg`,
      `${CDN}/rozentaart-cake-frambozentaart-lycheetaart-3.jpeg`,
      `${CDN}/rozentaart-cake-frambozentaart-2.jpeg`,
      `${CDN}/Mobile-Rosebox-side.jpg`,
    ],
  },
  {
    id: 3,
    name: 'Mondriaan Chocolate Cake',
    category: 'Signature Cake',
    tag: 'Chocolate Lover',
    price: 118.00,
    shortDesc:
      '"The surface of things gives pleasure, their inside gives life." — Piet Mondriaan. A tantalising mixture of milk and dark chocolate cremeux with chocolate mousse, all sat on a delicious sponge base.',
    specs: [
      { label: 'Weight',    value: '1.4 kg' },
      { label: 'Portions',  value: '12–16 people' },
      { label: 'Size',      value: '19 × 19 × 5 cm' },
      { label: 'Shelf life',value: '3 days (fridge)' },
    ],
    allergens: 'Milk, nuts, eggs',
    ingredients:
      'Cream, chocolate 33%, eggs, chocolate 70%, milk, sugar, white chocolate, cocoa butter, oil, almond flour, cocoa powder, pork gelatin (halal on request), glucose syrup, baking powder.',
    images: [
      `${CDN}/mondriaan-cake-chocoladetaart-1.jpeg`,
      `${CDN}/mondriaan-cake-chocoladetaart-3.jpeg`,
      `${CDN}/mondriaan-cake-chocoladetaart-mobile-2.jpeg`,
      `${CDN}/mondriaan-cake-chocoladetaart-1.jpeg`,
    ],
  },
  {
    id: 4,
    name: 'Triangles Lime Cake',
    category: 'Signature Cake',
    tag: 'Refreshing',
    price: 76.00,
    shortDesc:
      'Creativity arises from the ability to see things from many angles. Marshmallow mousse combined with lemon zest, green basil mousse, a mouth-watering lime-basil jelly, and a crunchy almond praline layer — all on a sumptuous cake base.',
    specs: [
      { label: 'Weight',    value: '1 kg' },
      { label: 'Portions',  value: '9 people' },
      { label: 'Size',      value: '19 × 19 × 5 cm' },
      { label: 'Shelf life',value: '2 days (fridge)' },
    ],
    allergens: 'Gluten, milk, nuts, eggs',
    ingredients:
      'Cream, sugar, eggs, water, basil, lime, white chocolate, cocoa butter, cream cheese, almond flour, lemon juice, glucose syrup, butter, praline, pork gelatin, flour, almond petals, pectin, lemon, food coloring.',
    images: [
      `${CDN}/driehoeken-cake-limoentaart-verjaardagstaart-taart-bestellen-1.jpeg`,
      `${CDN}/driehoeken-cake-limoentaart-verjaardagstaart-taart-bestellen-3.jpeg`,
      `${CDN}/driehoeken-cake-limoentaart-verjaardagstaart-taart-bestellen-2.jpeg`,
      `${CDN}/Mobile-Triangles-side.jpg`,
    ],
  },
]

export default products
