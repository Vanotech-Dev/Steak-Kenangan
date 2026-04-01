export const menuCategories = [
  { id: 'semua', name: 'Semua', icon: '🍽️' },
  { id: 'steak', name: 'Steak', icon: '🥩' },
  { id: 'rice-holic', name: 'Rice Holic', icon: '🍚' },
  { id: 'pasta', name: 'Pasta & Noodle', icon: '🍝' },
  { id: 'light-meal', name: 'Light Meal', icon: '🍟' },
  { id: 'drinks', name: 'Minuman', icon: '🥤' },
  { id: 'coffee', name: 'Coffee', icon: '☕' },
];

export const menuData = [
  // Steak
  { id: 's1', categoryId: 'steak', name: 'Chicken Steak Crispy', price: 23000, isBestSeller: false, isPremium: false, image: null, description: 'Ayam fillet krispi dengan bumbu rempah rahasia.' },
  { id: 's2', categoryId: 'steak', name: 'Chicken Double Steak Crispy', price: 30000, isBestSeller: true, isPremium: false, image: null, description: 'Dua potong ayam fillet krispi dengan bumbu rempah rahasia.' },
  { id: 's3', categoryId: 'steak', name: 'Beef Steak Grill', price: 38000, isBestSeller: true, isPremium: false, image: null, description: 'Daging sapi pilihan dengan tekstur lembut dan aroma grill yang khas.' },
  { id: 's4', categoryId: 'steak', name: 'Beef Double Steak Grill', price: 60000, isBestSeller: false, isPremium: true, image: null, description: 'Dua potong sirloin pilihan yang dipanggang dengan api membara, disajikan dengan saus spesial.' },
  { id: 's5', categoryId: 'steak', name: 'Beef Steak Crispy', price: 28000, isBestSeller: true, isPremium: false, image: null, description: 'Daging sapi berbalut tepung krispi.' },
  { id: 's6', categoryId: 'steak', name: 'Chicken Steak Grill', price: 28000, isBestSeller: false, isPremium: false, image: null, description: 'Ayam panggang dengan bumbu khas Steak Kenangan.' },

  // Rice Holic
  { id: 'r1', categoryId: 'rice-holic', name: 'Chicken Cordonbleu + Nasi', price: 25000, isBestSeller: false, isPremium: false, image: null },
  { id: 'r2', categoryId: 'rice-holic', name: 'Chicken Eggroll + Nasi', price: 23000, isBestSeller: false, isPremium: false, image: null },
  { id: 'r3', categoryId: 'rice-holic', name: 'Chicken Katsu + Nasi', price: 23000, isBestSeller: false, isPremium: false, image: null },
  { id: 'r4', categoryId: 'rice-holic', name: 'Spicy Korean Chicken Wings + Nasi', price: 23000, isBestSeller: false, isPremium: false, image: null },
  { id: 'r5', categoryId: 'rice-holic', name: 'Chicken Teriyaki + Nasi', price: 25000, isBestSeller: false, isPremium: false, image: null },
  { id: 'r6', categoryId: 'rice-holic', name: 'Beef Teriyaki + Nasi', price: 30000, isBestSeller: false, isPremium: false, image: null },
  { id: 'r7', categoryId: 'rice-holic', name: 'Pindang Iga + Nasi', price: 40000, isBestSeller: false, isPremium: false, image: null },
  { id: 'r8', categoryId: 'rice-holic', name: 'Nasi Goreng Kenangan', price: 20000, isBestSeller: false, isPremium: false, image: null },
  { id: 'r9', categoryId: 'rice-holic', name: 'Nasi Putih', price: 5000, isBestSeller: false, isPremium: false, image: null },

  // Pasta & Noodle
  { id: 'pn1', categoryId: 'pasta', name: 'Spaghetti Bolognase', price: 25000, isBestSeller: false, isPremium: false, image: null },
  { id: 'pn2', categoryId: 'pasta', name: 'Fettucini Carbonara', price: 25000, isBestSeller: false, isPremium: false, image: null },
  { id: 'pn3', categoryId: 'pasta', name: 'Korean Noodle Chicken', price: 20000, isBestSeller: false, isPremium: false, image: null },

  // Light Meal
  { id: 'lm1', categoryId: 'light-meal', name: 'French Fries', price: 15000, isBestSeller: false, isPremium: false, image: null },
  { id: 'lm2', categoryId: 'light-meal', name: 'French Fries Sausage', price: 25000, isBestSeller: false, isPremium: false, image: null },
  { id: 'lm3', categoryId: 'light-meal', name: 'Potato Wedges', price: 15000, isBestSeller: false, isPremium: false, image: null },
  { id: 'lm4', categoryId: 'light-meal', name: 'Cireng (5pcs)', price: 15000, isBestSeller: false, isPremium: false, image: null },
  { id: 'lm5', categoryId: 'light-meal', name: 'Risoles (4pcs)', price: 16000, isBestSeller: false, isPremium: false, image: null },
  { id: 'lm6', categoryId: 'light-meal', name: 'Puding Caramel', price: 10000, isBestSeller: false, isPremium: false, image: null },
  { id: 'lm7', categoryId: 'light-meal', name: 'Puding Leci', price: 10000, isBestSeller: false, isPremium: false, image: null },
  { id: 'lm8', categoryId: 'light-meal', name: 'Pisang Crispy Coklat Keju', price: 15000, isBestSeller: false, isPremium: false, image: null },
  { id: 'lm9', categoryId: 'light-meal', name: 'Pisang Crispy Coklat Greentea', price: 15000, isBestSeller: false, isPremium: false, image: null },

  // Drinks (Drink & Sweets)
  { id: 'd1', categoryId: 'drinks', name: 'Ice/Hot Tea', price: 5000, isBestSeller: false, isPremium: false, image: null },
  { id: 'd2', categoryId: 'drinks', name: 'Ice/Hot Jeruk', price: 9000, isBestSeller: false, isPremium: false, image: null },
  { id: 'd3', categoryId: 'drinks', name: 'Blackcurent', price: 10000, isBestSeller: false, isPremium: false, image: null },
  { id: 'd4', categoryId: 'drinks', name: 'Lemon Tea', price: 10000, isBestSeller: false, isPremium: false, image: null },
  { id: 'd5', categoryId: 'drinks', name: 'Matcha Greentea', price: 13000, isBestSeller: false, isPremium: false, image: null },
  { id: 'd6', categoryId: 'drinks', name: 'Taro', price: 13000, isBestSeller: false, isPremium: false, image: null },
  { id: 'd7', categoryId: 'drinks', name: 'Redvelvet', price: 13000, isBestSeller: false, isPremium: false, image: null },
  { id: 'd8', categoryId: 'drinks', name: 'Caramel', price: 13000, isBestSeller: false, isPremium: false, image: null },
  { id: 'd9', categoryId: 'drinks', name: 'Air Mineral', price: 5000, isBestSeller: false, isPremium: false, image: null },
  { id: 'd10', categoryId: 'drinks', name: 'Brown Sugar', price: 15000, isBestSeller: false, isPremium: false, image: null },
  { id: 'd11', categoryId: 'drinks', name: 'Ice/Hot Chocolate', price: 15000, isBestSeller: false, isPremium: false, image: null },
  { id: 'd12', categoryId: 'drinks', name: 'Milk Regal Banana', price: 15000, isBestSeller: false, isPremium: false, image: null },
  { id: 'd13', categoryId: 'drinks', name: 'Milk Regal Hazelnut', price: 15000, isBestSeller: false, isPremium: false, image: null },
  { id: 'd14', categoryId: 'drinks', name: 'Milk Regal Rum', price: 15000, isBestSeller: false, isPremium: false, image: null },
  { id: 'd15', categoryId: 'drinks', name: 'Milk Regal Vanila', price: 15000, isBestSeller: false, isPremium: false, image: null },
  { id: 'd16', categoryId: 'drinks', name: 'Milk Regal Caramel', price: 15000, isBestSeller: false, isPremium: false, image: null },
  { id: 'd17', categoryId: 'drinks', name: 'Blue Ocean', price: 15000, isBestSeller: false, isPremium: false, image: null },
  { id: 'd18', categoryId: 'drinks', name: 'Rainbow', price: 15000, isBestSeller: false, isPremium: false, image: null },
  { id: 'd19', categoryId: 'drinks', name: 'Tropical Drink', price: 15000, isBestSeller: false, isPremium: false, image: null },
  { id: 'd20', categoryId: 'drinks', name: 'Lyches Sweet Tea', price: 15000, isBestSeller: false, isPremium: false, image: null },
  { id: 'd21', categoryId: 'drinks', name: 'Leci Squash', price: 15000, isBestSeller: false, isPremium: false, image: null },
  { id: 'd22', categoryId: 'drinks', name: 'Orange Squash', price: 15000, isBestSeller: false, isPremium: false, image: null },

  // Coffee
  { id: 'c1', categoryId: 'coffee', name: 'Black Coffee', price: 10000, isBestSeller: false, isPremium: false, image: null },
  { id: 'c2', categoryId: 'coffee', name: 'Milk Coffee', price: 12000, isBestSeller: false, isPremium: false, image: null },
  { id: 'c3', categoryId: 'coffee', name: 'Coffee Latte Banana', price: 15000, isBestSeller: false, isPremium: false, image: null },
  { id: 'c4', categoryId: 'coffee', name: 'Coffee Latte Hazelnut', price: 15000, isBestSeller: false, isPremium: false, image: null },
  { id: 'c5', categoryId: 'coffee', name: 'Coffee Latte Rum', price: 15000, isBestSeller: false, isPremium: false, image: null },
  { id: 'c6', categoryId: 'coffee', name: 'Coffee Latte Vanila', price: 15000, isBestSeller: false, isPremium: false, image: null },
  { id: 'c7', categoryId: 'coffee', name: 'Coffee Latte Caramel', price: 15000, isBestSeller: false, isPremium: false, image: null },
  { id: 'c8', categoryId: 'coffee', name: 'Cappucino', price: 15000, isBestSeller: false, isPremium: false, image: null },
  { id: 'c9', categoryId: 'coffee', name: 'Mochacino', price: 15000, isBestSeller: false, isPremium: false, image: null }
];
