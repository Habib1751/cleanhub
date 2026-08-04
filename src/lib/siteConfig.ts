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
      deliveryFuelFrom: 1100,
      note: "Delivery & fuel charges start from Rs. 1,100 and vary depending on your area and the size of the job.",
    },
    ac: {
      flat: 3000,
      note: "Standard price per outdoor unit — deep pressure-wash cleaning at your doorstep.",
    },
    waterTank: {
      flat: 2500,
      note: "Standard price per tank — full drain, scrub & sanitize. Varies with tank size.",
    },
    cctv: {
      perCamera: 1500,
      note: "Installation & wiring labor only, per camera — camera hardware not included. Final cost depends on number of cameras and cable length.",
    },
  },
} as const;
