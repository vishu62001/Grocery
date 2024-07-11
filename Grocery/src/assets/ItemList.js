

const ItemList = [
    { id: 1, name: 'Apple', category: 'Fruits', price: 150, imageUrl: 'https://www.bigbasket.com/media/uploads/p/m/40128384_4-fresho-apple-pink-lady.jpg?tr=w-1920,q=80', description: 'A sweet, crisp fruit perfect for snacking.' },
    { id: 2, name: 'Bread', category: 'Bakery', price: 45, imageUrl: 'https://www.bigbasket.com/media/uploads/p/m/40162924_6-britannia-100-whole-wheat-bread.jpg?tr=w-1920,q=80', description: 'Freshly baked bread, perfect for sandwiches and toast.' },
    { id: 3, name: 'Milk', category: 'Dairy', price: 60, imageUrl: 'https://www.bigbasket.com/media/uploads/p/m/40147597_7-heritage-daily-health-toned-milk.jpg?tr=w-1920,q=80', description: 'Rich and creamy milk, essential for a balanced diet.' },
    { id: 4, name: 'Banana', category: 'Fruits', price: 60, imageUrl: 'https://www.bigbasket.com/media/uploads/p/m/40179390_6-fresho-baby-banana-robusta.jpg?tr=w-1920,q=80', description: 'A ripe, sweet banana, ideal for a quick energy boost.' },
    { id: 5, name: 'Carrot', category: 'Vegetables', price: 45, imageUrl: 'https://www.bigbasket.com/media/uploads/p/m/10000381_10-fresho-carrot-red.jpg?tr=w-1920,q=80', description: 'Crunchy and sweet, great for snacking and cooking.' },
    { id: 6, name: 'Chicken Breast', category: 'Meat', price: 180, imageUrl: 'https://www.bigbasket.com/media/uploads/p/m/10001001_7-fresho-chicken-breast-boneless-antibiotic-residue-free.jpg?tr=w-1920,q=80', description: 'Lean and protein-rich chicken breast, perfect for healthy meals.' },
    { id: 7, name: 'Cheese', category: 'Dairy', price: 200, imageUrl: 'https://www.bigbasket.com/media/uploads/p/m/40109320_6-amul-cheese-cubes.jpg?tr=w-1920,q=80', description: 'Delicious cheese, ideal for sandwiches, snacks, and cooking.' },
    { id: 8, name: 'Orange Juice', category: 'Beverages', price: 65, imageUrl: 'https://www.bigbasket.com/media/uploads/p/m/1203207_1-tropicana-100-orange-juice.jpg?tr=w-1920,q=80', description: 'Freshly squeezed orange juice, packed with vitamin C.' },
    { id: 9, name: 'Yogurt', category: 'Dairy', price: 20, imageUrl: 'https://www.bigbasket.com/media/uploads/p/m/40276320_1-milky-mist-skyr-plain-yogurt-high-in-protein-low-fat.jpg?tr=w-1920,q=80', description: 'Creamy yogurt, great for breakfast or a healthy snack.' },
    { id: 10, name: 'Pasta', category: 'Pantry', price: 90, imageUrl: 'https://www.bigbasket.com/media/uploads/p/m/1212729_2-borges-durum-wheat-pasta-fusilli.jpg?tr=w-1920,q=80', description: 'Versatile pasta, perfect for a variety of dishes.' },
    { id: 11, name: 'Tomato', category: 'Vegetables', price: 30, imageUrl: 'https://www.bigbasket.com/media/uploads/p/m/40130385_5-fresho-tomato-local-organically-grown.jpg?tr=w-1920,q=80', description: 'Juicy and ripe tomatoes, great for salads and cooking.' },
    { id: 12, name: 'Potato', category: 'Vegetables', price: 20, imageUrl: 'https://www.bigbasket.com/media/uploads/p/m/40047637_4-fresho-potato-chandramukhi-organically-grown.jpg?tr=w-1920,q=80', description: 'Versatile potatoes, ideal for a variety of recipes.' },
    { id: 13, name: 'Salmon', category: 'Meat', price: 170, imageUrl: 'https://www.bigbasket.com/media/uploads/p/m/40169479_1-big-sams-norgwegian-salmon-portions-family-pack.jpg?tr=w-1920,q=80', description: 'Fresh salmon, rich in omega-3 fatty acids and great for grilling.' },
    { id: 14, name: 'Eggs', category: 'Dairy', price: 80, imageUrl:'https://www.bigbasket.com/media/uploads/p/m/1205939_1-fresho-eggs-brown.jpg?tr=w-1920,q=80', description: 'High-quality eggs, perfect for breakfast and baking.' },
    { id: 15, name: 'Butter', category: 'Dairy', price: 150, imageUrl: 'https://www.bigbasket.com/media/uploads/p/m/1202759_3-amul-butter-pasteurized.jpg?tr=w-1920,q=80', description: 'Rich and creamy butter, ideal for cooking and baking.' },
    { id: 16, name: 'Rice', category: 'Pantry', price: 100, imageUrl:'https://www.bigbasket.com/media/uploads/p/m/40075895_5-bb-royal-sona-masoori-rice-raw-rice-super-premium.jpg?tr=w-1920,q=80', description: 'Long-grain rice, perfect for a variety of dishes.' },
    { id: 17, name: 'Broccoli', category: 'Vegetables', price: 120, imageUrl: 'https://www.bigbasket.com/media/uploads/p/m/10000063_20-fresho-broccoli.jpg?tr=w-1920,q=80', description: 'Fresh broccoli, packed with nutrients and great for steaming.' },
    
    { id: 18, name: 'Grapes', category: 'Fruits', price: 200, imageUrl: 'https://www.bigbasket.com/media/uploads/p/m/20001009_11-fresho-grapes-bangalore-blue.jpg?tr=w-1920,q=80', description: 'Sweet and juicy grapes, great for snacking and salads.' },
    { id: 19, name: 'Almonds', category: 'Pantry', price: 400, imageUrl: 'https://www.bigbasket.com/media/uploads/p/m/40202556_3-super-saver-californian-almond.jpg?tr=w-1920,q=80', description: 'Crunchy almonds, perfect for snacking and baking.' },
    { id: 20, name: 'Spinach', category: 'Vegetables', price: 110, imageUrl: 'https://www.bigbasket.com/media/uploads/p/m/10000187_14-fresho-palak-cleaned-without-roots.jpg?tr=w-1920,q=80', description: 'Fresh spinach, great for salads and cooking.' },
    { id: 21, name: 'Orange', category: 'Fruits', price: 50, imageUrl: 'https://www.bigbasket.com/media/uploads/p/m/20000909_18-fresho-orange-imported.jpg?tr=w-1920,q=80', description: 'Juicy and sweet oranges, perfect for snacking and juicing.' },
    {
        "id": 22,
        "name": "Multivitamin Tablets",
        "category": "Healthcare",
        "price": 1299,
        "imageUrl": "https://www.bigbasket.com/media/uploads/p/l/40226412_2-healthkart-multivitamin-with-probiotics-for-immunity-gut-health-unflavoured.jpg",
        "description": "A daily multivitamin to support overall health and wellness."
      },
      {
        "id": 23,
        "name": "Vitamin C",
        "category": "Healthcare",
        "price": 899,
        "imageUrl": "https://www.bigbasket.com/media/uploads/p/m/40308576_3-garnier-bright-complete-30-x-vitamin-c-booster-serum.jpg?tr=w-1920,q=80",
        "description": "500mg of Vitamin C to support immune system health."
      },
      {
        "id": 24,
        "name": "Omega-3 Fish Oil",
        "category": "Healthcare",
        "price": 1599,
        "imageUrl": "https://www.bigbasket.com/media/uploads/p/m/40220190_6-wow-skin-science-omega-3-fish-oil-1000-mg-capsules-triple-strength.jpg?tr=w-1920,q=80",
        "description": "1000mg of Omega-3 Fish Oil to support heart health."
      },
      {
        "id": 25,
        "name": "Probiotic Capsules",
        "category": "Healthcare",
        "price": 1999,
        "imageUrl": "https://www.bigbasket.com/media/uploads/p/l/40265543_3-pure-nutrition-progut-probiotic-capsule-supports-gut-health-boosts-immunity.jpg",
        "description": "Daily probiotic supplement to support digestive and immune health."
      },
      {
        "id": 26,
        "name": "Calcium Tablets",
        "category": "Healthcare",
        "price": 1199,
        "imageUrl": "https://www.bigbasket.com/media/uploads/p/l/40227325_2-himalayan-organics-calcium-magnesium-zinc-d3-b12-tablets-for-healthy-bones.jpg",
        "description": "Calcium tablets with Vitamin D to support bone health."
      },
      {
        "id": 27,
        "name": "Harpic",
        "category": "Household Needs",
        "price": 599,
        "imageUrl": "https://www.bigbasket.com/media/uploads/p/m/1207190_10-harpic-original-disinfectant-toilet-cleaner-liquid.jpg?tr=w-1920,q=80",
        "description": "Disinfectant Toilet Cleaner Liquid - Original."
      },
      {
        "id": 28,
        "name": "Faultless",
        "category": "Household Needs",
        "price": 199,
        "imageUrl": "https://www.bigbasket.com/media/uploads/p/m/100229182_4-faultless-heavy-starch-lemon-fresh-scent.jpg?tr=w-1920,q=80",
        "description": "Ironing Spray Starch - Heavy Finish, Lemon Scent."
      },
      
]

export default ItemList