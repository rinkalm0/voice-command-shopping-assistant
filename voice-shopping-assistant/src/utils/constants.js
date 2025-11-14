// Product Categories
export const CATEGORIES = {
    DAIRY: 'Dairy',
    PRODUCE: 'Produce',
    MEAT: 'Meat & Seafood',
    BAKERY: 'Bakery',
    BEVERAGES: 'Beverages',
    SNACKS: 'Snacks',
    PERSONAL_CARE: 'Personal Care',
    HOUSEHOLD: 'Household',
    FROZEN: 'Frozen Foods',
    PANTRY: 'Pantry',
    OTHER: 'Other'
};

// Category Keywords for auto-categorization
export const CATEGORY_KEYWORDS = {
    [CATEGORIES.DAIRY]: ['milk', 'cheese', 'butter', 'yogurt', 'cream', 'paneer', 'dahi', 'ghee'],
    [CATEGORIES.PRODUCE]: ['apple', 'banana', 'orange', 'tomato', 'potato', 'onion', 'carrot', 'lettuce', 'spinach', 'fruit', 'vegetable', 'sabzi', 'aam', 'kela', 'tamatar', 'pyaz', 'aloo'],
    [CATEGORIES.MEAT]: ['chicken', 'beef', 'pork', 'fish', 'salmon', 'mutton', 'lamb', 'murga', 'machli'],
    [CATEGORIES.BAKERY]: ['bread', 'bun', 'cake', 'cookie', 'pastry', 'roti', 'pav', 'naan'],
    [CATEGORIES.BEVERAGES]: ['water', 'juice', 'soda', 'coffee', 'tea', 'beer', 'wine', 'cola', 'chai', 'pani'],
    [CATEGORIES.SNACKS]: ['chips', 'chocolate', 'candy', 'nuts', 'biscuit', 'namkeen', 'kurkure'],
    [CATEGORIES.PERSONAL_CARE]: ['soap', 'shampoo', 'toothpaste', 'deodorant', 'lotion', 'cream', 'powder', 'tel'],
    [CATEGORIES.HOUSEHOLD]: ['detergent', 'cleaner', 'tissues', 'paper', 'napkin', 'surf', 'vim', 'lizol'],
    [CATEGORIES.FROZEN]: ['ice cream', 'frozen', 'peas', 'pizza'],
    [CATEGORIES.PANTRY]: ['rice', 'flour', 'sugar', 'salt', 'oil', 'spice', 'pasta', 'chawal', 'atta', 'masala', 'namak', 'chini']
};

// Voice Commands Keywords
export const VOICE_COMMANDS = {
    ADD: ['add', 'buy', 'need', 'want', 'get', 'purchase', 'khareed', 'lena', 'chahiye'],
    REMOVE: ['remove', 'delete', 'cancel', 'hata', 'nikaal'],
    CLEAR: ['clear', 'empty', 'reset', 'sab hata', 'khali kar'],
    SHOW: ['show', 'display', 'list', 'dikha', 'batao'],
    SEARCH: ['search', 'find', 'look for', 'dhundh', 'khoj']
};

// Common Products Database
export const COMMON_PRODUCTS = [
    // Dairy
    { name: 'Milk', category: CATEGORIES.DAIRY, price: 60 },
    { name: 'Cheese', category: CATEGORIES.DAIRY, price: 120 },
    { name: 'Butter', category: CATEGORIES.DAIRY, price: 50 },
    { name: 'Yogurt', category: CATEGORIES.DAIRY, price: 40 },
    { name: 'Paneer', category: CATEGORIES.DAIRY, price: 80 },

    // Produce
    { name: 'Apples', category: CATEGORIES.PRODUCE, price: 150 },
    { name: 'Bananas', category: CATEGORIES.PRODUCE, price: 60 },
    { name: 'Tomatoes', category: CATEGORIES.PRODUCE, price: 40 },
    { name: 'Onions', category: CATEGORIES.PRODUCE, price: 30 },
    { name: 'Potatoes', category: CATEGORIES.PRODUCE, price: 25 },
    { name: 'Carrots', category: CATEGORIES.PRODUCE, price: 35 },

    // Bakery
    { name: 'Bread', category: CATEGORIES.BAKERY, price: 35 },
    { name: 'Buns', category: CATEGORIES.BAKERY, price: 40 },

    // Beverages
    { name: 'Water Bottle', category: CATEGORIES.BEVERAGES, price: 20 },
    { name: 'Orange Juice', category: CATEGORIES.BEVERAGES, price: 80 },
    { name: 'Coffee', category: CATEGORIES.BEVERAGES, price: 250 },
    { name: 'Tea', category: CATEGORIES.BEVERAGES, price: 150 },

    // Snacks
    { name: 'Chips', category: CATEGORIES.SNACKS, price: 20 },
    { name: 'Chocolate', category: CATEGORIES.SNACKS, price: 50 },
    { name: 'Cookies', category: CATEGORIES.SNACKS, price: 30 },
    { name: 'Biscuits', category: CATEGORIES.SNACKS, price: 25 },

    // Personal Care
    { name: 'Toothpaste', category: CATEGORIES.PERSONAL_CARE, price: 80 },
    { name: 'Soap', category: CATEGORIES.PERSONAL_CARE, price: 40 },
    { name: 'Shampoo', category: CATEGORIES.PERSONAL_CARE, price: 150 },

    // Household
    { name: 'Detergent', category: CATEGORIES.HOUSEHOLD, price: 200 },
    { name: 'Tissues', category: CATEGORIES.HOUSEHOLD, price: 60 },

    // Pantry
    { name: 'Rice', category: CATEGORIES.PANTRY, price: 50 },
    { name: 'Flour', category: CATEGORIES.PANTRY, price: 40 },
    { name: 'Sugar', category: CATEGORIES.PANTRY, price: 45 },
    { name: 'Salt', category: CATEGORIES.PANTRY, price: 20 },
    { name: 'Cooking Oil', category: CATEGORIES.PANTRY, price: 180 }
];

// Seasonal Products (Example - can be expanded)
export const SEASONAL_PRODUCTS = {
    WINTER: ['oranges', 'carrots', 'cauliflower', 'peas', 'hot chocolate'],
    SUMMER: ['mangoes', 'watermelon', 'cucumber', 'ice cream', 'cold drinks'],
    MONSOON: ['corn', 'pakora ingredients', 'tea', 'ginger'],
    SPRING: ['strawberries', 'asparagus', 'lettuce']
};

// Language Support
export const SUPPORTED_LANGUAGES = [
    { code: 'en-US', name: 'English (US)' },
    { code: 'en-GB', name: 'English (UK)' },
    { code: 'hi-IN', name: 'Hindi' },
    { code: 'es-ES', name: 'Spanish' },
    { code: 'fr-FR', name: 'French' },
    { code: 'de-DE', name: 'German' }
];

// Product Substitutes
export const SUBSTITUTES = {
    'milk': ['almond milk', 'soy milk', 'oat milk', 'coconut milk'],
    'butter': ['margarine', 'ghee', 'olive oil'],
    'sugar': ['honey', 'jaggery', 'stevia'],
    'bread': ['roti', 'tortilla', 'pita bread'],
    'chicken': ['tofu', 'paneer', 'mushrooms']
};

// Storage Keys
export const STORAGE_KEYS = {
    SHOPPING_LIST: 'shopping_list',
    SHOPPING_HISTORY: 'shopping_history',
    USER_PREFERENCES: 'user_preferences',
    LANGUAGE: 'selected_language'
};