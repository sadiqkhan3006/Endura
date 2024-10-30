import brand0logo from "../assets/brands/brand0/brand0logo.svg";
import brand0img1 from "../assets/brands/brand0/brand0img1.png";
import brand0img2 from "../assets/brands/brand0/brand0img2.png";
import brand0img3 from "../assets/brands/brand0/brand0img3.png";
import brand1logo from "../assets/brands/brand1/brand1logo.svg";
import brand1img1 from "../assets/brands/brand1/brand1img1.png";
import brand1img2 from "../assets/brands/brand1/brand1img2.png";
import brand1img3 from "../assets/brands/brand1/brand1img3.png";
const brands = [
  {
    id: 0,
    name: "Aeigis",
    logo: brand0logo,
    desc: "A trusted partner in natural wellness, offering safe supplements to support your overall health and vitality. ",
    instagram: "https://www.instagram.com/aeigisshots?igsh=bjJrN2gxanNxY2Zj",
    website: "https://aeigis.in/",
    products: [
      {
        id: 0,
        title: "Daily Detox Shot",
        img: brand0img1,
        link: "https://aeigis.in/products/aeigis-daily-detox-shot",
      },
      {
        id: 1,
        title: "Pre Workout Shot",
        img: brand0img2,
        link: "https://aeigis.in/products/aeigis-pre-workout-shot",
      },
      {
        id: 2,
        title: "Green Tea Tablets",
        img: brand0img3,
        link: "https://aeigis.in/products/aeigis-green-tea-tablets",
      },
    ],
  },
  {
    id: 1,
    name: "Hempbuti",
    logo: brand1logo,
    desc: "Whether you're an athlete, professional, senior, or simply seeking self-care, Hempbuti offers solutions for enhanced well-being.",
    instagram: "https://www.instagram.com/hempbuti/",
    website: "https://www.hempbuti.in/",
    products: [
      {
        id: 0,
        title: "Ritual Oil",
        img: brand1img1,
        link: "https://www.hempbuti.in/product-detail/ritual-oil-30-ml",
      },
      {
        id: 1,
        title: "Over-Parent Drops",
        img: brand1img2,
        link: "https://www.hempbuti.in/product-detail/over-parent-supplement-drops-30-ml-for-small-pets",
      },
      {
        id: 2,
        title: "Rx Migraine Aid",
        img: brand1img3,
        link: "https://www.hempbuti.in/product-detail/rx-migraine-aid-30-ml",
      },
    ],
  },
];

export default brands;
