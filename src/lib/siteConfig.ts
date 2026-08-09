export const siteConfig = {
  businessName: "Clean&Care",
  tagline: "Professional Cleaning & Maintenance",
  heroServices: [
    "Solar Panel Cleaning",
    "AC Cleaning",
    "Water Tank Cleaning",
    "CCTV Installation",
  ],
  heroDescription:
    "We provide reliable and high-quality cleaning and installation services for homes and businesses. Your satisfaction is our priority.",
  phone: "0321-3816401",
  phoneHref: "tel:+923213816401",
  phoneSecondary: "0300-8838975",
  phoneSecondaryHref: "tel:+923008838975",
  whatsappHref: "https://wa.me/923213816401",
  email: "irtezaarshad231@gmail.com",
  serviceCity: "Lahore",
  serviceAreas: [
    "DHA Phase 1",
    "DHA Phase 2",
    "DHA Phase 3",
    "DHA Phase 4",
    "DHA Phase 5",
    "DHA Phase 6",
    "DHA Phase 7",
    "DHA Phase 8",
    "DHA Phase 9",
    "Askari 10",
    "Askari 11",
    "Sui Gas Society",
    "Formanites Housing Society",
    "State Life Housing Society",
    "Other Lahore Area",
  ],
  serviceAreaGroups: [
    {
      label: "DHA Lahore",
      areas: "Phase 1, Phase 2, Phase 3, Phase 4, Phase 5, Phase 6, Phase 7, Phase 8, Phase 9, and all other phases",
    },
    {
      label: "Askari",
      areas: "Askari 10 and Askari 11",
    },
    {
      label: "Housing Societies",
      areas: "Sui Gas Society, Formanites Housing Society, State Life Housing Society",
    },
    {
      label: "Other Surrounding Areas",
      areas: "Available across all major nearby locations in Lahore",
    },
  ],
  pricing: {
    solar: {
      perPlate: 950,
      note: "More panels = more discount.",
    },
    ac: {
      first: 3500,
      additional: 2500,
      note: "First unit Rs. 3,500 — additional units Rs. 2,500 each.",
    },
    waterTank: {
      first: 3500,
      additional: 3000,
      note: "First tank Rs. 3,500 — additional tanks Rs. 3,000 each.",
    },
    cctv: {
      packagePrice: 30000,
      includes: [
        "4 Cameras (2MP)",
        "1 DVR",
        "500GB Hard Drive",
        "100ft Wire",
        "Complete Installation",
      ],
      note: "This is our basic CCTV plan — it can be enhanced based on your requirements.",
    },
  },
} as const;
