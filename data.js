var mobiles = [
  {
    name: "Samsung S23",
    price: 19999,
    img: "Samsung S23.jpg",
    description: "Display: 6.5-inch Super AMOLED, Processor: Exynos 980, RAM: 6GB, Storage: 128GB, Camera: 48MP + 8MP + 5MP, Battery: 4000mAh"
  },
  {
    name: "Apple iPhone 14",
    price: 55559,
    img: "Apple iPhone 14.jpg",
    description: "Display: 6.1-inch Retina XDR, Processor: A15 Bionic, RAM: 4GB, Storage: 128GB, Camera: 12MP + 12MP, Battery: 3400mAh"
  },
  {
    name: "OnePlus 11T Pro",
    price: 88896,
    img: "OnePlus 11T Pro.jpg",
    description: "Display: 6.67-inch Fluid AMOLED, Processor: Snapdragon 888, RAM: 8GB, Storage: 128GB, Camera: 50MP + 16MP + 8MP, Battery: 4500mAh"
  },
  {
    name: "Oppo Find X5",
    price: 98852,
    img: "Oppo Find X5.jpg",
    description: "Display: 6.8-inch AMOLED, Processor: Snapdragon 895, RAM: 12GB, Storage: 256GB, Camera: 108MP + 20MP + 12MP, Battery: 5000mAh"
  },
  {
    name: "Vivo X80 Pro",
    price: 55587,
    img: "Vivo X80 Pro.jpg",
    description: "Display: 6.6-inch OLED, Processor: MediaTek Dimensity 1200, RAM: 8GB, Storage: 256GB, Camera: 64MP + 8MP + 2MP, Battery: 4200mAh"
  },
  {
    name: "Xiaomi 12 Pro",
    price: 36366,
    img: "Xiaomi 12 Pro.jpg",
    description: "Display: 6.55-inch AMOLED, Processor: Snapdragon 870, RAM: 6GB, Storage: 128GB, Camera: 50MP + 8MP + 5MP, Battery: 4000mAh"
  },  
  {
    name: "Realme GT 2",
    price: 66666,
    img: "Realme GT 2.jpg",
    description: "Display: 6.43-inch Super AMOLED, Processor: MediaTek Dimensity 1200, RAM: 12GB, Storage: 256GB, Camera: 64MP + 8MP + 2MP, Battery: 4500mAh"
  },
  {
    name: "Poco F4 GT",
    price: 85462,
    img: "Poco F4 GT.jpg",
    description: "Display: 6.67-inch AMOLED, Processor: MediaTek Dimensity 1200, RAM: 8GB, Storage: 128GB, Camera: 64MP + 8MP + 2MP, Battery: 5065mAh"
  }
];
var laptops = [
  {
    name: "Apple MacBook Pro",
    price: 19999,
    img: "Apple MacBook Pro.jpg",
    description: "Display: 13.3-inch Retina Display, Processor: Apple M1, RAM: 8GB, Storage: 256GB SSD, Graphics: Integrated GPU, Battery: Up to 20 hours"
  },
  {
    name: "Dell XPS 15",
    price: 55559,
    img: "Dell XPS 15.jpg",
    description: "Display: 15.6-inch 4K UHD+ Touchscreen, Processor: Intel Core i7-11800H, RAM: 16GB, Storage: 512GB SSD, Graphics: NVIDIA GeForce RTX 3050 Ti, Battery: Up to 12 hours"
  },
  {
    name: "HP Spectre x360",
    price: 88896,
    img: "HP Spectre x360.jpg",
    description: "Display: 13.3-inch 4K UHD OLED Touchscreen, Processor: Intel Core i7-1165G7, RAM: 16GB, Storage: 1TB SSD, Graphics: Intel Iris Xe, Battery: Up to 11 hours"
  },
  {
    name: "Lenovo ThinkPad X1",
    price: 98852,
    img: "Lenovo ThinkPad X1.jpg",
    description: "Display: 14-inch 2K IPS Display, Processor: Intel Core i7-1185G7, RAM: 16GB, Storage: 512GB SSD, Graphics: Intel Iris Xe, Battery: Up to 15 hours"
  },
  {
    name: "Asus ZenBook",
    price: 55587,
    img: "Asus ZenBook.jpg",
    description: "Display: 14-inch Full HD NanoEdge Display, Processor: Intel Core i5-1135G7, RAM: 8GB, Storage: 512GB SSD, Graphics: Intel Iris Xe, Battery: Up to 10 hours"
  },
  {
    name: "Microsoft Surface Laptop",
    price: 36366,
    img: "Microsoft Surface Laptop.jpg",
    description: "Display: 13.5-inch PixelSense Touchscreen, Processor: Intel Core i5-1135G7, RAM: 8GB, Storage: 256GB SSD, Graphics: Intel Iris Xe, Battery: Up to 11.5 hours"
  },
  {
    name: "Acer Swift 3",
    price: 66666,
    img: "Acer Swift 3.jpg",
    description: "Display: 14-inch Full HD IPS Display, Processor: AMD Ryzen 7 5700U, RAM: 8GB, Storage: 512GB SSD, Graphics: AMD Radeon Graphics, Battery: Up to 10 hours"
  },
  {
    name: "ASUS VivoBook 15",
    price: 85462,
    img: "ASUS VivoBook 15.jpg",
    description: "Display: 15.6-inch Full HD Display, Processor: AMD Ryzen 5 5500U, RAM: 8GB, Storage: 512GB SSD, Graphics: Integrated GPU, Battery: Up to 8 hours"
  }
];

  var accessories = [
    {
      name: "Sony Headphones",
      price: 19999,
      img: "Sony Headphones.jpg",
      description: "Premium over-ear headphones with noise-canceling technology. Impedance: 32 ohms. Frequency Response: 4Hz to 40kHz. Battery life: up to 30 hours."
    },
    {
      name: "Bose Headphones",
      price: 55559,
      img: "Bose Headphones.jpg",
      description: "Wireless noise-canceling headphones with Alexa voice control. Impedance: 32 ohms. Frequency Response: 20Hz to 20kHz. Battery life: up to 20 hours."
    },
    {
      name: "Sennheiser Earbuds",
      price: 88896,
      img: "Sennheiser Earbuds.jpg",
      description: "True wireless earbuds with active noise cancellation. Impedance: 28 ohms. Frequency Response: 5Hz to 21kHz. Battery life: up to 8 hours (24 hours with charging case)."
    },
    {
      name: "Logitech HD Webcam",
      price: 98852,
      img: "Logitech HD Webcam.jpg",
      description: "High-definition webcam with 1080p resolution. Built-in dual stereo microphones. Adjustable clip fits various screen sizes. Compatible with popular video conferencing platforms."
    },
    {
      name: "Anker Webcam",
      price: 55587,
      img: "Anker Webcam.jpg",
      description: "Full HD webcam with 2-megapixel sensor. 360-degree swivel for flexible positioning. Automatic low-light correction. Plug-and-play setup for easy installation."
    },
    {
      name: "Logitech Mouse",
      price: 36366,
      img: "Logitech Mouse.jpg",
      description: "Wired optical mouse with ergonomic design. DPI range: 800 to 1600. Programmable buttons for quick access to functions. Suitable for both left and right-handed users."
    },
    {
      name: "Razer Mouse",
      price: 66666,
      img: "Razer Mouse.jpg",
      description: "High-precision gaming mouse with customizable RGB lighting. DPI range: 100 to 16,000. Razer Optical Switches for fast response. 7 programmable buttons for gaming macros."
    },
    {
      name: "Logitech Keyboard",
      price: 85462,
      img: "Logitech Keyboard.jpg",
      description: "Full-size wired keyboard with comfortable typing experience. Spill-resistant design for added durability. Adjustable tilt legs for ergonomic typing position."
    },
  ];
  
    module.exports = {
        mobiles: mobiles,
        laptops: laptops,
        accessories: accessories,
        };