export const navLinks = [
  { id: "/", title: "Home" },
  { id: "about", title: "About" },
  {
    id: "services",
    title: "Services",
    submenu: [
      { id: "specialised-facials", title: "Specialised Facials" },
      { id: "skin-rejuvenation", title: "Skin Rejuvenation" },
      { id: "anti-aging-treatments", title: "Anti-Aging Treatments" },
      { id: "aesthetic-care", title: "Aesthetic Care" },
      { id: "fat-reduction", title: "Fat Reduction" },
      { id: "laser-treatments", title: "LASER Treatments" },
      { id: "pigmentation-reduction", title: "Pigmentation Reduction" },
      { id: "pico-laser", title: "Pico Laser" },
      { id: "other-services", title: "Other Services" },
    ],
  },
  { id: "contact", title: "Contact" },
];


export const dentalServices = [
  {
    category: "Operative & Endodontic Treatments",
    services: [
      { no: 2, name: "Light cure restoration (Composite)" },
      { no: 3, name: "Light cure restoration (G.I.C)" },
      { no: 4, name: "Zinc oxide extract restoration (For Alcoholic Patients)" },
      { no: 5, name: "Xenove/Direct extract restoration (Anterior tooth)" },
      { no: 6, name: "Root canal therapy (Posterior tooth)" },
      { no: 7, name: "Root canal build up (Gold Plated)" },
      { no: 8, name: "Tooth gap/Diastema Closure" },
    ],
  },
   {
    category: "Prosthetic Treatments",
    services: [
      { no: 17, name: "Cap (Johnson, each)" },
      { no: 18, name: "Cap (Regular Normal, each)" },
      { no: 19, name: "Complete Denture (Flexible)" },
      { no: 20, name: "Partial Denture (Flexible)" },
      { no: 21, name: "Complete Denture (Heat cure)" },
    ],
  },
  {
    category: "Periodontal Treatments",
    services: [
      { no: 9, name: "Normal scaling" },
      { no: 10, name: "Deep scaling (currettage & pocket lavage)" },
      { no: 11, name: "Polishing & Fluoridation" },
      { no: 12, name: "Tooth Whitening" },
    ],
  },
  {
    category: "Surgical Treatments",
    services: [
      { no: 13, name: "Tooth extraction (Impacted - surgical)" },
      { no: 14, name: "Tooth extraction (Surgical)" },
      { no: 15, name: "Tooth extraction (Adult, each)" },
      { no: 16, name: "Apicectomy (single)" },
    ],
  },
  {
    category: "Children Dentistry",
    services: [
      { no: 29, name: "Extraction (deciduous)" },
      { no: 30, name: "Filling (Depends on depth of carity)" },
      { no: 31, name: "Pulpotomy" },
      { no: 32, name: "Pulpectomy" },
    ],
  },
 
  {
    category: "Orthodontic Treatment",
    services: [
      { no: 22, name: "Fixed dental Brackets (both jaw)" },
      { no: 23, name: "Fixed dental Bracket (transparent)" },
      { no: 24, name: "Removable retainer (Australia/USA/UK)" },
      { no: 25, name: "Labial Bow" },
    ],
  },
  {
    category: "Implant Prosthesis",
    services: [
      { no: 26, name: "TS II" },
      { no: 27, name: "GS" },
      { no: 28, name: "MS" },
    ],
  },
  
];


export const services = [
  {
    id: 1,
    image: "https://res.cloudinary.com/dro6y5qla/image/upload/v1748016084/WhatsApp_Image_2025-05-23_at_2.25.50_PM_tofdmd.jpg",
    title: "Regular Dental Check-up",
description: "Routine dental examinations to assess overall oral hygiene, identify early signs of cavities, gum disease, or other dental issues, and provide timely preventive care."

  },
  {
    id: 2,
    image: "https://www.puredentistry.com.au/wp-content/uploads/Everything-you-need-to-know-about-periodontal-therapy-2.jpg",
    title: "Periodontal Treatment",
    // description: "Treatment related to gum health and periodontal care",
    subservices: [
      "Dental scaling & polishing by ultrasonic scaler",
      "Deep pocket curettage with periodontal treatment"
    ]
  },
  {
    id: 3,
    image: "https://res.cloudinary.com/dro6y5qla/image/upload/v1748171739/asd_dykhk8.webp",
    title: "Conservative Treatment",
    // description: "Cosmetic and non-cosmetic fillings for various cavities",
    subservices: [
      "Cosmetic filling with light-cure composite resin",
      "Cosmetic filling with light-cure Glass ionomer cement",
      "Cosmetic filling with RMGIC",
      "Non-cosmetic filling with Phosphate",
      "Non-cosmetic filling with Miracle-mix"
    ]
  },
  {
    id: 4,
    image: "https://misklinik.com.tr/wp-content/uploads/2023/09/konservatif-dis-tedavisi-1024x683.jpg",
    title: "Endodontic Treatment",
    // description: "Advanced root canal procedures and restorations",
    subservices: [
      "Painless RCT (manual & advance with endomotor and apex locator)",
      "Re-RCT",
      "Post & core build-up"
    ]
  },
  {
    id: 5,
    image: "https://www.dentevim.com/upload/protetikdis.jpg",
    title: "Prosthetic Treatment",
    // description: "Tooth replacement with fixed or removable prosthetics",
    subservices: [
      "Metal, Gold metal",
      "Porcelain",
      "Porcelain Fused to Metal",
      "Zirconia, Implant Prosthesis"
    ]
  },
  {
    id: 6,
    image: "https://drquadri.com/wp-content/uploads/2022/08/Which-Type-of-Anesthesia-Is-Used-for-This-Dental-Surgery.jpg",
    title: "Surgical Treatment",
    // description: "Tooth extractions and oral surgeries",
    subservices: [
      "Surgical and Non-surgical Extraction (impacted tooth)",
      "Operculectomy",
      "Apicoectomy",
      "Surgery of cyst",
      "Implant Surgery"
    ]
  },
  {
    id: 7,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFHxqMbpOhzK1eY9No-khexmZ5nC6Sf2O5rQ&s",
    title: "Pediatric Treatment",
    // description: "Dental care for children including fillings and pulpal therapy",
    subservices: [
      "Filling",
      "Pulpectomy",
      "Pulpotomy",
      "Extraction"
    ]
  },
  {
    id: 8,
    image: "https://www.nhakhoano1.com/wp-content/uploads/2018/07/shutterstock_417290032-1-1024x683.jpg",
    title: "Orthodontic Treatment",
    // description: "Correcting teeth alignment and jaw positioning",
    subservices: [
      "Correction of spacing",
      "Correction of crowding",
      "Correction of class I, II, III malocclusion"
    ]
  },
  {
    id: 9,
    image: "https://res.cloudinary.com/dro6y5qla/image/upload/v1748171740/wewe_idzics.png",
    title: "Aesthetic Dentistry",
    // description: "Improving the appearance of teeth and smile",
    subservices: [
      "Correction of midline diastema (spacing)",
      "Correction of anterior spacing",
      "Correction of incisal disharmony",
      "Correction of broken down teeth (BDC) by cosmetic filling"
    ]
  },
  {
    id: 10,
    image: "https://healthcare.com.sa/wp-content/uploads/2023/01/istockphoto-1206712036-612x612-1.jpg",
    title: "Others",
    // description: "Miscellaneous dental services and support",
    subservices: [
      "Teeth whitening/bleaching by modern/advanced technique",
      "Inlays & Onlays",
      "Night guard & Bruxism guard",
      "Dental Emergency",
      "Dental X-ray"
    ]
  }
];


