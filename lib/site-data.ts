export type NavItem = {
  label: string;
  href: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type ServiceListItem = {
  title: string;
  summary: string;
  href?: string;
};

export type ServicePageData = {
  slug: string;
  title: string;
  summary: string;
  heroCopy: string;
  image: string;
  imageAlt: string;
  includes: string[];
  problems: Array<{
    title: string;
    description: string;
  }>;
  benefits: string[];
  process: Array<{
    title: string;
    description: string;
  }>;
  faqs: FaqItem[];
  metaTitle: string;
  metaDescription: string;
};

export type ProjectCard = {
  title: string;
  category: string;
  location: string;
  description: string;
  image: string;
  imageAlt: string;
  deliverables: string[];
};

export type ReviewPlaceholder = {
  quote: string;
  name: string;
  location: string;
  service: string;
};

export const brand = {
  businessName: "[Business Name]",
  phone: "[Phone Number]",
  phoneHref: "tel:[Phone Number]",
  email: "[Email Address]",
  emailHref: "mailto:[Email Address]",
  city: "[City]",
  serviceArea: "[Service Area]",
  address: "[Address]",
  nearbyAreas: ["[Nearby Area 1]", "[Nearby Area 2]", "[Nearby Area 3]"],
  metaSiteUrl: "https://example.com",
};

export const siteImages = {
  hero:
    "https://images.pexels.com/photos/4258282/pexels-photo-4258282.jpeg?auto=compress&cs=tinysrgb&w=1400",
  mowing:
    "https://images.pexels.com/photos/6728930/pexels-photo-6728930.jpeg?auto=compress&cs=tinysrgb&w=1200",
  trimming:
    "https://images.pexels.com/photos/24595769/pexels-photo-24595769.jpeg?auto=compress&cs=tinysrgb&w=1200",
  pruning:
    "https://images.pexels.com/photos/12142540/pexels-photo-12142540.jpeg?auto=compress&cs=tinysrgb&w=1200",
  cleanup:
    "https://images.pexels.com/photos/29192617/pexels-photo-29192617.jpeg?auto=compress&cs=tinysrgb&w=1200",
  backyard:
    "https://images.pexels.com/photos/17240696/pexels-photo-17240696.jpeg?auto=compress&cs=tinysrgb&w=1400",
  frontYard:
    "https://images.pexels.com/photos/8583592/pexels-photo-8583592.jpeg?auto=compress&cs=tinysrgb&w=1200",
  lawn:
    "https://images.pexels.com/photos/4529496/pexels-photo-4529496.jpeg?auto=compress&cs=tinysrgb&w=1400",
  path:
    "https://images.pexels.com/photos/13465670/pexels-photo-13465670.jpeg?auto=compress&cs=tinysrgb&w=1200",
  snow:
    "https://images.pexels.com/photos/6952450/pexels-photo-6952450.jpeg?auto=compress&cs=tinysrgb&w=1200",
};

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Gallery", href: "/gallery" },
  { label: "Reviews", href: "/reviews" },
  { label: "Service Areas", href: "/service-areas" },
  { label: "Contact", href: "/contact" },
];

export const trustPoints = [
  "Free quotes and clear communication",
  "Residential and small commercial service",
  "Respectful crews and clean job sites",
  "Year-round exterior property care",
];

export const heroHighlights = [
  "Local lawn care in [City]",
  "Recurring maintenance and one-time cleanups",
  "Simple scheduling for busy homeowners and properties",
];

export const whyChooseUs = [
  {
    title: "Dependable scheduling",
    description:
      "Set a recurring plan or seasonal visit with clear expectations, arrival windows, and follow-through.",
  },
  {
    title: "Work that looks finished",
    description:
      "Sharp lines, tidy trimming, and clean cleanups make the property feel cared for instead of just cut.",
  },
  {
    title: "Easy local communication",
    description:
      "Quotes, updates, and service changes stay straightforward so customers always know what is happening.",
  },
  {
    title: "One crew for the full exterior",
    description:
      "From lawn mowing to landscaping, seasonal work, and snow removal, the same brand can cover the full property.",
  },
];

export const processSteps = [
  {
    title: "Request a free quote",
    description:
      "Share the property details, service needs, and timing so the scope is easy to understand from the start.",
  },
  {
    title: "Get a practical plan",
    description:
      "Receive a service recommendation based on the yard, the season, and how polished you want the property to look.",
  },
  {
    title: "Schedule the work",
    description:
      "Choose recurring service or one-time help for mowing, cleanup, landscaping, mulch, or winter work.",
  },
  {
    title: "Enjoy a cleaner property",
    description:
      "The goal is simple: a lawn and landscape that feels consistent, cared for, and easy to take pride in.",
  },
];

export const homepageServiceCards: ServiceListItem[] = [
  {
    title: "Lawn mowing",
    summary:
      "Consistent mowing that keeps the yard clean, even, and ready for the week.",
  },
  {
    title: "Edging and trimming",
    summary:
      "Sharp sidewalks, beds, fences, and edges that make the property look finished.",
  },
  {
    title: "Seasonal cleanup",
    summary:
      "Leaf removal, storm debris cleanup, and seasonal resets for a fresh-looking yard.",
  },
  {
    title: "Landscaping",
    summary:
      "Planting, bed refreshes, mulch installation, and curb appeal improvements.",
  },
  {
    title: "Bush and hedge trimming",
    summary:
      "Shape overgrown greenery and keep shrubs controlled around the home or business.",
  },
  {
    title: "Snow removal",
    summary:
      "Reliable winter clearing to help keep driveways, walks, and entry points usable.",
  },
];

export const allServices: ServiceListItem[] = [
  { title: "Lawn mowing", summary: "Scheduled mowing for a clean, uniform cut." },
  { title: "Edging", summary: "Defined sidewalks, patios, curbs, and bed lines." },
  { title: "Trimming", summary: "Tidy detail work around fences, posts, and obstacles." },
  {
    title: "Lawn maintenance",
    summary: "Recurring mowing, edging, trimming, and appearance upkeep.",
    href: "/lawn-maintenance",
  },
  { title: "Yard cleanup", summary: "Debris pickup and reset work for neglected yards." },
  {
    title: "Seasonal cleanup",
    summary: "Spring and fall cleanup to keep the property manageable.",
    href: "/seasonal-cleanup",
  },
  {
    title: "Landscaping",
    summary: "Bed refreshes, planting, and curb appeal upgrades.",
    href: "/landscaping",
  },
  { title: "Mulch installation", summary: "Fresh mulch for cleaner beds and stronger contrast." },
  {
    title: "Bush / hedge trimming",
    summary: "Neat shaping and control for overgrown shrubs and hedges.",
  },
  { title: "Property maintenance", summary: "Ongoing exterior upkeep for busy properties." },
  {
    title: "Snow removal",
    summary: "Seasonal clearing for sidewalks, entries, and driveways.",
    href: "/snow-removal",
  },
  {
    title: "Residential and commercial service",
    summary: "Flexible scheduling for homeowners and smaller commercial sites.",
  },
];

export const servicePages: Record<string, ServicePageData> = {
  "lawn-maintenance": {
    slug: "lawn-maintenance",
    title: "Lawn Maintenance",
    summary:
      "Recurring mowing, edging, trimming, and routine yard care that keeps the property looking sharp.",
    heroCopy: `[Business Name] provides dependable lawn maintenance in [City] for homeowners and small commercial properties that want a clean, consistent look without the weekend hassle.`,
    image: siteImages.mowing,
    imageAlt: "Professional mowing a healthy green lawn",
    includes: [
      "Scheduled lawn mowing based on growth and season",
      "Edging along sidewalks, driveways, patios, and beds",
      "String trimming around fences, posts, trees, and obstacles",
      "Cleanup of clippings from hard surfaces",
      "Visual monitoring for overgrowth, patchiness, or problem spots",
      "Flexible service for residential and small commercial properties",
    ],
    problems: [
      {
        title: "The yard looks overgrown too quickly",
        description:
          "Fast grass growth can make the entire property feel messy within days if it is not maintained on schedule.",
      },
      {
        title: "Edges make the home look unfinished",
        description:
          "Even when the lawn is cut, sidewalks and beds still look sloppy if the edges and trim work are skipped.",
      },
      {
        title: "Weekend time keeps disappearing",
        description:
          "Routine yard work is easy to postpone when family, work, and weather all compete for time.",
      },
      {
        title: "Commercial sites need a consistent appearance",
        description:
          "Small offices, rentals, and storefronts need dependable upkeep to stay presentable for visitors and tenants.",
      },
    ],
    benefits: [
      "Cleaner curb appeal week after week",
      "A more polished look around walks, patios, and driveways",
      "Less stress about keeping up with growth in peak season",
      "A predictable service plan that is easy to manage",
    ],
    process: [
      {
        title: "Walk the property",
        description:
          "We start by understanding access points, obstacles, problem areas, and the finish level you want.",
      },
      {
        title: "Recommend the right schedule",
        description:
          "Some properties need weekly visits, while others can stay clean with a different cadence.",
      },
      {
        title: "Handle the recurring work",
        description:
          "Mowing, edging, trimming, and cleanup are completed with consistency and attention to detail.",
      },
      {
        title: "Adjust through the season",
        description:
          "The service plan can shift with growth patterns, weather, and the changing needs of the property.",
      },
    ],
    faqs: [
      {
        question: "How often should lawn maintenance be scheduled?",
        answer:
          "Many properties in [City] look best with weekly or biweekly service during active growth. The ideal schedule depends on the grass, weather, and how manicured you want the property to feel.",
      },
      {
        question: "Do you handle edging and trimming with mowing?",
        answer:
          "Yes. Lawn maintenance can include mowing, edging, trimming, and cleanup so the entire yard feels finished instead of partially done.",
      },
      {
        question: "Can this be set up for a small commercial property?",
        answer:
          "Yes. [Business Name] can serve small commercial sites, rental properties, and homeowner properties throughout [Service Area].",
      },
      {
        question: "Can I request one-time lawn service instead of recurring visits?",
        answer:
          "Yes. One-time service can help reset an overgrown yard, and recurring service can be added later if needed.",
      },
    ],
    metaTitle: "Lawn Maintenance in [City]",
    metaDescription:
      "Recurring lawn mowing, edging, and trimming for homeowners and small commercial properties across [Service Area].",
  },
  landscaping: {
    slug: "landscaping",
    title: "Landscaping",
    summary:
      "Curb appeal upgrades, garden bed refreshes, mulch installation, and clean outdoor presentation work.",
    heroCopy: `[Business Name] offers landscaping services in [City] that help properties feel cleaner, more intentional, and easier to enjoy season after season.`,
    image: siteImages.backyard,
    imageAlt: "Clean backyard landscaping with lawn and patio",
    includes: [
      "Landscape bed cleanup and reshaping",
      "Mulch installation for contrast and cleaner bed definition",
      "Shrub and hedge trimming for controlled growth",
      "Planting support and curb appeal refreshes",
      "Front-yard and backyard visual improvements",
      "Residential and small commercial enhancement work",
    ],
    problems: [
      {
        title: "Beds look tired or washed out",
        description:
          "Faded mulch, weeds, and messy edges can make the rest of the property feel neglected.",
      },
      {
        title: "Shrubs are swallowing the house",
        description:
          "Overgrown bushes and hedge lines pull the eye away from the home and make the exterior look closed in.",
      },
      {
        title: "The yard lacks definition",
        description:
          "When beds, borders, and focal areas blur together, the property loses curb appeal and structure.",
      },
      {
        title: "Outdoor areas are not showing their full potential",
        description:
          "A clean landscape plan helps the home look better from the street and feel more inviting up close.",
      },
    ],
    benefits: [
      "Stronger curb appeal and cleaner visual contrast",
      "A more organized front yard and backyard layout",
      "Healthier-looking beds and controlled shrub growth",
      "A better first impression for guests, neighbors, or customers",
    ],
    process: [
      {
        title: "Review priorities",
        description:
          "We look at the spaces that feel overgrown, empty, or visually flat and identify practical improvements.",
      },
      {
        title: "Build a scope that fits",
        description:
          "Some properties need a simple mulch refresh, while others need a broader cleanup and reshaping plan.",
      },
      {
        title: "Complete the install and cleanup",
        description:
          "Beds are refreshed, hedges are shaped, and the property is left looking tidy and intentional.",
      },
      {
        title: "Plan the next stage if needed",
        description:
          "If the property needs ongoing care, recurring maintenance can keep the improved look in place.",
      },
    ],
    faqs: [
      {
        question: "What landscaping services are included?",
        answer:
          "Landscaping can include mulch installation, bed cleanup, hedge trimming, shrub shaping, and front-yard or backyard refresh work depending on the property.",
      },
      {
        question: "Can you improve curb appeal without a full redesign?",
        answer:
          "Yes. Many properties benefit from practical upgrades like fresh mulch, cleaner edges, trimming, and selective cleanup rather than a full rebuild.",
      },
      {
        question: "Do you work on residential and commercial properties?",
        answer:
          "Yes. [Business Name] is positioned to help both homeowners and smaller commercial properties in [Service Area].",
      },
      {
        question: "Can landscaping be combined with lawn maintenance?",
        answer:
          "Yes. Many clients pair landscaping work with ongoing lawn care to keep the whole property looking consistent.",
      },
    ],
    metaTitle: "Landscaping Services in [City]",
    metaDescription:
      "Mulch installation, bed refreshes, hedge trimming, and curb appeal landscaping services in [City] and [Service Area].",
  },
  "seasonal-cleanup": {
    slug: "seasonal-cleanup",
    title: "Seasonal Cleanup",
    summary:
      "Spring and fall cleanup, leaf removal, debris clearing, and reset work that gets the property back under control.",
    heroCopy: `[Business Name] provides seasonal cleanup in [City] for homeowners and property managers who want the yard cleared, refreshed, and ready for the next stretch of the season.`,
    image: siteImages.cleanup,
    imageAlt: "Seasonal yard cleanup with leaves being raked",
    includes: [
      "Leaf removal from lawn areas, beds, and corners",
      "Storm debris pickup and branch cleanup",
      "Basic yard reset for overgrown seasonal buildup",
      "Bed cleanup to improve overall presentation",
      "Preparation for spring growth or fall shutdown",
      "Cleanup service for homes and small commercial sites",
    ],
    problems: [
      {
        title: "Leaves and debris take over fast",
        description:
          "A yard can feel neglected quickly when leaves pile up along fences, beds, and walks.",
      },
      {
        title: "The property never feels fully reset",
        description:
          "Without a seasonal cleanup, even ongoing mowing can leave the lawn feeling incomplete.",
      },
      {
        title: "Changing seasons create extra work",
        description:
          "Spring openings and fall cleanup both bring time-sensitive outdoor jobs that are easy to postpone.",
      },
      {
        title: "Vacant or rental properties need a quick refresh",
        description:
          "A cleanup visit can help restore a better first impression before a property showing, tenant turnover, or new season.",
      },
    ],
    benefits: [
      "A property that feels reset instead of buried in seasonal buildup",
      "Cleaner lawns, beds, entry points, and corners",
      "A smoother transition into the next phase of lawn or landscape care",
      "Less stress around spring startup and fall leaf season",
    ],
    process: [
      {
        title: "Assess the seasonal buildup",
        description:
          "We identify leaf volume, debris, trouble spots, and any areas that need extra attention.",
      },
      {
        title: "Clear the visible clutter",
        description:
          "Leaves, branches, and buildup are removed from the places that make the property feel messy.",
      },
      {
        title: "Refine the finish",
        description:
          "Beds, edges, and lawn areas are left looking more open, organized, and ready for the season ahead.",
      },
      {
        title: "Recommend follow-up care",
        description:
          "If needed, maintenance or landscaping can be scheduled next to keep momentum going.",
      },
    ],
    faqs: [
      {
        question: "What time of year is seasonal cleanup most useful?",
        answer:
          "Spring and fall are the most common times, but cleanup can also help after storms, heavy leaf drop, or periods of neglect.",
      },
      {
        question: "Do you haul away leaves and yard debris?",
        answer:
          "The exact cleanup scope can be customized, including removal of visible leaves, debris, and light seasonal buildup around the property.",
      },
      {
        question: "Can cleanup be paired with mowing or trimming?",
        answer:
          "Yes. Seasonal cleanup is often combined with mowing, edging, trimming, or landscaping work to create a more complete reset.",
      },
      {
        question: "Do you serve both homes and small commercial properties?",
        answer:
          "Yes. Seasonal cleanup is available for residential properties and smaller commercial sites throughout [Service Area].",
      },
    ],
    metaTitle: "Seasonal Cleanup in [City]",
    metaDescription:
      "Spring and fall yard cleanup, leaf removal, and debris clearing in [City] for residential and commercial properties.",
  },
  "snow-removal": {
    slug: "snow-removal",
    title: "Snow Removal",
    summary:
      "Winter property support for sidewalks, entry paths, driveways, and other key access points.",
    heroCopy: `[Business Name] offers snow removal in [City] to help homeowners and small commercial properties stay more accessible, safer to approach, and easier to manage during winter weather.`,
    image: siteImages.snow,
    imageAlt: "Snow removal work on a residential property",
    includes: [
      "Driveway and walk clearing based on the service plan",
      "Entry path and sidewalk snow removal",
      "Winter response for homes and smaller commercial properties",
      "Priority focus on usable access and cleaner arrival points",
      "Seasonal scheduling for recurring winter needs",
      "Simple communication when weather events are approaching",
    ],
    problems: [
      {
        title: "Snow blocks the most important access points",
        description:
          "Driveways, steps, and walkways become frustrating fast when winter weather piles up around the home or building.",
      },
      {
        title: "Property access becomes a safety concern",
        description:
          "Customers, tenants, family members, and guests all notice when key walk areas are not being cleared reliably.",
      },
      {
        title: "Storm timing is hard to manage",
        description:
          "Snow events rarely arrive at convenient times, which makes dependable winter support valuable.",
      },
      {
        title: "Seasonal needs change property to property",
        description:
          "Some sites need recurring winter service while others only need help during heavier events.",
      },
    ],
    benefits: [
      "Cleaner access to driveways, entries, and walkways",
      "A more dependable winter plan during snow events",
      "Less scrambling when storms affect the schedule",
      "A year-round brand position instead of a seasonal-only business",
    ],
    process: [
      {
        title: "Define the priority areas",
        description:
          "We identify the driveways, steps, entries, and paths that matter most during winter weather.",
      },
      {
        title: "Set expectations before the season",
        description:
          "The service plan can cover recurring visits or event-based support depending on the property.",
      },
      {
        title: "Respond to winter conditions",
        description:
          "Snow is cleared from the agreed access points so the property is more usable and presentable.",
      },
      {
        title: "Adjust with the weather",
        description:
          "Service timing can flex with storm intensity, property type, and ongoing winter conditions.",
      },
    ],
    faqs: [
      {
        question: "What areas can snow removal cover?",
        answer:
          "Typical service can include driveways, walkways, entry paths, and other access points based on the property layout and service plan.",
      },
      {
        question: "Can snow removal be scheduled for a commercial property?",
        answer:
          "Yes. [Business Name] can provide snow removal support for homeowners and smaller commercial properties in [Service Area].",
      },
      {
        question: "Do I need a seasonal plan or can I request help as needed?",
        answer:
          "Both approaches can work. Some properties prefer a seasonal agreement while others request winter service based on conditions.",
      },
      {
        question: "Can I bundle snow removal with lawn and landscape service?",
        answer:
          "Yes. Offering year-round service makes it easier to keep one trusted team involved across every season.",
      },
    ],
    metaTitle: "Snow Removal in [City]",
    metaDescription:
      "Residential and small commercial snow removal in [City] for driveways, sidewalks, entry paths, and winter property access.",
  },
};

export const featuredProjects: ProjectCard[] = [
  {
    title: "Weekly curb appeal reset",
    category: "Maintenance",
    location: "[City]",
    description:
      "Use this slot for a recurring mowing and edging project that shows clean stripes, sharp borders, and a tidy front approach.",
    image: siteImages.hero,
    imageAlt: "Landscaped front yard with healthy lawn",
    deliverables: ["Lawn mowing", "Edging", "Trimming"],
  },
  {
    title: "Backyard refresh and cleanup",
    category: "Cleanup",
    location: "[Service Area]",
    description:
      "Perfect for a before-and-after example featuring cleanup work, overgrowth control, and a more usable outdoor living space.",
    image: siteImages.backyard,
    imageAlt: "Residential backyard with lawn and patio",
    deliverables: ["Yard cleanup", "Hedge trimming", "Mulch touch-up"],
  },
  {
    title: "Landscape bed upgrade",
    category: "Landscaping",
    location: "[Nearby Area 1]",
    description:
      "Use this card to highlight mulch installation, shrub shaping, and a cleaner front-yard presentation.",
    image: siteImages.path,
    imageAlt: "Landscaped garden path with lush greenery",
    deliverables: ["Landscaping", "Mulch installation", "Property maintenance"],
  },
  {
    title: "Small commercial upkeep",
    category: "Commercial",
    location: "[Nearby Area 2]",
    description:
      "Show a consistent service plan for a small office, storefront, church, or rental property that needs dependable exterior care.",
    image: siteImages.frontYard,
    imageAlt: "Well-kept front yard outside a residential-style property",
    deliverables: ["Lawn maintenance", "Seasonal cleanup", "Property maintenance"],
  },
  {
    title: "Bush and hedge reshaping",
    category: "Detail Work",
    location: "[City]",
    description:
      "A strong place to feature overgrown shrubs brought back into proportion around entrances, windows, and beds.",
    image: siteImages.trimming,
    imageAlt: "Professional trimming a hedge in a garden",
    deliverables: ["Bush trimming", "Hedge trimming", "Landscape cleanup"],
  },
  {
    title: "Winter access support",
    category: "Snow Removal",
    location: "[Service Area]",
    description:
      "Use this project slot for driveway and sidewalk clearing that shows reliable winter support for customers or residents.",
    image: siteImages.snow,
    imageAlt: "Residential snow shoveling service",
    deliverables: ["Snow removal", "Entry clearing", "Property access"],
  },
];

export const reviewPlaceholders: ReviewPlaceholder[] = [
  {
    quote:
      "[Add a real customer review here about dependable scheduling, clean edging, and how much better the property looked after service.]",
    name: "[Customer Name]",
    location: "[City]",
    service: "Lawn maintenance",
  },
  {
    quote:
      "[Add a real review here about easy communication, quick quotes, and a crew that was easy to work with.]",
    name: "[Customer Name]",
    location: "[Nearby Area 1]",
    service: "Landscaping",
  },
  {
    quote:
      "[Add a real review here about cleanup, professionalism, or how the team handled a seasonal project from start to finish.]",
    name: "[Customer Name]",
    location: "[Service Area]",
    service: "Seasonal cleanup",
  },
  {
    quote:
      "[Replace with a winter review that speaks to responsiveness, clear access, and reliable snow removal service.]",
    name: "[Customer Name]",
    location: "[Nearby Area 2]",
    service: "Snow removal",
  },
];

export const homeFaqs: FaqItem[] = [
  {
    question: "What kinds of properties do you service?",
    answer:
      "[Business Name] is positioned for homeowners and small commercial properties that want dependable lawn care, landscaping, cleanup, and winter support.",
  },
  {
    question: "Do you offer one-time work or recurring service?",
    answer:
      "Both. Customers can request one-time cleanup or landscaping work, or set up ongoing lawn maintenance depending on the property.",
  },
  {
    question: "What lawn care services can be bundled together?",
    answer:
      "Common bundles include mowing, edging, trimming, cleanup, mulch installation, hedge trimming, and seasonal property maintenance.",
  },
  {
    question: "Do you serve areas outside [City]?",
    answer:
      "Yes. Service can extend across [Service Area] and nearby areas such as [Nearby Area 1] and [Nearby Area 2].",
  },
  {
    question: "How do I request a quote?",
    answer:
      "Use the quote form, call [Phone Number], or email [Email Address] to share the property details and services you need.",
  },
];

export const serviceAreaSections = [
  {
    name: "[City]",
    copy:
      "Offer lawn care in [City] with messaging that speaks to dependable mowing, local reliability, and clean curb appeal for nearby homes and small commercial sites.",
  },
  {
    name: "[Nearby Area 1]",
    copy:
      "Position this section for landscaping services near [Nearby Area 1], including bed refreshes, mulch installation, trimming, and property maintenance.",
  },
  {
    name: "[Nearby Area 2]",
    copy:
      "Use this area block for yard cleanup and mowing near [Nearby Area 2], especially for properties that need a quick visual reset.",
  },
  {
    name: "[Service Area]",
    copy:
      "This section should explain the wider service footprint and reinforce that residential and commercial lawn care is available across [Service Area].",
  },
];

export const privacySections = [
  {
    title: "Information You Provide",
    body:
      "When a visitor fills out the quote form, [Business Name] may collect basic contact details such as name, phone, email, property type, requested service, and message content.",
  },
  {
    title: "How Information Is Used",
    body:
      "This information can be used to respond to quote requests, schedule service conversations, answer questions, and improve communication with current or prospective customers.",
  },
  {
    title: "Sharing and Protection",
    body:
      "[Business Name] should only share customer information when needed to operate the business or comply with legal requirements, and should take reasonable steps to protect submitted information.",
  },
  {
    title: "Updates",
    body:
      "This privacy policy can be revised over time as the business, website tools, or form handling process changes. Replace this copy with the final legal language that fits the business.",
  },
];

export const footerLinks = {
  company: [
    { label: "About", href: "/about" },
    { label: "Reviews", href: "/reviews" },
    { label: "Contact", href: "/contact" },
  ],
  services: [
    { label: "Services", href: "/services" },
    { label: "Lawn Maintenance", href: "/lawn-maintenance" },
    { label: "Landscaping", href: "/landscaping" },
    { label: "Seasonal Cleanup", href: "/seasonal-cleanup" },
    { label: "Snow Removal", href: "/snow-removal" },
  ],
  resources: [
    { label: "Gallery", href: "/gallery" },
    { label: "Service Areas", href: "/service-areas" },
    { label: "Free Quote", href: "/contact" },
    { label: "Privacy Policy", href: "/privacy-policy" },
  ],
};

export const siteRoutes = [
  "/",
  "/about",
  "/services",
  "/lawn-maintenance",
  "/landscaping",
  "/seasonal-cleanup",
  "/snow-removal",
  "/gallery",
  "/reviews",
  "/service-areas",
  "/contact",
  "/thank-you",
  "/privacy-policy",
];

export function getServicePage(slug: string) {
  return servicePages[slug];
}
