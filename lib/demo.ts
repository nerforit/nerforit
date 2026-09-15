export const products = [
  { id: "1", slug: "asus-vivobook-14", name: "ASUS Vivobook 14", spec: "Intel i5 / 8GB / 512GB SSD", price: 7500000, category: "Laptop", stock: 5, image: "/products/laptop.svg", rating: 4.8 },
  { id: "2", slug: "lenovo-ideapad-3", name: "Lenovo IdeaPad 3", spec: "Ryzen 5 / 8GB / 512GB SSD", price: 6800000, category: "Laptop", stock: 12, image: "/products/laptop-2.svg", rating: 4.7 },
  { id: "3", slug: "hp-pavilion-15", name: "HP Pavilion 15", spec: "Intel i5 / 8GB / 512GB SSD", price: 8200000, category: "Laptop", stock: 8, image: "/products/laptop-3.svg", rating: 4.8 },
  { id: "4", slug: "samsung-980-1tb", name: "Samsung 980 1TB", spec: "NVMe M.2 SSD", price: 1350000, category: "SSD", stock: 10, image: "/products/ssd.svg", rating: 4.9 },
  { id: "5", slug: "kingston-fury-16gb", name: "Kingston Fury 16GB", spec: "DDR4 3200MHz", price: 550000, category: "RAM", stock: 8, image: "/products/ram.svg", rating: 4.8 },
  { id: "6", slug: "asus-tuf-gaming-f15", name: "ASUS TUF Gaming F15", spec: "Ryzen 7 / 16GB / 1TB SSD", price: 13600000, category: "Laptop", stock: 4, image: "/products/laptop-4.svg", rating: 4.9 },
  { id: "7", slug: "logitech-k120", name: "Logitech K120", spec: "Wired Keyboard", price: 250000, category: "Accessories", stock: 15, image: "/products/keyboard.svg", rating: 4.7 },
  { id: "8", slug: "logitech-g402", name: "Logitech G402", spec: "Gaming Mouse", price: 500000, category: "Accessories", stock: 20, image: "/products/mouse.svg", rating: 4.8 },
  { id: "9", slug: "aoc-24-monitor", name: "AOC 24” Monitor", spec: "IPS / 75Hz", price: 1850000, category: "Monitor", stock: 11, image: "/products/monitor.svg", rating: 4.6 }
];

export const articles = [
  { id: "1", slug: "5-tips-merawat-laptop", title: "5 Tips Merawat Laptop Agar Tetap Awet", date: "12 Sep 2025", category: "Tips", image: "/products/article-laptop.svg" },
  { id: "2", slug: "kenapa-ssd-lebih-cepat", title: "Kenapa SSD Lebih Cepat dibanding HDD?", date: "9 Sep 2025", category: "Tech", image: "/products/article-ssd.svg" },
  { id: "3", slug: "panduan-memilih-laptop", title: "Panduan Memilih Laptop Sesuai Kebutuhan", date: "6 Sep 2025", category: "Guide", image: "/products/article-workspace.svg" }
];

export const services = [
  { title: "Laptop Repair", text: "Perbaikan laptop secara menyeluruh untuk berbagai kebutuhan.", icon: "laptop" },
  { title: "Upgrade", text: "Tingkatkan performa perangkat Anda dengan komponen yang tepat.", icon: "upgrade" },
  { title: "Maintenance", text: "Perawatan rutin untuk menjaga perangkat tetap optimal.", icon: "maintenance" }
];

export const formatIDR = (value: number) =>
  new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", maximumFractionDigits: 0 }).format(value);
