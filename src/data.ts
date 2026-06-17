import { Destination, Tour, Experience, BlogPost, FAQItem } from './types';

export const destinations: Destination[] = [
  {
    id: 'sigiriya',
    name: 'Sigiriya (Lion Rock)',
    overview: 'Rising dramatically 200 meters above the central plains, Sigiriya is an ancient palace and fortress complex built in the 5th century. A UNESCO World Heritage site, it’s renowned for its exquisite frescoes, the monumental Lion’s Paw gateway, and the remains of advanced hydraulic gardens.',
    image: 'https://images.unsplash.com/photo-1588598130841-3837f8a35e74?auto=format&fit=crop&q=80&w=1200',
    bestTime: 'January to April (Dry, pleasant climbing weather)',
    attractions: [
      'The Sigiriya Lion Rock Fortress peak',
      'The Mirror Wall and ancient graffiti',
      'The heavenly Maidens of Sigiriya frescoes',
      'Water Gardens, Boulder Gardens, and Terraced Gardens',
      'Pidurangala Rock (for sunrise/sunset views over Sigiriya)'
    ],
    activities: [
      'Climb the 1,200 steps to the fortress summit',
      'Admire ancient royal architecture and engineering',
      'Sunrise trekking up Pidurangala Rock',
      'Elephant watching and village cycling tours nearby'
    ],
    tips: [
      'Start your climb early in the morning (by 7:00 AM) to avoid the intense midday heat.',
      'Stay fully hydrated and wear comfortable sports shoes with solid grip.',
      'Hire an official local guide at the entrance to learn the rich historical drama.'
    ],
    region: 'Cultural'
  },
  {
    id: 'kandy',
    name: 'Kandy (The Sacred Hill Capital)',
    overview: 'Nestled amidst lush hills and beautiful tea estates, Kandy was the last royal capital of Sri Lanka. Home to the sacred Temple of the Tooth Relic, this cultural heartland is famous for the Kandy Lake, serene botanical gardens, and the annual Esala Perahera festival.',
    image: 'https://images.unsplash.com/photo-1546708973-b339540b5162?auto=format&fit=crop&q=80&w=1200',
    bestTime: 'December to April (Cool and dry hills)',
    attractions: [
      'The Temple of the Sacred Tooth Relic (Sri Dalada Maligawa)',
      'Royal Botanical Gardens, Peradeniya',
      'Kandy Lake and cultural view points',
      'Udawattakele Sanctuary rainforest sanctuary',
      'Bahirawakanda Vihara Buddha Statue'
    ],
    activities: [
      'Observe ancient Buddhist rituals during daily puja services',
      'Stroll the giant suspension bridges and palm avenues in Peradeniya',
      'Watch a classical Kandyan Dance and fire-walking performance',
      'Board the scenic train journey towards Ella'
    ],
    tips: [
      'When visiting the Temple of the Tooth, wear decent clothing covering shoulders and knees.',
      'Remove hats and shoes before entering any sacred temple grounds.',
      'Book Kandyan dance tickets in advance during peak seasons.'
    ],
    region: 'Cultural'
  },
  {
    id: 'ella',
    name: 'Ella (The Mountain Paradise)',
    overview: 'Ella is a small, laid-back sanctuary in the central highlands, surrounded by emerald tea plantations, deep valleys, and majestic waterfalls. Popular for hiking, cycling, and spectacular scenery, it offers some of the most dramatic views in Sri Lanka.',
    image: 'https://images.unsplash.com/photo-1563189333-e57551cc7204?auto=format&fit=crop&q=80&w=1200',
    bestTime: 'January to May (Clear skies for hiking)',
    attractions: [
      'The landmark Demodara Nine Arch Bridge',
      'Little Adam’s Peak and Ella Rock summits',
      'Ravana Falls and Ravana Caves',
      'Lipton’s Seat tea lookout',
      'Diyaluma Falls (Sri Lanka’s 2nd highest waterfall)'
    ],
    activities: [
      'Hike up Little Adam’s Peak through lush tea fields',
      'Wait at Nine Arch Bridge to photograph the legendary blue train crossing',
      'Conquer Ella Rock for an unforgettable, panoramic mountain view',
      'Swim in pristine rock pools at Diyaluma Falls'
    ],
    tips: [
      'Hire a guide for Ella Rock if you are not experienced, as the paths can be winding and unmarked.',
      'Carry umbrellas or rain ponchos since mountain weather changes unexpectedly.',
      'Visit Nine Arch Bridge early in the morning to beat the crowds.'
    ],
    region: 'Hill Country'
  },
  {
    id: 'nuwara-eliya',
    name: 'Nuwara Eliya (Little England)',
    overview: 'Often called "Little England" for its colonial-era cottages, Tudor-style hotels, manicured golf courses, and cool highland climate. It sits at over 1,800 meters elevation, engulfed by endless carpets of mist-veiled, world-renowned Ceylon tea estates.',
    image: 'https://images.unsplash.com/photo-1543731068-7e0f5beff43a?auto=format&fit=crop&q=80&w=1200',
    bestTime: 'February to April (Lush blooming, minimal frost and rain)',
    attractions: [
      'Gregory Lake and beautiful Victoria Park',
      'Pedro and Damro Tea Estates & Factories',
      'Horton Plains National Park & World’s End cliff',
      'Post Office (Historic colonial pink brick landmark)',
      'Hakgala Botanical Gardens'
    ],
    activities: [
      'Take a guided tour inside a working historical tea factory',
      'Hike the early-morning trail in Horton Plains up to World’s End cliff',
      'Enjoy luxury High Tea at the grand 19th-century colonial Grand Hotel',
      'Boat-riding or jet-skiing across Gregory Lake'
    ],
    tips: [
      'Nuwara Eliya gets quite cold in the evening (temperatures can drop to 10°C). Bring warm sweaters and jackets.',
      'For Horton Plains hikes, start by 5:30 AM to reach the cliff before mist blocks the view.'
    ],
    region: 'Hill Country'
  },
  {
    id: 'galle',
    name: 'Galle (The Historic Fortified Fort)',
    overview: 'An elegant coastal fort city founded by Portuguese colonists and heavily fortified by the Dutch in the 17th century. Gallen Fort is a living UNESCO World Heritage site blending colonial European architecture, tropical foliage, and charming ocean-side ramparts.',
    image: 'https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?auto=format&fit=crop&q=80&w=1200',
    bestTime: 'December to April (Sunswept ocean days, calm seas)',
    attractions: [
      'Galle Dutch Fort and historic white Lighthouse',
      'The fortified Stone Ramparts and Clock Tower',
      'Charming pedestrian streets, boutiques, and cafes',
      'Historical Dutch Reformed Church',
      'National Maritime Museum'
    ],
    activities: [
      'Walk along the fortified stone walls during sunset',
      'Shop for luxury gems, local silks, and authentic Sri Lankan spices',
      'Dine on premium fresh seafood in restored colonial courtyards',
      'Explore pristine nearby beaches like Jungle Beach and Unawatuna'
    ],
    tips: [
      'The Fort is incredibly photogenic; carry a power bank for your camera.',
      'Explore Galle Fort entirely on foot—cars are restricted, and the narrow lanes are best discovered walking.',
      'Visit local boutique gelaterias to cool off in the afternoon sun.'
    ],
    region: 'Coast'
  },
  {
    id: 'mirissa',
    name: 'Mirissa (The Sun-Drenched Bay)',
    overview: 'Mirissa is a pristine tropical crescent beach flanked by swaying coconut palms and crystal waters. Renowned as one of the best locations in the world for whale watching, it translates a chilled beach vibe mixed with trendy nightlife and local surf breaks.',
    image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&q=80&w=1200',
    bestTime: 'November to April (Calm seas for blue whale boat tours)',
    attractions: [
      'The highly-instagrammed Coconut Tree Hill',
      'Parrot Rock (a short beach scramble at low tide)',
      'Mirissa Beach and secret bays',
      'Weligama Bay (perfect for beginner surf lessons) nearby',
      'Secret Beach Mirissa'
    ],
    activities: [
      'Embark on a luxury early morning cruise to spot Blue Whales and Dolphins',
      'Take photos standing amongst coconut palms at Coconut Tree Hill',
      'Surf the beginner breaks or reef breaks along the coast',
      'Enjoy candlelight beach barbecues under the stars'
    ],
    tips: [
      'For whale watching, select operators that strictly follow international cetacean conservation guidelines.',
      'Parrot Rock can become unsafe to reach during high tide, so check tide times before crossing.'
    ],
    region: 'Coast'
  },
  {
    id: 'yala',
    name: 'Yala National Park (Leopard Sanctuary)',
    overview: 'Sri Lanka’s most premier wildlife sanctuary, bordering the Indian Ocean. Yala boasts a high density of Sri Lankan leopards, alongside magnificent herds of wild elephants, sloth bears, spotted deer, wild boars, and a dizzying array of tropical birds.',
    image: 'https://images.unsplash.com/photo-1581888227599-779811939961?auto=format&fit=crop&q=80&w=1200',
    bestTime: 'February to June (Dry season, wildlife aggregates around watering holes)',
    attractions: [
      'Yala National Park Safari Blocks',
      'Sithulpawwa Ancient Rock Temple (dating back 2,200 years)',
      'Unspoiled coastal sand dunes and wild beaches',
      'Salt pans and bird sanctuaries near Hambantota'
    ],
    activities: [
      'Embark on an interactive 4x4 open-top safari guided game drive',
      'Stay in premium glamping campsites adjacent to the park boundaries',
      'Spot the elusive Panthera pardus kotiya (Sri Lankan Leopard)',
      'Take scenic birdwatching lagoon tours'
    ],
    tips: [
      'Book a private custom jeep with an expert wildlife tracker to maximize your chances of big cat sightings.',
      'The park usually closes for restoration from September to October annually. Plan accordingly.',
      'Wear neutral, muted forest tones (khaki, olive, beige) to avoid startling animals.'
    ],
    region: 'Wildlife'
  },
  {
    id: 'bentota',
    name: 'Bentota (The Golden Ribbon)',
    overview: 'A premium beach resort town famous for its sparkling broad beaches, high-end botanical structures, and extreme water sports. It rests on a unique peninsula between the turquoise Indian Ocean and the tranquil Bentota River.',
    image: 'https://images.unsplash.com/photo-1473186578172-c141e6798cf4?auto=format&fit=crop&q=80&w=1200',
    bestTime: 'November to April (Perfect wind and sea conditions)',
    attractions: [
      'Broad Golden Bentota Beach',
      'Lunuganga Estate (stunning country estate of architect Geoffrey Bawa)',
      'Brief Garden by Bevis Bawa',
      'Kosgoda Sea Turtle Conservation Hatchery',
      'Galapatha Raja Maha Viharaya monastery'
    ],
    activities: [
      'Try jet-skiing, windsurfing, wakeboarding, and banana boats on the river',
      'Tour Lunuganga Estate to admire legendary tropical modernist landscape design',
      'Relax in premium 5-star beachfront ayurvedic luxury wellness hotels',
      'Take a tranquil river safari cruise down Madu Ganga mangroves'
    ],
    tips: [
      'Visit Bawa’s Lunuganga by booking an architectural day guide tour in advance.',
      'Support turtle conservation ethically by visiting the community-maintained hatcheries in Kosgoda.'
    ],
    region: 'Coast'
  },
  {
    id: 'arugam-bay',
    name: 'Arugam Bay (The Surf Haven)',
    overview: 'A worldwide surfing mecca situated on the dry southeast coast. Arugam Bay is a crescent of soft sand and epic point breaks, known for its bohemian lifestyle, beachfront hostels, and wild elephants roaming the nearby scrubs.',
    image: 'https://images.unsplash.com/photo-1502680390469-be75c86b636f?auto=format&fit=crop&q=80&w=1200',
    bestTime: 'May to September (Epic southwest monsoon swells feed world-class rights)',
    attractions: [
      'Main Point, Whiskey Point, and Peanut Farm surf breaks',
      'Pottuvil Lagoon mangrove loop',
      'Kudumbigala Monastery (isolated peak surrounded by wild jungle)',
      'Muhudu Maha Viharaya ancient beach temple'
    ],
    activities: [
      'Surf the legendary, endless right-hand point breaks',
      'Rent a surfboard and local coach to practice your skills',
      'Go on a Pottuvil Lagoon canoe tour to spot wild elephants and crocodiles',
      'Attend vibrant beachside bonfire acoustic and electronic music sessions'
    ],
    tips: [
      'While the rest of the island is rainy, Arugam Bay experiences glorious summer sunshine from June to August.',
      'Be mindful of strong sea currents, especially at under-monitored breaks. Always ask locals before paddling out.'
    ],
    region: 'Coast'
  },
  {
    id: 'trincomalee',
    name: 'Trincomalee (The Blue Horizon)',
    overview: 'Boasting one of the finest deep-water natural harbors in the world, Trincomalee is a beautiful, serene coastal city on the northeast coast. Flanked by powder-white beaches, historic forts, and sacred clifftop Hindu temples, it’s also a premier whale watching destination.',
    image: 'https://images.unsplash.com/photo-150752428034-b723cf961d3e?auto=format&fit=crop&q=80&w=1200',
    bestTime: 'May to October (Calm, shimmering sapphire waters on northeast coast)',
    attractions: [
      'Nilaveli Beach and marble-clear Pigeon Island National Park',
      'The sacred Koneswaram Temple (Clifftop temple of a thousand pillars)',
      'Fort Frederick (Historic Dutch colonial fort with roaming deer)',
      'Kanniya Hot Springs',
      'Uppuveli Beach'
    ],
    activities: [
      'Snorkel amongst live sea turtles and blacktip reef sharks at Pigeon Island',
      'Join an expedition to search for legendary Sperm Whales and Blue Whales',
      'Worship and admire Koneswaram Temple perched high on Swami Rock drop',
      'Wade through history at the Portuguese-constructed Fort Frederick'
    ],
    tips: [
      'To snorkel on Pigeon Island, buy the authorized marine park entry pass and boat early to preserve the coral ecosystem.',
      'Keep hydrated as the north-eastern coast is dry and hot.'
    ],
    region: 'Coast'
  },
  {
    id: 'polonnaruwa',
    name: 'Polonnaruwa (The Medieval Kingdom)',
    overview: 'The secondary royal capital of Sri Lanka, flourishing between the 11th and 13th centuries. A meticulously preserved archaeological park, it features colossal stone carvings, colossal circular relic houses, and massive artificial inland reservoirs.',
    image: 'https://images.unsplash.com/photo-1608958416812-70b55eff7be0?auto=format&fit=crop&q=80&w=1200',
    bestTime: 'December to March (Minimal rains, cooler afternoons)',
    attractions: [
      'The majestic ancient Vatadage (circular structure with stone Buddhas)',
      'Gal Vihara (Four colossal Buddha sculptures carved seamlessly in granite)',
      'The ruins of the Royal Palace of King Parakramabahu',
      'The giant Parakrama Samudra reservoir ("The Sea of Parakrama")',
      'The archaeological museum showcasing ancient craftsmanship'
    ],
    activities: [
      'Rent a bicycle to explore the ancient sprawling archaeological ruins',
      'Stand in awe in front of the colossal 14-meter reclining Buddha at Gal Vihara',
      'Explore wild toque macaque monkey troops (featured on Disney Nature films)',
      'Take a peaceful sunset walk alongside the Parakrama Samudra reservoir'
    ],
    tips: [
      'Exploring the site by renting a bicycle is highly recommended—it covers vast distances easily and lets you stop at of-beat ruins.',
      'Socks are highly recommended because you must walk bare-foot on stone ruins, which get extremely hot under the sun.'
    ],
    region: 'Ancient Cities'
  },
  {
    id: 'anuradhapura',
    name: 'Anuradhapura (The Sacred Cradle)',
    overview: 'As Sri Lanka’s first capital, established in the 4th century BC, Anuradhapura is one of the oldest continuously inhabited cities in the world. It is the majestic cradle of Sri Lankan Buddhism, hosting immense dome-like stupas, holy monasteries, and the sacred Maha Bodhi Tree.',
    image: 'https://images.unsplash.com/photo-1565008447742-97f6f38c985c?auto=format&fit=crop&q=80&w=1200',
    bestTime: 'December to March (Clear, dry weather to cycle and explore)',
    attractions: [
      'Jaya Sri Maha Bodhi (the oldest documented human-planted tree, over 2,300 years old)',
      'Colossal dome structures: Ruwanwelisaya and Jetavanaramaya Stupas',
      'Isurumuniya Rock Temple (classic stone carvings)',
      'The ancient twin ponds (Kuttam Pokuna) used by monks'
    ],
    activities: [
      'Meditate under the ancient Jaya Sri Maha Bodhi tree during dawn prayers',
      'Stand beside Jetavanaramaya Stupa, once the third tallest monument in the ancient world',
      'Cycle amidst beautifully sculpted forests, ruins, and lotus-filled lakes',
      'Explore the ancient monastic irrigation systems'
    ],
    tips: [
      'Hire a licensed guide at the ticketing office to understand the incredible engineering of these brick monuments.',
      'Always dress in modest, white or light-colored attire as a sign of respect.',
      'Bring plenty of water, sunscreen, and polarized sunglasses.'
    ],
    region: 'Ancient Cities'
  }
];

export const experiences: Experience[] = [
  {
    id: 'adventure-surf',
    title: 'Surfing & Board Sports',
    category: 'Adventure',
    description: 'Carve your dreams on world-renowned point breaks in Arugam Bay or beginner-friendly sands in Weligama and Hikkaduwa. Sri Lanka’s year-round surf seasons make it a board-rider’s paradise.',
    image: 'https://images.unsplash.com/photo-1502680390469-be75c86b636f?auto=format&fit=crop&q=80&w=800',
    activities: [
      'Beginner surfing lessons with ISA-certified local coaches',
      'Surf guiding trips to secret point breaks along the Southern and Eastern coasts',
      'Kitesurfing expeditions in wind-swept Kalpitiya Lagoon',
      'Stand-up paddleboarding down tranquil coastal rivers'
    ],
    highlights: [
      'Swaying palms at Coconut Point',
      'Right-hand breaks that carry you for up to 400 meters',
      'Surf and yoga camps combining ocean movement with mindful recovery'
    ],
    icon: 'Waves'
  },
  {
    id: 'adventure-hiking',
    title: 'Highland Trekking & Hiking',
    category: 'Adventure',
    description: 'Ascend dramatic mountain peaks, pass through emerald-green tea estates, and gaze down towering drop-offs. Sri Lanka’s mountainous heartland features spectacular trekking for all experience levels.',
    image: 'https://images.unsplash.com/photo-1551632322-35950d9499d0?auto=format&fit=crop&q=80&w=800',
    activities: [
      'Challenging hikes up the rocky paths of Ella Rock',
      'Sunrise walks up Little Adam’s Peak under fresh breezes',
      'Long-distance trekking on the newly launched Pekoe Trail through the tea region',
      'Conquering the holy pilgrimage summit of Sri Pada (Adam’s Peak) at midnight'
    ],
    highlights: [
      'Gazing over the 1,000-meter drop at World’s End cliff in Horton Plains',
      'Strolling legendary historical pathways lined with century-old tea bushes',
      'Watching the magical sky transition at sunrise above misty valleys'
    ],
    icon: 'Mountain'
  },
  {
    id: 'wildlife-safari',
    title: 'Big Game Safari & Bush Camps',
    category: 'Wildlife',
    description: 'Immerse yourself in legendary jungle landscapes. Trace roaring leopards over rocky outcrops in Yala, observe gargantuan elephant gatherings in Minneriya, or trace lazy sloth bears in Wilpattu.',
    image: 'https://images.unsplash.com/photo-1547407139-3c921a66005c?auto=format&fit=crop&q=80&w=800',
    activities: [
      'Private 4x4 evening safaris led by expert wildlife naturalists',
      'Glamping in ultra-luxury, custom bush tents under starry skies',
      'Night safaris tracking nocturnal slender lorises',
      'Birdwatching walks in lush wetland reserves'
    ],
    highlights: [
      'Witnessing "The Gathering" of over 300 wild elephants at Minneriya Lake',
      'Perfect wildlife photography setups to capture leopards and peacocks',
      'Hearing the midnight jungle orchestra around your luxury tented camp'
    ],
    icon: 'Compass'
  },
  {
    id: 'wildlife-marine',
    title: 'Blue Whale & Ocean Expeditions',
    category: 'Wildlife',
    description: 'Ocean trenches close to Sri Lanka’s southern tip make it the best place on Earth to observe the colossal Blue Whale. Journey with marine biologists to witness whales, dolphins, and turtles in their deep home.',
    image: 'https://images.unsplash.com/photo-1568430462989-44163eb1752f?auto=format&fit=crop&q=80&w=800',
    activities: [
      'Luxury catamaran charters in Mirissa or Trincomalee with gourmet snacks',
      'Educational whale-watching tours with marine mammal scientists',
      'Snorkeling with wild green turtles in coastal bays',
      'Diving historical deep-water shipwrecks off the Galle coast'
    ],
    highlights: [
      'Seeing the majestic tail-flukes of massive blue whales up close',
      'Pods of hundreds of playful spinning dolphins escorting your vessel',
      'Learning ocean conservation and stewardship directly from researchers'
    ],
    icon: 'Fish'
  },
  {
    id: 'cultural-temple',
    title: 'Ancient Temples & Sacred Rituals',
    category: 'Cultural',
    description: 'Journey back 2,500 years into deep-rooted spirituality. Visit architectural wonders, massive brick dome stupas, and witness vibrant temple ceremonies filled with drumming, oil lamps, and incense.',
    image: 'https://images.unsplash.com/photo-1565008447742-97f6f38c985c?auto=format&fit=crop&q=80&w=800',
    activities: [
      'Experiencing the incense-scented puja chanting at Kandy’s Temple of the Tooth Relic',
      'Wandering the sacred, ancient monasteries of Anuradhapura and Polonnaruwa',
      'Observing the creation of ancient hand-painted murals inside Dambulla Cave Temple',
      'Receiving a traditional blessing thread from a senior Buddhist monk'
    ],
    highlights: [
      'Walking barefoot on sun-warmed stone flags within colossal ancient plazas',
      'Hearing deep Kandyan drums echo beneath golden temple ceilings',
      'Fascinating architectural tours of structures older than the Roman temples'
    ],
    icon: 'Milestone'
  },
  {
    id: 'cultural-village',
    title: 'Village Culture & Heritage Culinary',
    category: 'Cultural',
    description: 'Connect authentically with local hearts. Share meals in rural farmhouses, paddle across lotus-covered lakes, and learn the intricate art of Sri Lankan spice roasting from generational village cooks.',
    image: 'https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?auto=format&fit=crop&q=80&w=800',
    activities: [
      'Traditional catamaran boat rides on lotus lakes to organic family farms',
      'Authentic clay-pot rice and curry culinary masterclasses',
      'Learning the ancient art of weaving and pottery from master craftspeople',
      'Harvesting fresh cinnamon bark with estate farmers'
    ],
    highlights: [
      'Tasting over 15 unique, colorful curries flavored with hand-ground coconut milk',
      'Charming clay-hut village dining served on fresh banana leaves',
      'Deep, heartwarming smiles and stories shared over sweet ginger tea'
    ],
    icon: 'Utensils'
  },
  {
    id: 'nature-tea',
    title: 'Tea Estates & Scenic Rail',
    category: 'Nature',
    description: 'Discover the story behind your morning cup. Wander through emerald-green valleys of tea, learn the art of hand-plucking tea leaves, and ride the classic old-world train through mist-laden mountain passes.',
    image: 'https://images.unsplash.com/photo-1555899434-94d1368aa7af?auto=format&fit=crop&q=80&w=800',
    activities: [
      'Plucking fresh tea leaves alongside estate ladies wearing colorful sarees',
      'Private reserve tastings of highly prized, hand-rolled White Silver Tip tea',
      'Riding the legendary Kandy-to-Ella scenic train through tunnels and pine forests',
      'Staying inside beautifully restored Victorian Scotch tea planter bungalows'
    ],
    highlights: [
      'Incredible photo-ready moments hanging out the open doorways of the vintage train',
      'Fresh mountain air laced with the sweet, herbal aroma of curing tea leaves',
      'Panoramic, endless green horizons that look like oil paintings'
    ],
    icon: 'Leaf'
  },
  {
    id: 'wellness-ayurveda',
    title: 'Ayurveda Retreats & Yoga',
    category: 'Wellness',
    description: 'Heal your body, mind, and spirit using ancient ayurvedic treatments. Guided by qualified doctors, experience customized herbal therapies, dynamic yoga, and sound meditation in tropical gardens.',
    image: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&q=80&w=800',
    activities: [
      'Personal pulse readings and dietary consults with qualified Ayurvedic doctors',
      'Decoction steam-baths and full-body synchronized oil massages (Abhyanga)',
      'Sunrise yoga and pranayama sessions overlooking pristine oceans or mist-veiled lakes',
      'Forest bathing and sound bowl healing therapies'
    ],
    highlights: [
      'Warm herbal oils poured onto your forehead (Shirodhara) inside natural pavilions',
      'Organic, customized farm-to-table meals tailored to your specific dosha type',
      'Re-emerging into the world with profound clarity, lightness, and vitality'
    ],
    icon: 'HeartPulse'
  }
];

export const tours: Tour[] = [
  {
    id: 'highlights-3d',
    name: '3-Day Sri Lanka Highlights Tour',
    type: 'multi-day',
    category: 'Highlights',
    duration: '3 Days / 2 Nights',
    destinations: ['Kandy', 'Sigiriya', 'Dambulla'],
    highlights: [
      'Scale the colossal Sigiriya Lion Rock fortress',
      'Visit the cave temples of Dambulla with ancient wall paintings',
      'Worship at the Temple of the Sacred Tooth Relic in hill capital Kandy',
      'Watch a traditional Kandyan cultural dance and fire-walking show'
    ],
    includes: [
      'Chauffeur-driven luxury AC sedan/SUV with free Wi-Fi',
      '4-star / 5-star colonial or boutique accommodations with half-board',
      'All entrance tickets and guided site walking tours',
      'Comimentary mineral bottled water and refreshing tropical coconuts'
    ],
    isPopular: false
  },
  {
    id: 'cultural-5d',
    name: '5-Day Cultural Triangle & Hills Tour',
    type: 'multi-day',
    category: 'Cultural',
    duration: '5 Days / 4 Nights',
    destinations: ['Anuradhapura', 'Polonnaruwa', 'Sigiriya', 'Kandy', 'Nuwara Eliya'],
    highlights: [
      'Cycle amidst the massive ruins of the medieval Polonnaruwa kingdom',
      'Scale Sigiriya Lion Rock and sunrise trek Pidurangala Rock',
      'Walk inside the sacred 2,300-year-old Bodhi-tree garden in Anuradhapura',
      'Tour a historic working tea estate and taste Ceylon Silver Tips'
    ],
    includes: [
      'English-speaking certified National Guide with luxury AC minivan',
      'Bespoke handpicked boutique hotels with gourmet breakfast and dinners',
      'Bicycle hire and private historical guide services',
      'All toll, fuel, and driver lodging fees included'
    ],
    isPopular: true
  },
  {
    id: 'adventure-7d',
    name: '7-Day Pure Adventure & Hiking Quest',
    type: 'multi-day',
    category: 'Adventure',
    duration: '7 Days / 6 Nights',
    destinations: ['Kandy', 'Nuwara Eliya', 'Horton Plains', 'Ella', 'Yala National Park'],
    highlights: [
      'Epic mountain hike up the Ella Rock trail',
      'Morning trek in Horton Plains to stand at World’s End precipice',
      'The world-famous blue train mountain ride from Nanu Oya to Ella',
      'Thrilling leopard and elephant 4x4 safaris in Yala'
    ],
    includes: [
      'Highly experienced adventure chauffeur guide with rugged 4x4 or SUV',
      'Premium eco-lodges, boutique cabins, and luxury jungle camps',
      'First-class observation train tickets',
      'Qualified trekking guides, park entrance fees, and safari jeeps'
    ],
    isPopular: false
  },
  {
    id: 'complete-10d',
    name: '10-Day Complete Pearl of the Ocean Experience',
    type: 'multi-day',
    category: 'Highlights',
    duration: '10 Days / 9 Nights',
    destinations: ['Galle', 'Mirissa', 'Yala', 'Ella', 'Nuwara Eliya', 'Kandy', 'Sigiriya'],
    highlights: [
      'Climb majestic Sigiriya Lion Rock and historical temples',
      'Gaze over Ella valleys and photograph the Nine Arch Bridge',
      'Spot wild leopards in Yala and blue whales in Mirissa',
      'Walk the colonial cobblestones and ramparts of Galle Fort'
    ],
    includes: [
      'Experienced English-speaking tour manager with premium luxury AC vehicle',
      '5-star luxury resorts, heritage bungalows, and premium safari camps',
      'Private whale-watching yacht charter and private Yala safari jeep',
      'Daily premium breakfast, gourmet dinners, and afternoon teas'
    ],
    isPopular: true
  },
  {
    id: 'surf-stay',
    name: 'Surf & Yoga Luxury Stay Package',
    type: 'experience',
    category: 'Surf & Stay',
    duration: '6 Days / 5 Nights',
    destinations: ['Weligama', 'Mirissa', 'Arugam Bay'],
    highlights: [
      'Daily 1-on-1 surf coaching tailored to your current level',
      'Restorative sunset yin yoga and sound bath meditation',
      'Gourmet healthy coastal breakfast bowls and fresh seafood barbecues',
      'Premium photo & video analysis of your surfing posture and style'
    ],
    includes: [
      'Ocean-view boutique surf lodge lodging with private balcony',
      'High-performance surfboard rentals and rash guards',
      'Professional surf photographer capturing your rides',
      'Airport luxury class return transfers'
    ],
    isPopular: false
  },
  {
    id: 'honeymoon-escape',
    name: 'Bespoke Island Honeymoon Luxury Escape',
    type: 'experience',
    category: 'Honeymoon Package',
    duration: '8 Days / 7 Nights',
    destinations: ['Bentota', 'Nuwara Eliya', 'Ella', 'Galle Fort'],
    highlights: [
      'Private candlelit dinner on the golden sands of Bentota beach',
      'Scenic helicopter transfer option or premium luxury vehicle travel',
      'Luxury high tea and couple’s deep tissue Ayurvedic flower massage',
      'Guided historical couples photowalk inside Galle Dutch Fort'
    ],
    includes: [
      'Ultra-luxury 5-star honeymoon suites with private plunge pools',
      'Daily chilled champagne, tropical flowers, and gourmet chocolates',
      'Private chauffeur with luxury executive vehicle',
      'All bespoke experiences: private boat charter, private massage'
    ],
    isPopular: true
  },
  {
    id: 'wildlife-luxury',
    name: 'Grand Wildlife & Elephant Safari Package',
    type: 'experience',
    category: 'Wildlife Safari',
    duration: '5 Days / 4 Nights',
    destinations: ['Minneriya', 'Wilpattu', 'Yala National Park'],
    highlights: [
      'Marvel at the gathering of hundreds of wild elephants in Minneriya',
      'Trace leopards and wild bears in their natural dry-zone territory',
      'Exclusive night-vision game drives using thermal scopes',
      'Champagne bush picnic inside scenic locations near national parks'
    ],
    includes: [
      'Private expert wildlife biologist and tracking guide',
      'State-of-the-art ultimate 4x4 safari vehicle equipped with binoculars',
      'Ultra-luxury tented glamping suites (all-inclusive meals & premium bar)',
      'All National Park fees, permits, and private wildlife trackers'
    ],
    isPopular: false
  }
];

export const blogPosts: BlogPost[] = [
  {
    id: 'blog1',
    title: 'The Ultimate Guide to Riding the Legendary Kandy-to-Ella Train',
    category: 'Insider Guides',
    excerpt: 'Everything you need to know about purchasing tickets, securing the best side of the carriage, and enjoying the world’s most scenic rail journey.',
    date: 'June 12, 2026',
    readTime: '6 min read',
    author: 'Pradeep Silva (Local Expert)',
    image: 'https://images.unsplash.com/photo-1546708973-b339540b5162?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'blog2',
    title: 'Climbing Sigiriya: 7 Critical Tips to Beat the Heat and the Crowd',
    category: 'Travel Tips',
    excerpt: 'Avoid the lines and climbing heat. Our local agency shares secrets for climbing the ancient Lion Rock fortress and nearby Pidurangala.',
    date: 'May 28, 2026',
    readTime: '5 min read',
    author: 'Dilhani Perera',
    image: 'https://images.unsplash.com/photo-1588598130841-3837f8a35e74?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'blog3',
    title: 'Beyond Curry: A Culinary Exploration of Sri Lanka’s Rich Spices',
    category: 'Culture & Food',
    excerpt: 'From string hoppers to black pork curry, discover the historical spice routes and regional culinary techniques that define modern Lankan dishes.',
    date: 'April 15, 2026',
    readTime: '8 min read',
    author: 'Chef Kumara Bandara',
    image: 'https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?auto=format&fit=crop&q=80&w=800'
  }
];

export const faqs: FAQItem[] = [
  {
    category: 'Planning',
    question: 'Do I need a visa to visit Sri Lanka?',
    answer: 'Yes, most international travelers need a Electronic Travel Authorization (ETA) or tourist visa to enter Sri Lanka. You can easily apply online in advance at the official eta.gov.lk portal or purchase a visa on arrival. Ensure your passport is valid for at least 6 months from your arrival date.'
  },
  {
    category: 'Planning',
    question: 'When is the absolute best time to travel to Sri Lanka?',
    answer: 'Sri Lanka is a year-round travel destination because it experiences two distinct monsoon seasons on opposite coasts. For the west/south coasts and hill country, the best weather is from December to April. For the east coast (Arugam Bay, Trincomalee), the best weather is from May to September. This means you’ll always find spectacular sunshine somewhere!'
  },
  {
    category: 'Tours',
    question: 'Can we build custom itineraries or modify existing ones?',
    answer: 'Absolutely! Tailor-made tours are our primary specialty. You can use our interactive Custom Tour Builder on the Tours page or contact our travel experts directly to customize destinations, accommodation luxury tier, travel dates, and pace. We create itineraries that fit you perfectly.'
  },
  {
    category: 'Travel Tips',
    question: 'Is Sri Lanka safe for solo travelers and families?',
    answer: 'Yes, Sri Lanka is widely considered extremely safe, warm, and welcoming for international families, couples, and solo travelers alike. Local people are incredibly hospitable. We provide 24/7 client support and trace our vehicles via GPS inside our operation center to ensure absolute comfort.'
  },
  {
    category: 'Travel Tips',
    question: 'What is the local currency and are credit cards accepted?',
    answer: 'The local currency is the Sri Lankan Rupee (LKR). While luxury hotels, fine restaurants, and tourist boutiques accept Visa and Mastercard, smaller village boutiques, street tuck-tucks, and local markets operate strictly on cash. We recommend carrying some cash, which you can withdraw from ATMs across major towns.'
  }
];
