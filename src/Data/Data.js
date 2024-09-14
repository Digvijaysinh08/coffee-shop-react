import Img2 from "../assets/home.png";

export const menu = [
  {
    id: 1,
    name: "Home",
    link: "/#"
  },
  {
    id: 2,
    name: "About",
    link: "/#about"
  },
  {
    id: 3,
    name: "Services",
    link: "/#services"
  },
  {
    id: 4,
    name: "Contact",
    link: "/#contact"
  }
];

export const ServicesData = [
  {
    id: 1,
    img: Img2,
    name: "Espresso",
    description:
      "Espresso is a rich, bold coffee made by forcing a small amount of nearly boiling water through finely-ground coffee beans. Known for its intense flavor and crema, it's the base for many other popular coffee drinks like cappuccinos and lattes.",
    aosDelay: "100"
  },
  {
    id: 2,
    img: Img2,
    name: "Americano",
    description:"Americano is a smooth coffee made by diluting a shot of espresso with hot water. It has a similar strength to drip coffee but with a rich espresso flavor and less intensity.",
    aosDelay: "300"
  },
  {
    id: 3,
    img: Img2,
    name: "Cappuccino",
    description:"Cappuccino is a popular coffee drink made with equal parts espresso, steamed milk, and frothed milk. It offers a balanced flavor, combining the boldness of espresso with the creamy texture of milk foam.",
    aosDelay: "500"
  }
];

export const ClientData = [
  {
    id: 1,
    name: "Ishita",
    text: "The Cozy Brew Coffeehouse is a hidden gem! Their coffee is fantastic, and the pastries are always fresh. The ambiance is perfect for relaxing or catching up with friends.",
    img: "https://passport-photo.online/images/cms/prepare_light_b364e3ec37.webp?quality=80&format=webp&width=1920"
  },
  {
    id: 2,
    name: "Arjun",
    text: "Great spot for coffee lovers! The baristas are friendly, and the coffee is top-notch. The atmosphere is cozy, making it an ideal place to work or chill. Their croissants are a must-try!",
    img: "https://d38b044pevnwc9.cloudfront.net/cutout-nuxt/home/9-change.jpg"
  },
  {
    id: 3,
    name: "Sophia",
    text: "Love The Cozy Brew! The coffee is rich and flavorful, and the staff is always welcoming. The vibe is relaxed, and their commitment to sustainability is a big plus.",
    img: "https://thumbs.dreamstime.com/b/passport-picture-businesswoman-brown-hair-isolated-white-background-cut-out-49602875.jpg"
  },
  {
    id: 4,
    name: "Ananya",
    text: "Fantastic coffee and a cozy atmosphere make The Cozy Brew my go-to spot. Their pastries are delicious, and the service is always with a smile. Perfect for a coffee break!",
    img: "https://thumbs.dreamstime.com/b/passport-picture-smiling-turkish-businesswoman-isolated-white-background-cut-out-53095507.jpg"
  },
  {
    id: 5,
    name: "Aarav",
    text: "Wonderful café with excellent coffee and a comfortable setting. The almond croissant is amazing. Ideal for a quick coffee stop or a longer stay.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_U_j7E8JjJkZVjYiLg-wLx8Cq3NwOwlWl-g&s"
  }
];

export const MenuData = [
  {
    category: "Special Coffee",
    items: [
      { name: "Caramel Macchiato", price: "₹200" },
      { name: "Mocha", price: "₹220" },
      { name: "vanilla Latte", price: "₹210" },
      { name: "Affogato", price: "₹250" },
      { name: "Irish Coffee", price: "₹260" },
      { name: "Tiramisu Latte", price: "₹230" },
      { name: "Matcha Latte", price: "₹220" }
    ]
  },
  {
    category: "Iced Coffee",
    items: [
      { name: "Iced Americano", price: "₹140" },
      { name: "Iced Latte", price: "₹160" },
      { name: "Cold Brew", price: "₹190" },
      { name: "Iced Mocha", price: "₹180" },
      { name: "Iced Caramel Latte", price: "₹200" },
      { name: "Iced Vanilla Latte", price: "₹180" },
      { name: "Iced Nitro Coffee", price: "₹200" }
    ]
  },
  {
    category: "Sandwiches",
    items: [
      { name: "Grilled Cheese", price: "₹150" },
      { name: "Turkey Club", price: "₹180" },
      { name: "Veggie Wrap", price: "₹160" },
      { name: "Chicken Panini", price: "₹200" },
      { name: "BLT Sandwich", price: "₹170" },
      { name: "Caprese Sandwich ", price: "₹260" },
      { name: "Pulled Pork Sandwich", price: "₹280" }
    ]
  },
  {
    category: "Desserts",
    items: [
      { name: "Chocolate Lava Cake", price: "₹180" },
      { name: "Tiramisu", price: "₹200" },
      { name: "Cheesecake", price: "₹220" },
      { name: "Brownie Sundae", price: "₹190" },
      { name: "Apple Pie", price: "₹210" }
    ]
  },
  {
    category: "Tea",
    items: [
      { name: "Masala Chai", price: "₹80" },
      { name: "Green Tea", price: "₹90" },
      { name: "Earl Grey Tea", price: "₹100" },
      { name: "English Breakfast Tea", price: "₹110" },
      { name: "Chamomile Tea", price: "₹100" }
    ]
  },
  {
    category: "Snack",
    items: [
      { name: "Hot Dog", price: "₹150" },
      { name: "Garlic Bread", price: "₹120" },
      { name: "Patties", price: "₹50" },
      { name: "Garlic Salami ", price: "₹180" },
      { name: "Cheese Sticks ", price: "₹140" }
    ]
  }
];
