import { Books } from "./types/Books";

export const sampleBooks: Books[] = [
  {
    name: "Vendor of sweets",
    slug: "vendor of sweets",
    image: "/images/b1.jpg",
    category: "fiction",
    brand: "M.D.Gunasena",
    price: 750,
    countInStock: 10,
    description:
      "The book The vendor of Sweets is a great story of a simple man.",
    rating: 4.5,
    numReviews: 10,
  },
  {
    name: "Stories From Shakesphere",
    slug: "Longman",
    image: "/images/b2.jpg",
    category: "plays",
    brand: "M.D.Gunasena",
    price: 870,
    countInStock: 20,
    description:
      "The Merchant of Venice, A Midsummer Night's Dream, Hamlet and Julius Caesar are the two comedies and two tragedies in this collection.",
    rating: 4.8,
    numReviews: 8,
  },
  {
    name: "Desert Flower",
    slug: "Waris Dirie",
    image: "/images/b3.jpg",
    category: "Biography",
    brand: "GoodReads",
    price: 1050,
    countInStock: 5,
    description:
      "The Extraordinary Journey of a Desert Nomad is an autobiographical book written by Waris Dirie and Cathleen Miller, published in 1998",
    rating: 3.5,
    numReviews: 11,
  },
];
