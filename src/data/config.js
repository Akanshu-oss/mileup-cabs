export const SITE_CONFIG = {
  // Brand name
  name: "MileUp Cabs",
  tagline: "Premier Chauffeur-Driven Cabs for Airport Transfers, Char Dham, Uttarakhand & Outstation",
  shortName: "MileUp",
  
  // Contact details
  primaryPhone: "9837084883",
  secondaryPhone: "8384812979",
  whatsappNumber: "9837084883",
  email: "mileupcabs@zohomail.in",
  
  address: "Ramnagar Road / Station Road, Kashipur, Udham Singh Nagar, Uttarakhand - 244713",
  servingArea: "Delhi NCR, Delhi IGI Airport, Pantnagar, Dehradun, Char Dham, Kashipur & All India",
  
  // Trust stats (WTI style)
  stats: [
    { label: "Safe Kilometers Covered", value: "5,00,000+ km" },
    { label: "Years of Travel Excellence", value: "10+ Years" },
    { label: "On-Time Arrival Rate", value: "99.8%" },
    { label: "Verified Professional Drivers", value: "100% Certified" }
  ],

  // 4 Dham Individual Frames Data
  dhams: [
    {
      id: "yamunotri",
      order: "1st Dham",
      name: "Yamunotri Dham",
      deity: "Goddess Yamuna",
      altitude: "3,293 m (10,804 ft)",
      river: "Holy Yamuna River",
      base: "Janki Chatti Parking",
      highlights: "Surya Kund hot springs, Divya Shila, cooking rice in holy thermal spring.",
      image: "/images/yamunotri-snow.jpg",
      tag: "Source of Sacred Yamuna"
    },
    {
      id: "gangotri",
      order: "2nd Dham",
      name: "Gangotri Dham",
      deity: "Goddess Ganga",
      altitude: "3,100 m (10,170 ft)",
      river: "Bhagirathi River",
      base: "Direct Cab Access to Temple Gate",
      highlights: "Bhagirath Shila, Submerged Shivling, origin point of River Ganga at Gaumukh.",
      image: "/images/gangotri-snow.jpg",
      tag: "Direct Road Access"
    },
    {
      id: "kedarnath",
      order: "3rd Dham",
      name: "Kedarnath Ji Dham",
      deity: "Lord Shiva (Jyotirlinga)",
      altitude: "3,583 m (11,755 ft)",
      river: "Mandakini River",
      base: "Sonprayag / Gaurikund",
      highlights: "Highest of the 12 Jyotirlingas, ancient stone temple, Bhairavnath darshan.",
      image: "/images/kedarnath-snow.jpg",
      tag: "Highest Sacred Jyotirlinga"
    },
    {
      id: "badrinath",
      order: "4th Dham",
      name: "Badrinath Ji Dham",
      deity: "Lord Vishnu (Badri Vishal)",
      altitude: "3,300 m (10,827 ft)",
      river: "Alaknanda River",
      base: "Direct Cab Access to Temple Complex",
      highlights: "Tapt Kund natural sulfur bath, Brahma Kapal, Mana Village (First Indian Village).",
      image: "/images/badrinath-snow.jpg",
      tag: "Maha Vishnu Pilgrimage"
    }
  ],

  // Fleet & Partner Network - Focused on Sedan
  fleet: [
    {
      id: "sedan",
      name: "Executive Sedan",
      modelClass: "Swift Dzire / Aura Class",
      category: "4+1 Seater Sedan (Primary Fleet)",
      badge: "Most Popular • 100% Trunk Space",
      capacity: "4 Passengers + 1 Chauffeur",
      luggage: "Full Trunk Space - 2-3 Large Suitcases",
      fuel: "High-Efficiency Smooth Highway & Mountain Tuned",
      ac: "Chilled Automatic Climate Control",
      description: "Our #1 most popular car for Char Dham Yatra, airport transfers, and outstation trips. Offers exceptional mountain road agility, full luggage boot space, superior fuel economy, and unmatched passenger comfort for couples and families up to 4.",
      features: [
        "Top Choice for Char Dham: Easily navigates narrow mountain ghats",
        "100% Usable Trunk: Accommodates large suitcases & travel trolley bags",
        "Superior legroom & smooth suspension for long journeys",
        "Most cost-effective & reliable ride for Airport & Hill circuits"
      ],
      image: "https://images.unsplash.com/photo-1550355291-bbee04a92027?auto=format&fit=crop&w=800&q=80",
      isOwned: true,
      hasCarrier: false,
      highlightTag: "#1 Recommended for Char Dham & Airport Transfers"
    },
    {
      id: "mpv",
      name: "6+1 Seater MPV",
      modelClass: "Maruti Ertiga Class",
      category: "Spacious 6+1 Seater (Dedicated Fleet)",
      badge: "Roof Luggage Carrier Available",
      capacity: "6 Passengers + 1 Chauffeur",
      luggage: "Flexible Boot + Top Roof Carrier on Demand",
      fuel: "Smooth Long-Distance Highway Tuned",
      ac: "Dual AC (Dedicated Front & Rear Ceiling Vents)",
      description: "Ideal for larger families of 5 to 7 passengers traveling together. Features dual AC vents across all rows, generous legroom, and optional heavy-duty top luggage carrier.",
      features: [
        "Comfortable 3-row seating for up to 6-7 passengers",
        "Optional Top Roof Luggage Carrier for extra suitcases & bags",
        "Dual AC with dedicated rear ceiling vents",
        "Great for extended family tours & group trips"
      ],
      image: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=800&q=80",
      isOwned: true,
      hasCarrier: true,
      highlightTag: "Best for Extended Family & Group Tours"
    },
    {
      id: "tempo",
      name: "Tempo Traveller (12-20 Seater)",
      modelClass: "Force Traveller Class",
      category: "12 to 20 Seater (Commercial Partner Fleet)",
      badge: "Large Pilgrimage Groups",
      capacity: "12, 17 or 20 Passengers",
      luggage: "Dedicated Full Roof Carrier & Rear Storage",
      fuel: "Commercial Heavy Duty",
      ac: "High Capacity Powerful Dual AC",
      description: "Arranged through our verified transport network for large group pilgrimages to Char Dham Yatra, Haridwar-Rishikesh, wedding parties, and corporate offsites in Jim Corbett.",
      features: [
        "Pushback luxury reclining bucket seats",
        "Experienced mountain-certified chauffeur",
        "Sound system, mic & individual charging points",
        "Hassle-free group coordination"
      ],
      image: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&w=800&q=80",
      isOwned: false,
      hasCarrier: true,
      highlightTag: "Large Group Pilgrimage Specialist"
    }
  ],

  // Airport Transfers Dedicated Section
  airports: [
    {
      name: "Delhi IGI Airport (T1, T2, T3)",
      code: "DEL",
      distance: "Direct Highway Connect",
      time: "4 - 4.5 Hours",
      details: "Doorstep pickup from anywhere in Uttarakhand/NCR directly to Terminal 1, 2, or 3. Flight tracking & guaranteed on-time drop in our comfortable sedan.",
      badge: "Daily Frequent"
    },
    {
      name: "Pantnagar Airport (PGH)",
      code: "PGH",
      distance: "Fast Connect",
      time: "1 Hour",
      details: "Fast airport transfer connecting Kashipur, Rudrapur, Jim Corbett, and Haldwani to scheduled domestic flights in agile sedans.",
      badge: "Regional Airport Hub"
    },
    {
      name: "Dehradun Jolly Grant Airport (DED)",
      code: "DED",
      distance: "Scenic Route",
      time: "4 Hours",
      details: "Direct one-way drops and pickups for flights connecting Uttarakhand to Mumbai, Bengaluru, Delhi, and beyond.",
      badge: "Capital Gateway"
    }
  ],

  // Uttarakhand & Hill Circuits
  circuits: [
    {
      title: "Char Dham Yatra Circuit",
      route: "Yamunotri • Gangotri • Kedarnath • Badrinath",
      duration: "9 - 12 Days (Customizable)",
      desc: "Complete spiritual pilgrimage package. Our agile Sedan is the #1 recommended vehicle for couples & small families (up to 4 members) for smooth mountain overtaking and unmatched comfort.",
      badge: "Spiritual Pilgrimage"
    },
    {
      title: "Do Dham Yatra (Kedarnath & Badrinath)",
      route: "Haridwar • Guptkashi • Kedarnath • Badrinath • Rishikesh",
      duration: "5 - 7 Days",
      desc: "Ideal for devotees planning darshan of Kedarnath Ji and Badrinath Ji with timely helicopter or trek synchronization.",
      badge: "Devotional Special"
    },
    {
      title: "Haridwar • Rishikesh • Dehradun • Mussoorie",
      route: "Ganga Aarti • White Water Rafting • Queen of Hills",
      duration: "3 - 5 Days",
      desc: "The quintessential Uttarakhand leisure and spiritual route. Smooth highway and hill driving with scenic stops.",
      badge: "Popular Leisure"
    },
    {
      title: "Jim Corbett • Nainital • Kainchi Dham Circuit",
      route: "Ramnagar Safari • Naini Lake • Neem Karoli Baba Ashram",
      duration: "2 - 4 Days",
      desc: "Enjoy safari gate drops at Corbett, scenic Nainital lake tours, and Kainchi Dham blessings in private sedan comfort.",
      badge: "Regional Specialty"
    }
  ],

  // Travel Planning & Itinerary Guides (Blog)
  blogs: [
    {
      id: "char-dham-guide",
      category: "Pilgrimage Planning",
      readTime: "6 Min Read",
      title: "Char Dham Yatra by Cab: Complete Route Map, Vehicle Selection & Itinerary",
      summary: "A practical guide to planning Kedarnath, Badrinath, Gangotri & Yamunotri. Discover why an agile Sedan is the top choice for couples & families up to 4 for smooth mountain driving and maximum cost savings.",
      publishedDate: "Updated for 2026 Season",
      author: "Senior Chauffeur Desk",
      image: "/images/char-dham-yatra.jpg",
      content: [
        "The Char Dham Yatra is one of the most spiritually significant road journeys in India. Traversing Yamunotri, Gangotri, Kedarnath, and Badrinath requires experienced mountain chauffeurs who understand high-altitude driving and narrow ghat management.",
        "Why Sedan is the #1 Recommended Vehicle: For couples, senior citizens, and families up to 4 members, our Executive Sedan is the most agile, economical, and comfortable choice. Its compact footprint allows quick maneuverability on single-lane mountain roads and easy parking at crowded temple halts.",
        "Full Luggage Capacity: Our sedans provide complete, uncompromised trunk boot space for suitcases, bags, and warm winter woolens.",
        "For larger groups of 5+ members, our 6+1 MPV with top luggage carrier and 12-20 Seater Tempo Travellers are also readily available.",
        "Recommended Route & Halts: Haridwar/Rishikesh -> Barkot (Yamunotri) -> Uttarkashi (Gangotri) -> Guptkashi/Sonprayag (Kedarnath trek point) -> Joshimath/Badrinath -> Rishikesh."
      ]
    },
    {
      id: "airport-transfers-guide",
      category: "Airport Travel",
      readTime: "4 Min Read",
      title: "Delhi IGI Airport Express: Optimal Timings, Expressways & Luggage Tips",
      summary: "Everything you need to know about booking an airport cab transfer. Learn how our dedicated executive sedans ensure non-stop highway cruising, on-time arrivals, and full luggage boot capacity.",
      publishedDate: "Weekly Travel Insights",
      author: "Airport Logistics Desk",
      image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=800&q=80",
      content: [
        "Catching an international flight or early morning domestic departure from Delhi IGI Airport requires pinpoint punctuality.",
        "The Sedan Advantage: Our executive sedans are dedicated to non-stop highway cruising with zero fuel station delays. Travel smoothly without unnecessary stops.",
        "Luggage Space: You get 100% full trunk capacity for large international trolley bags and check-in luggage.",
        "Timing Advice: For domestic flights, start 7 hours before flight departure. For international flights, we advise departing 8 to 9 hours prior to ensure a stress-free check-in."
      ]
    },
    {
      id: "nepal-road-trip-guide",
      category: "Cross-Border Tourism",
      readTime: "5 Min Read",
      title: "India to Nepal by Road: Banbasa Border Customs (Bhansar), Permits & Routes",
      summary: "Complete step-by-step walkthrough of driving to Kathmandu, Pokhara, and Lumbini. Learn how we handle vehicle customs clearance and road permits without changing cars.",
      publishedDate: "Cross-Border Special",
      author: "International Tours Desk",
      image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80",
      content: [
        "Traveling to Nepal by private cab offers unparalleled scenic beauty along the Trishuli River and Narayanghat highway. Best of all, with our dedicated cross-border cab service, you never have to change vehicles at the border.",
        "Border Formalities at Banbasa: Indian travelers need either a valid Voter ID card or Indian Passport. We guide you through the vehicle entry customs (Bhansar tax) and tourist road permits seamlessly.",
        "Key Destinations: Kathmandu (Pashupatinath Temple, Boudhanath), Pokhara (Phewa Lake, Annapurna views), Lumbini (Birthplace of Lord Buddha), and Janakpur (Janaki Temple).",
        "Vehicle Recommendation: For couples and families up to 4, our Executive Sedan provides swift, comfortable hill driving. For larger groups, our 6+1 MPV is available."
      ]
    },
    {
      id: "corbett-nainital-weekend",
      category: "Weekend Getaways",
      readTime: "4 Min Read",
      title: "3-Day Jim Corbett & Nainital Weekend Itinerary",
      summary: "Combine a thrilling wildlife safari in Jim Corbett National Park with peaceful boating on Naini Lake and blessings at Neem Karoli Baba Ashram (Kainchi Dham) in sedan comfort.",
      publishedDate: "Kumaon Circuit",
      author: "Kumaon Tour Guide",
      image: "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?auto=format&fit=crop&w=800&q=80",
      content: [
        "Jim Corbett National Park is India's premier tiger reserve. A combined tour of Corbett and Nainital makes for the perfect 3-day family weekend.",
        "Day 1: Early morning pickup -> Check-in at Corbett resort -> Afternoon Safari at Bijrani or Dhela gate.",
        "Day 2: Morning visit to Garjiya Devi Temple -> Scenic hill drive to Nainital (approx 2 hours) -> Boating on Naini Lake and evening walk on Mall Road.",
        "Day 3: Morning darshan at Kainchi Dham (Neem Karoli Baba Ashram) -> Return drive."
      ]
    }
  ],

  // Popular Outstation Routes (Balanced to exactly 9 items for a perfect 3x3 grid)
  routes: [
    {
      from: "Kashipur / Any City",
      to: "Delhi IGI Airport (T1/T2/T3)",
      distance: "Approx 220 km",
      time: "4 - 4.5 Hours",
      type: "Airport Express",
      highlights: "Doorstep pickup from your home, office, or hotel directly to Terminal 1, 2, or 3. On-time flight guarantee in our comfortable Sedan.",
      badge: "Daily Frequent"
    },
    {
      from: "Kashipur / Corbett",
      to: "Pantnagar Airport (PGH)",
      distance: "Approx 55 - 75 km",
      time: "1 - 1.5 Hours",
      type: "Fast Airport Connect",
      highlights: "Prompt airport drop for Pantnagar flights, industrial visits to SIDCUL Rudrapur, and Kathgodam train connections.",
      badge: "Regional Express"
    },
    {
      from: "Delhi / Kashipur",
      to: "Haridwar & Rishikesh",
      distance: "Approx 145 km",
      time: "3 Hours",
      type: "Spiritual & Pilgrimage",
      highlights: "Direct cab for Ganga Aarti at Har Ki Pauri, ashram visits in Rishikesh, yoga retreats, and Char Dham starting points.",
      badge: "Pilgrim Route"
    },
    {
      from: "Delhi / Kashipur",
      to: "Dehradun & Mussoorie (Queen of Hills)",
      distance: "Approx 215 km",
      time: "4.5 Hours",
      type: "Hill Station & Capital",
      highlights: "Convenient travel for university visits, Jolly Grant airport, Mall Road Mussoorie, and Kempty Falls in our agile Sedan.",
      badge: "Hill Destination"
    },
    {
      from: "Delhi / Kashipur",
      to: "Jim Corbett National Park (Ramnagar)",
      distance: "Approx 30 - 240 km",
      time: "Flexible",
      type: "Wildlife & Resorts",
      highlights: "Direct resort transfers, jungle safari gates (Dhikala, Bijrani, Dhela, Jhirna), and Garjiya Devi temple.",
      badge: "Tourist Favorite"
    },
    {
      from: "Delhi / Kashipur",
      to: "Nainital / Bhimtal / Mukteshwar",
      distance: "Approx 85 - 290 km",
      time: "Scenic Drive",
      type: "Kumaon Hills",
      highlights: "Scenic mountain driving by hill-trained drivers. Visiting Naini Lake, Kainchi Dham, and Himalayan viewpoints.",
      badge: "Kumaon Holidays"
    },
    {
      from: "Delhi NCR / Uttarakhand",
      to: "Nepal (Kathmandu, Pokhara, Lumbini)",
      distance: "Cross-Border Special",
      time: "Custom Package",
      type: "International Cross-Border",
      highlights: "Direct private cab to Nepal via Banbasa/Mahendranagar border. Complete Bhansar customs & permit guidance without car change.",
      badge: "Cross-Border Tour"
    },
    {
      from: "Kashipur / Rampur",
      to: "Bareilly / Moradabad",
      distance: "Approx 75 km",
      time: "1.5 Hours",
      type: "Fast Regional Intercity",
      highlights: "Fast commercial run for railway junction connections, medical visits, and industrial business in Bareilly and Moradabad.",
      badge: "Intercity Run"
    },
    {
      from: "Kashipur / Ramnagar",
      to: "Almora • Ranikhet • Kausani Circuit",
      distance: "Approx 135 km",
      time: "3.5 Hours",
      type: "Himalayan Panorama",
      highlights: "Scenic snow-view circuit covering Ranikhet golf course, Almora cultural bazaars, and peaceful Kausani tea gardens.",
      badge: "Himalayan Circuit"
    }
  ],

  // WTI-Style Comprehensive Route Directory
  directory: {
    airports: [
      { label: "Delhi IGI Airport (T1/T2/T3) Cabs", route: "Direct Terminal Drop & Pickup", time: "4.5 Hrs", type: "Terminal Transfer" },
      { label: "Pantnagar Airport (PGH) Cabs", route: "Fast Regional Airport Connect", time: "1 Hr", type: "Fast Connect" },
      { label: "Dehradun Jolly Grant Airport Cabs", route: "Capital Airport Highway Transfer", time: "4 Hrs", type: "State Capital Transfer" },
      { label: "Chandigarh International Airport Cabs", route: "Intercity Airport Transfer", time: "6.5 Hrs", type: "Long Distance Airport" }
    ],
    outstation: [
      { label: "Delhi NCR to Uttarakhand Cabs", route: "Delhi ⇋ Kashipur / Corbett / Nainital", time: "4.5 Hrs", distance: "220 km" },
      { label: "Jim Corbett Safari Cabs", route: "Direct Resort & Safari Gate Transfers", time: "Flexible", distance: "Point to Point" },
      { label: "Nainital & Kainchi Dham Tours", route: "Scenic Mountain Road Trips", time: "2.5 Hrs", distance: "85 km" },
      { label: "Haridwar & Rishikesh Pilgrimage", route: "Ganga Aarti & Ashram Transfers", time: "3 Hrs", distance: "145 km" },
      { label: "Dehradun & Mussoorie Hill Drops", route: "Queen of Hills Highway Runs", time: "4.5 Hrs", distance: "215 km" },
      { label: "Bareilly & Moradabad Intercity", route: "Commercial & Medical Runs", time: "1.5 Hrs", distance: "75 km" },
      { label: "Nepal Cross-Border Private Cabs", route: "Direct Border Clearance via Banbasa", time: "Custom", distance: "Cross-Border" },
      { label: "Char Dham Yatra Cab Transfers", route: "Yamunotri, Gangotri, Kedarnath, Badrinath", time: "9-12 Days", distance: "Full Circuit" }
    ],
    hourly: [
      { label: "4 Hours / 40 KM Local Package", desc: "Local city meetings, market shopping & railway station transfers." },
      { label: "8 Hours / 80 KM Full Day Package", desc: "Full day corporate visits, industrial plant rounds & resort transfers in Jim Corbett." },
      { label: "12 Hours / 120 KM Extended Day Rental", desc: "Extended day disposal for events, wedding guest transfers & multicity errands." }
    ],
    cities: [
      "Delhi IGI Airport", "Gurugram", "Noida", "Delhi NCR", "Kashipur", "Ramnagar", 
      "Jim Corbett", "Pantnagar", "Rudrapur", "Haldwani", "Kathgodam", "Nainital", 
      "Haridwar", "Rishikesh", "Dehradun", "Mussoorie", "Bareilly", "Moradabad", "Kathmandu (Nepal)"
    ]
  },

  // Testimonials
  testimonials: [
    {
      name: "Rohit Verma",
      role: "Regular Corporate Client (Gurugram to Kashipur)",
      comment: "I travel between Gurugram and our manufacturing facility in Kashipur regularly. The sedan is always spotless, pure highway comfort, and no stops at fuel queues. Highly professional and punctual service.",
      rating: 5
    },
    {
      name: "Sanjay Singhal",
      role: "Char Dham Yatra Pilgrimage Tour",
      comment: "We booked the Sedan for our Kedarnath and Badrinath tour for 3 people. Outstanding mountain driving skills, great fuel economy, very comfortable seats, and ample luggage room in the trunk for all our warm bags.",
      rating: 5
    },
    {
      name: "Col. R.K. Rawat (Retd.)",
      role: "Dehradun & Delhi Airport Transfers",
      comment: "Reliable airport drops are hard to find in outstation towns. The sedan picked us up right on time at 4:00 AM for our IGI flight. Smooth driving, and full boot space for our heavy international bags.",
      rating: 5
    }
  ],

  // FAQs - Focus on Sedan
  faqs: [
    {
      q: "Why is your Sedan the #1 recommended choice for Char Dham & Outstation?",
      a: "Our Executive Sedan (4+1 seater) is the top choice for couples, senior citizens, and families up to 4 members. It offers superior agility on narrow mountain roads (Kedarnath/Badrinath ghats), full uncompromised trunk boot space for suitcases, lower travel costs, and private comfortable cruising without fuel queue stops."
    },
    {
      q: "Can I enter my custom pickup location from anywhere (Airport, Home, Hotel)?",
      a: "Yes! You can enter any pickup location directly—whether it's Delhi IGI Airport, your home in Gurugram/Noida, a hotel in Kashipur, or any location in Uttarakhand. We provide doorstep pickup and drop everywhere."
    },
    {
      q: "What if we have 5 or more passengers with heavy luggage?",
      a: "For families of 5 to 7 passengers, we offer our 6+1 Seater MPV equipped with an optional heavy-duty top luggage carrier. For groups of 8 to 20 passengers, we arrange Force Tempo Travellers."
    },
    {
      q: "Do you provide airport drops to Pantnagar, Dehradun, and Delhi IGI?",
      a: "Yes. We operate frequent 24x7 transfers to Delhi IGI Airport (T1, T2, T3), Pantnagar Airport (PGH), and Dehradun Jolly Grant Airport (DED) with guaranteed on-time flight arrival."
    },
    {
      q: "How are fares calculated and quoted?",
      a: "Our 24x7 booking desk provides all-inclusive, transparent quotes over phone or WhatsApp, taking into account distance, toll charges, hill state taxes, and parking fees with zero hidden costs."
    },
    {
      q: "Do you also arrange cabs to Nepal?",
      a: "Yes, we offer cross-border cab services to Nepal (Kathmandu, Pokhara, Lumbini, Janakpur). We assist with road permits and Bhansar vehicle entry customs at the Banbasa border."
    }
  ]
};
