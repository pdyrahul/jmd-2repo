import { srvc1, srvc2, wheel1, wheel2,  mrf, bridge,ceat, jktyre } from "../assets/images";
// Directly use the imported variables
export const Tabimages = [
  { src: srvc1, alt: 'Description of image1' },
  { src: srvc2, alt: 'Description of image2' },

  { src: srvc1, alt: 'Description of image1' },
  { src: srvc2, alt: 'Description of image2' }
];
//  For Review 
export const reviewData = [
  {
    name: 'John Doe',
    review: 'Great service! Highly recommend.Absolutely loved it! Amazing quality and service.Great service! Highly recommend.',
    img: "https://picsum.photos/600/600"
  },
  {
    name: 'Jane Smith',
    review: 'The experience was fantastic, will come back again.Great service! Highly recommend.The experience was fantastic, will come back again.',
    img: "https://picsum.photos/600/601"
  },
  {
    name: 'Alice Johnson',
    review: 'Absolutely loved it! Amazing quality and service.Great service! Highly recommend.The experience was fantastic, will come back again.',
    img: "https://picsum.photos/600/602"
  }
];
export const serviceCards = [
  {
    src: wheel1, 
    alt: 'Description of image1',
    title: 'Wheel Balancing'
  },
  {
    src: wheel2, 
    alt: 'Description of image2',
    title: 'Wheel Alignment'
  },
  // Add more services as needed
];
// Export brands data with dynamic URLs
export const brands = [
  { src: mrf, name: 'MRF Tyres', url: '' },
  { src: ceat, name: 'CEAT Tyres', url: '' },
  { src: bridge, name: 'Goodyear Tyres', url: '' },
  { src: jktyre, name: 'Apollo Tyres', url: '' },
  { src: ceat, name: 'CEAT Tyres', url: '' },
  { src: bridge, name: 'Goodyear Tyres', url: '' },
 
];