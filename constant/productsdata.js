const products = [
    {
        id: "products1",
        url: 'https://rukminim1.flixcart.com/image/150/150/kapoo7k0/electric-kettle/p/6/s/pigeon-favourite-original-imafs7xhj5uwgrh4.jpeg?q=70',
        detailUrl: 'https://rukminim1.flixcart.com/image/416/416/kapoo7k0/electric-kettle/p/6/s/pigeon-favourite-original-imafs7xhj5uwgrh4.jpeg?q=70',
        title: {
            shortTitle: 'Home & Kitchen',
            longTitle: 'Pigeon FAVOURITE Electric Kettle  (1.5 L, Silver, Black)'
        },
        price: {
            mrp: 1195,
            cost: 625,
            discount: '47%'
        },
        description: 'This electric kettle from Pigeon will soon become a travelers best friend, a hostelite saviour and an answer to all the midnight cravings. With this handy appliance, you can boil water and use it to make instant noodles, packet soup, coffee and green tea.',
        discount: 'Extra 10% Off',
        tagline: 'Deal of the day'
    },
    {
        id: "products2",
        url: 'https://rukminim1.flixcart.com/image/416/416/kl6wx3k0/sandwich-maker/8/r/d/sandwich-01-flipkart-smartbuy-original-imagydds4zthxt8z.jpeg?q=70',
        detailUrl: 'https://rukminim1.flixcart.com/image/416/416/kl6wx3k0/sandwich-maker/8/r/d/sandwich-01-flipkart-smartbuy-original-imagydds4zthxt8z.jpeg?q=70',
        title: {
            shortTitle: 'Sandwich Makers',
            longTitle: 'Flipkart SmartBuy Sandwich 01 Grill  (Black)'
        },
        price: {
            mrp: 1499,
            cost: 899,
            discount: '40%'
        },
        description: 'This non-stick sandwich toaster .easy to use and very handy. Directly hold over flame to make tasty toasts and toasted sandwiches. Specially designed by keeping your needs in mind, the sandwich maker makes whatever youre doing simpler, smarter and better',
        discount: 'From 99+5% Off',
        tagline: 'Pestige, Nova & more'
    },
    {
        id: "products3",
        url: 'https://rukminim1.flixcart.com/image/150/150/kohigsw0/resistance-tube/c/s/e/new-adjustable-single-resistance-tube-multicolor-na-ajro-deal-original-imag2xg88mhmwxz5.jpeg?q=70',
        detailUrl: 'https://rukminim1.flixcart.com/image/416/416/kohigsw0/resistance-tube/c/s/e/new-adjustable-single-resistance-tube-multicolor-na-ajro-deal-original-imag2xg88mhmwxz5.jpeg?q=70',
        title: {
            shortTitle: 'Fitness Gear',
            longTitle: 'AJRO DEAL New Adjustable Single Resistance Tube (Multicolor) Resistance Tube  (Multicolor)'
        },
        price: {
            mrp: 499,
            cost: 166,
            discount: '66%'
        },
        description: 'This unique product can tone your back muscles, reduce belly fat, improve blood circulation and also improves your body posture. It increases the stamina, energy and vitality of the body. The elastic resistance of the rubber training rope can be used to train and exercise in whichever way you want, according to your physical needs.',
        discount: 'Upto 70% Off',
        tagline: 'Deal of the Day'
    },
    {
        id: "products4",
        url: 'https://rukminim1.flixcart.com/image/300/300/kll7bm80/smartwatch/c/1/n/43-mo-sw-sense-500-android-ios-molife-original-imagyzyycnpujyjh.jpeg?q=70',
        detailUrl: 'https://rukminim1.flixcart.com/image/416/416/kll7bm80/smartwatch/c/1/n/43-mo-sw-sense-500-android-ios-molife-original-imagyzyycnpujyjh.jpeg?q=70',
        title: {
            shortTitle: 'Smart Watches',
            longTitle: 'Molife Sense 500 Smartwatch  (Black Strap, Freesize)',
        },
        price: {
            mrp: 6999,
            cost: 4049,
            discount: '42%'
        },
        description: 'The Molife Sense 500, a brilliant smartwatch with a beautiful large display. Say hello to the infinity 1.7-inch display with 2.5D curved edges. Thanks to seamless Bluetooth 5.0 connectivity, you wont have to keep waiting. Bring a change to your outfit every day with changeable straps. A splash of color every day keeps the boredom away.',
        discount: 'Grab Now',
        tagline: 'Best Seller'
    },
    {
        id: "products5",
        url: 'https://rukminim1.flixcart.com/image/416/416/k3uhhu80/hair-dryer/n/m/t/nova-2800-w-professional-nhp-8220-original-imafmvwfhmzsxdrw.jpeg?q=70',
        detailUrl: 'https://rukminim1.flixcart.com/image/416/416/k3uhhu80/hair-dryer/n/m/t/nova-2800-w-professional-nhp-8220-original-imafmvwfhmzsxdrw.jpeg?q=70',
        title: {
            shortTitle: 'Trimmers, Dryers & more',
            longTitle: 'Nova Professional NHP 8220 Hair Dryer  (1800 W, Multicolor)'
        },
        price: {
            mrp: 1899,
            cost: 1124,
            discount: '40%'
        },
        description: '',
        discount: 'From ₹499',
        tagline: 'Kubra, Nova & more'
    },
    {
        id: "products6",
        url: 'https://m.media-amazon.com/images/I/61RJn0ofUsL._SL1500_.jpg',
        detailUrl: 'https://m.media-amazon.com/images/I/61x8BQ8-5wL._SL1500_.jpg',
        title: {
            shortTitle: 'Apple 2023 MacBook Pro (14-inch)',
            longTitle: 'Apple 2023 MacBook Pro (14-inch, M3 Pro chip with 12‑core CPU and 18‑core GPU, 18GB Unified Memory, 1TB) - Space Black'
        },
        price: {
            mrp: 211899,
            cost: 201124,
            discount: '40%'
        },
        description: '',
        discount: 'From ₹499',
        tagline: 'Mobiles, PC & more'
    },
    {
        id: "products7",
        url: 'https://m.media-amazon.com/images/I/71jG+e7roXL._SL1500_.jpg',
        detailUrl: 'https://m.media-amazon.com/images/I/71-6roO29AL._SL1500_.jpg',
        title: {
            shortTitle: 'Apple MacBook Air Laptop M1 chip',
            longTitle: 'Apple MacBook Air Laptop M1 chip, 13.3-inch/33.74 cm Retina Display, 8GB RAM, 256GB SSD Storage, Backlit Keyboard, FaceTime HD Camera, Touch ID. Works with iPhone/iPad; Space Grey'
        },
        price: {
            mrp: 111899,
            cost: 101124,
            discount: '40%'
        },
        description: '',
        discount: 'From ₹499',
        tagline: 'Mobiles, PC & more'
    },
    {
        id: "products8",
        url: 'https://m.media-amazon.com/images/I/81n8WL9e4xL._SL1500_.jpg',
        detailUrl: 'https://m.media-amazon.com/images/I/81n8WL9e4xL._SL1500_.jpg',
        title: {
            shortTitle: 'Honor 9X (Sapphire Blue, 4+128GB Storage)',
            longTitle: 'Honor 9X (Sapphire Blue, 4+128GB Storage)-Pop up Front Camera & 48MP Triple Rear Camera'
        },
        price: {
            mrp: 18899,
            cost: 17124,
            discount: '40%'
        },
        description: '',
        discount: 'From ₹499',
        tagline: 'Mobiles, PC & more'
    },
    {
        id: "products9",
        url: 'https://m.media-amazon.com/images/I/81c50PU+lpL._SL1500_.jpg',
        detailUrl: 'https://m.media-amazon.com/images/I/51hWMvjCV8L._SL1500_.jpg',
        title: {
            shortTitle: 'Apple iPhone 15 Pro Max ',
            longTitle: 'Apple iPhone 15 Pro Max (256 GB) - White Titanium  (1800 W, Multicolor)'
        },
        price: {
            mrp: 148900,
            cost: 151124,
            discount: '40%'
        },
        description: '',
        discount: 'From ₹499',
        tagline: 'Mobiles, PC & more'
    },
    {
        id: "products10",
        url: 'https://m.media-amazon.com/images/I/71tCOhEigtL._SL1500_.jpg',
        detailUrl: 'https://m.media-amazon.com/images/I/51FFP5U9NyL._SL1500_.jpg',
        title: {
            shortTitle: 'Redmi 12 5G Jade Black',
            longTitle: 'Redmi 12 5G Jade Black 6GB RAM 128GB ROM'
        },
        price: {
            mrp: 21899,
            cost: 25124,
            discount: '40%'
        },
        description: '',
        discount: 'From ₹499',
        tagline: 'Mobiles, PC & more'
    },
    {
        id: "products11",
        url: 'https://m.media-amazon.com/images/I/71VCUXk4ZkL._SL1500_.jpg',
        detailUrl: 'https://m.media-amazon.com/images/I/711cZY1+XPL._SL1500_.jpg',
        title: {
            shortTitle: 'Hisense 4K',
            longTitle: 'Hisense 164 cm (65 inches) 4K Ultra HD Smart QLED TV 65E7K (Black)'
        },
        price: {
            mrp: 23899,
            cost: 25124,
            discount: '40%'
        },
        description: '',
        discount: 'From ₹499',
        tagline: 'Mobiles, PC & more'
    },
    {
        id: "products12",
        url: 'https://m.media-amazon.com/images/I/81RHtiyppML._SX695_.jpg',
        detailUrl: 'https://m.media-amazon.com/images/I/81ZZibr9pLL._SY695_.jpg',
        title: {
            shortTitle: 'Nike Mens AIR 11',
            longTitle: 'Nike Mens AIR 11Nike Mens AIR 11 Hisense 164 cm (Black)'
        },
        price: {
            mrp: 8399,
            cost: 9124,
            discount: '40%'
        },
        description: '',
        discount: 'From ₹499',
        tagline: 'Clothing & more'
    },
    {
        id: "products13",
        url: 'https://m.media-amazon.com/images/I/71i4KiS2vBL._SX695_.jpg',
        detailUrl: 'https://m.media-amazon.com/images/I/71mUvyElKiL._SY695_.jpg',
        title: {
            shortTitle: 'Nike Men Air Zoom Vomero',
            longTitle: 'Nike Men Air Zoom Vomero 16 Low Top Running Shoes'
        },
        price: {
            mrp: 10899,
            cost: 11124,
            discount: '40%'
        },
        description: '',
        discount: 'From ₹499',
        tagline: 'Clothing & more'
    },
    {
        id: "products14",
        url: 'https://m.media-amazon.com/images/I/7102q4bLwFL._SX695_.jpg',
        detailUrl: 'https://m.media-amazon.com/images/I/71eUTVyblYL._SX695_.jpg',
        title: {
            shortTitle: 'Nike Mens React-Type GTX',
            longTitle: 'Nike Mens React-Type GTX Gore-tex Running Shoe'
        },
        price: {
            mrp: 10899,
            cost: 25124,
            discount: '40%'
        },
        description: '',
        discount: 'From ₹499',
        tagline: 'Clothing & more'
    },
    {
        id: "products15",
        url: 'https://m.media-amazon.com/images/I/71RwWau7+gL._SX695_.jpg',
        detailUrl: 'https://m.media-amazon.com/images/I/715t-p89vhL._SY695_.jpg',
        title: {
            shortTitle: 'NIKE Mens Air Winflo',
            longTitle: 'NIKE Mens Air Winflo 10 Running Shoe'
        },
        price: {
            mrp: 8899,
            cost: 9124,
            discount: '40%'
        },
        description: '',
        discount: 'From ₹499',
        tagline: 'Clothing & more'
    },
    {
        id: "products16",
        url: 'https://m.media-amazon.com/images/I/61S3zXE1ZmL._SY695_.jpg',
        detailUrl: 'https://m.media-amazon.com/images/I/71pBWiSpLxL._SY695_.jpg',
        title: {
            shortTitle: 'new balance Men 990 ',
            longTitle: 'new balance Men 990 Grey/Red Sneakers (M990NL5)'
        },
        price: {
            mrp: 29899,
            cost: 34124,
            discount: '40%'
        },
        description: '',
        discount: 'From ₹499',
        tagline: 'Clothing & more'
    },
    {
        id: "products17",
        url: 'https://m.media-amazon.com/images/I/61mx+X79luL._SL1500_.jpg',
        detailUrl: 'https://m.media-amazon.com/images/I/71MKT1mhE1L._SL1500_.jpg',
        title: {
            shortTitle: 'JBL Cinema SB190 Deep Bass Dolby Atmos Soundbar',
            longTitle: 'JBL Cinema SB190 Deep Bass, Dolby Atmos Soundbar with Wireless Subwoofer for Extra Deep Bass, 2.1 Channel with Remote, Sound Mode for Voice Clarity, HDMI eARC, Bluetooth & Optical Connectivity (380W)'
        },
        price: {
            mrp: 19899,
            cost: 20124,
            discount: '40%'
        },
        description: '',
        discount: 'From ₹499',
        tagline: 'Mobiles, PC & more'
    },
    {
        id: "products18",
        url: 'https://m.media-amazon.com/images/I/51m4NsZau4L._SL1212_.jpg',
        detailUrl: 'https://m.media-amazon.com/images/I/71bjS0zvNgL._SL1500_.jpg',
        title: {
            shortTitle: 'Sony HT-S40R Real 5.1ch Dolby Audio Soundbar',
            longTitle: 'Sony HT-S40R Real 5.1ch Dolby Audio Soundbar for TV with Subwoofer & Wireless Rear Speakers, 5.1ch Home Theatre System (600W, Bluetooth & USB Connectivity, HDMI & Optical Connectivity, Sound Mode)'
        },
        price: {
            mrp: 26899,
            cost: 28124,
            discount: '40%'
        },
        description: '',
        discount: 'From ₹499',
        tagline: 'Mobiles, PC & more'
    },
    {
        id: "products19",
        url: 'https://m.media-amazon.com/images/I/61EGyktwgTL._SL1500_.jpg',
        detailUrl: 'https://m.media-amazon.com/images/I/819xzB9gpWL._SL1500_.jpg',
        title: {
            shortTitle: 'Sony Digital Camera ZV 1 for Content Creators ',
            longTitle: 'Sony Digital Camera ZV 1 for Content Creators (Compact, Video Eye AF, Flip Screen, in-Built Microphone, Bluetooth Shooting Grip, 4K Vlogging Camera for Content Creation) - Black'
        },
        price: {
            mrp: 63899,
            cost: 75124,
            discount: '40%'
        },
        description: '',
        discount: 'From ₹499',
        tagline: 'Mobiles, PC & more'
    },
    {
        id: "products20",
        url: 'https://m.media-amazon.com/images/I/91xnO7qHAeL._SL1500_.jpg',
        detailUrl: 'https://m.media-amazon.com/images/I/71Gr-0BYORL._SL1500_.jpg',
        title: {
            shortTitle: 'Panasonic LUMIX G7 16.00 MP 4K Camera',
            longTitle: 'Panasonic LUMIX G7 16.00 MP 4K Mirrorless Interchangeable Lens Camera Kit with 14-42 mm Lens (Black) with 3x Optical Zoom'
        },
        price: {
            mrp: 213899,
            cost: 215124,
            discount: '40%'
        },
        description: '',
        discount: 'From ₹499',
        tagline: 'Mobiles, PC & more'
    },
];

module.exports = products;