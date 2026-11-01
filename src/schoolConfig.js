const contactNumber = "7004848750";

const schoolConfig = {
  identity: {
    name: "Demo Internatiol School",
    shortName: "Demo",
    brandSubtitle: "INTERNATIOL SCHOOL",
    tagline: "Shiksha, Sanskaar aur Ujjwal Bhavishya",
    logo: "/images/branding/Demo School Logo.png",
    favicon: "/images/branding/Demo School Logo.png",
    established: "Confirm founding year with the school office",
    location: "Patna",
    affiliation:
      "Board affiliation and recognition details: contact the school office",
    schoolCode: "Replace with school code",
    udiseCode: "Replace with UDISE code",
    description:
      "An education rooted in Indian values, with strong academics, confident communication and care for every child in Anishabad, Patna.",
    introduction:
      "For families in Patna, a good school means strong studies, good habits and teachers who care. Our educational vision brings together Hindi and English communication, mathematics and science, respect for others, and a close partnership between parents and teachers.",
  },
  contact: {
    address: "Duplex Colony, Anishabad, Patna-800002",
    phones: [contactNumber],
    whatsapp: `91${contactNumber}`,
    email: "admissions@example.com",
    hours: "Monday – Saturday, 9:00 AM – 3:00 PM",
    mapsLink:
      "https://www.google.com/maps/search/?api=1&query=Duplex+Colony+Anishabad+Patna+800002",
    mapsEmbed:
      "https://maps.google.com/maps?q=Duplex%20Colony%20Anishabad%20Patna%20800002&t=&z=15&ie=UTF8&iwloc=&output=embed",
    mapCaption: "Duplex Colony, Anishabad, Patna-800002",
    socialLinks: [],
  },
  navigation: [
    {
      path: "/",
      label: "Home",
    },
    {
      path: "/about.html",
      label: "About Us",
    },
    {
      path: "/academics.html",
      label: "Academics",
    },
    {
      path: "/gallery.html",
      label: "Gallery & Facilities",
    },
    {
      path: "/contact.html",
      label: "Contact & Admission",
    },
  ],
  presentation: {
    pageImages: {
      "/about.html": {
        image: "/images/campus/india-assembly.png",
        caption: "A community built on care and shared values",
      },
      "/academics.html": {
        image: "/images/facilities/india-science.png",
        caption: "From asking questions to discovering answers",
      },
      "/gallery.html": {
        image: "/images/gallery/india-culture.png",
        caption: "Small moments. Meaningful memories.",
      },
      "/contact.html": {
        image: "/images/banners/india-hero.png",
        caption: "A thoughtful beginning for your child",
      },
    },
    learning: {
      eyebrow: "Every age. Every possibility.",
      title: "Little steps today.\nConfident strides tomorrow.",
      description:
        "A child’s needs change as they grow. Explore a learning journey that builds strong foundations, nurtures curiosity and develops independence.",
      linkLabel: "Explore academics",
      images: [
        "/images/banners/india-hero.png",
        "/images/facilities/india-library.png",
        "/images/facilities/india-science.png",
        "/images/facilities/india-computer.png",
      ],
    },
    schoolLife: {
      eyebrow: "The joy of being at school",
      title: "More than lessons.\nMemories for a lifetime.",
      description:
        "Finding a new interest. Learning to be a teammate. Creating something with your own hands. These are the experiences that help a child come into their own.",
      linkLabel: "Discover school life",
      moments: [
        {
          image: "/images/facilities/india-sports.png",
          title: "Team spirit starts here",
          label: "Play & wellbeing",
        },
        {
          image: "/images/gallery/india-culture.png",
          title: "A little imagination goes a long way",
          label: "Art & expression",
        },
        {
          image: "/images/campus/india-assembly.png",
          title: "Growing together, every day",
          label: "Values & belonging",
        },
      ],
    },
    faq: {
      eyebrow: "For parents",
      title: "A little clarity.\nA confident next step.",
      description:
        "Choosing a school is an important decision. Here are a few helpful answers before you speak with our team.",
      items: [
        {
          question: "How do I enquire about admission?",
          answer:
            "Call the number listed on this page or use the WhatsApp button in the contact section. The school office can guide you through available classes and the next steps.",
        },
        {
          question: "Can we meet the teachers and see the school?",
          answer:
            "Please call the office to arrange a suitable time. A school visit is a good opportunity to discuss your child’s learning needs and explore the facilities in person.",
        },
        {
          question: "Where can I get the fee structure and class details?",
          answer:
            "The school office can provide the current fee structure, class availability, eligibility criteria and recognised board details. Please confirm these before applying.",
        },
        {
          question: "Which documents should we keep ready?",
          answer:
            "Usually an age proof, recent photographs and previous school records are helpful. A transfer certificate may be needed where applicable. The office will confirm the final document list.",
        },
        {
          question: "How do parents stay involved?",
          answer:
            "Ask the office about parent–teacher meetings, progress communication, school notices and the best way to discuss your child’s learning with teachers.",
        },
      ],
    },
  },
  search: {
    siteUrl: "https://penportindia.github.io/demointernational/",
    siteName: "Penport India School Website Demo",
    titleSuffix: "Penport India School Demo",
    language: "en-IN",
    locale: "en_IN",
    themeColor: "#173e35",
    socialImage: "/images/banners/india-hero.png",
    socialImageAlt: "Indian school website design demo by Penport India",
    brandDescription:
      "A school website demo by Penport India, showcasing responsive design, academics, school facilities and admission information for Indian schools.",
  },
  seo: {
    "/": {
      title: "School Website Demo by Penport India",
      description:
        "Explore Penport India's school website demo: responsive design, Indian school visuals, academics, gallery and admission pages, with a Patna school example.",
    },
    "/about.html": {
      title: "About the School",
      description:
        "Explore the school story, Indian values and leadership profiles in this school website demonstration by Penport India.",
    },
    "/academics.html": {
      title: "Academics",
      description:
        "Discover class-wise learning, Hindi and English skills, science and school activities in Penport India's school website demo.",
    },
    "/gallery.html": {
      title: "Gallery & Facilities",
      description:
        "Browse the interactive school photo gallery and illustrative classrooms, labs, sports and Madhubani art in this Penport India website demo.",
    },
    "/contact.html": {
      title: "Contact & Admission",
      description:
        "Explore contact details, WhatsApp enquiries, admission guidance and parent FAQs in this school website demonstration by Penport India.",
    },
  },
  home: {
    eyebrow: "Shiksha aur Sanskaar",
    title: "Strong foundations.\nIndian values.\nBright futures.",
    subtitle:
      "Padhai bhi, sanskaar bhi. A balanced school journey that values knowledge, discipline, creativity and the confidence to move ahead.",
    heroImage: "/images/banners/india-hero.png",
    heroAlt:
      "Illustrative Indian school classroom with uniformed children and a teacher",
    highlights: [
      {
        value: "Shiksha",
        label: "Strong academic foundations",
      },
      {
        value: "Sanskaar",
        label: "Respect, discipline & responsibility",
      },
      {
        value: "Srijan",
        label: "Art, culture & curiosity",
      },
      {
        value: "Sahyog",
        label: "Parents & teachers together",
      },
    ],
    welcomeTitle: "Rooted in Bihar.\nPreparing for tomorrow.",
    welcomeImage: "/images/campus/india-assembly.png",
    culture: {
      eyebrow: "Bihar ki pehchaan",
      title: "Our roots are part\nof our learning.",
      description:
        "From the colours of Madhubani to Hindi poetry and stories of Bihar, local culture gives children a sense of belonging. Our vision connects this heritage with curiosity, creativity and respect for the many traditions of India.",
      image: "/images/gallery/india-culture.png",
      imageAlt:
        "AI-generated illustration of Indian schoolchildren learning Madhubani-inspired painting",
      linkLabel: "Explore school life",
    },
    pillars: [
      {
        title: "Padhai with understanding",
        description:
          "Reading, writing, mathematics and science with regular practice, revision and encouragement to ask questions.",
      },
      {
        title: "Sanskaar in everyday life",
        description:
          "Respect for teachers and elders, punctuality, honesty, cleanliness and kindness towards classmates.",
      },
      {
        title: "Confidence beyond the classroom",
        description:
          "Hindi and English speaking, teamwork, sports and opportunities to express ideas through art and cultural activities.",
      },
    ],
    sections: {
      welcomeEyebrow: "Apna school, apna bhavishya",
      valuesEyebrow: "Education that families value",
      valuesTitle: "Knowledge, character and confidence.",
      facilitiesEyebrow: "Learning & school life",
      facilitiesTitle: "Spaces for padhai, play and discovery.",
      newsEyebrow: "Notice board",
      newsTitle: "Stay connected\nwith school life.",
      newsDescription:
        "Admission enquiries, parent communication and information from the school office.",
      activitiesEyebrow: "Beyond the textbook",
      activitiesTitle: "Indian roots. Everyday learning.",
    },
  },
  about: {
    eyebrow: "Our school | Our values",
    title: "Achhi shiksha.\nAchhe sanskaar.",
    history:
      "Located in Duplex Colony, Anishabad, our school website reflects a vision of meaningful education for families in Patna. We believe that subject knowledge, good conduct, curiosity and parental involvement belong together. For the school's founding year and official history, please contact the office.",
    vision:
      "To help children become knowledgeable, self-reliant and responsible citizens who remain connected to their families, community and Indian heritage.",
    mission:
      "To bring together academic practice, Hindi and English expression, scientific thinking, physical activity and respect for every child, in partnership with parents.",
    founder: {
      name: "Dr. Ananya Rao",
      role: "Founder · Sample profile",
      photo: "/images/leadership/india-founder.png",
      message:
        "Education must give a child both knowledge and sanskaar. Our aspiration is that every child of Bihar grows with confidence, respects their roots and learns to contribute to society.",
    },
    principal: {
      name: "Meera Nair",
      role: "Principal · Sample profile",
      photo: "/images/leadership/india-principal.png",
      message:
        "Strong basics, regular practice and encouragement make a lasting difference. With parents and teachers working together, children can grow in studies, discipline, creativity and self-belief.",
    },
  },
  academics: {
    subjectsTitle: "A strong foundation in every subject.",
    subjects: [
      {
        title: "Hindi & English",
        description:
          "Reading, handwriting, vocabulary, grammar, recitation and confident speaking.",
      },
      {
        title: "Mathematics",
        description:
          "Number sense, mental maths, tables, logical thinking and everyday problem solving.",
      },
      {
        title: "EVS & Science",
        description:
          "Our surroundings, nature, health, observation and age-appropriate practical activities.",
      },
      {
        title: "Social Science & General Knowledge",
        description:
          "India and Bihar, geography, history, civic responsibility and awareness of the world.",
      },
      {
        title: "Art & Cultural Learning",
        description:
          "Drawing, Madhubani-inspired patterns, Hindi poetry, music and expression through school activities.",
      },
      {
        title: "Physical Education & Life Skills",
        description:
          "Yoga, exercise, traditional games, teamwork, hygiene and respect for others.",
      },
    ],
    eyebrow: "Padhai with purpose",
    title: "Clear concepts.\nConfident learners.",
    introduction:
      "A school learning approach that gives importance to subject understanding, daily practice, language skills and examination readiness. Please confirm the recognised board, available classes and subject combinations with the school office.",
    stages: [
      {
        title: "Early Years",
        classes: "Nursery – UKG",
        description:
          "Rhymes, Hindi and English sounds, number recognition, storytelling, drawing and good classroom habits through play.",
      },
      {
        title: "Primary School",
        classes: "Classes I – V",
        description:
          "Hindi, English, Mathematics and Environmental Studies with handwriting, reading aloud, mental maths and creative activities.",
      },
      {
        title: "Middle School",
        classes: "Classes VI – VIII",
        description:
          "Hindi, English, Mathematics, Science and Social Science with project work, computer awareness and practical observation.",
      },
      {
        title: "Senior School",
        classes: "Classes IX – XII",
        description:
          "Concept revision, written practice and study habits for higher classes. Confirm class availability, board recognition and senior subject streams with the office.",
      },
    ],
    methodology: [
      {
        title: "Concepts, practice & revision",
        description:
          "Teacher-led explanations, notebook work, reading and regular revision help build a dependable academic foundation.",
      },
      {
        title: "Hindi & English expression",
        description:
          "Reading aloud, conversation, recitation and writing encourage children to express themselves clearly in both languages.",
      },
      {
        title: "Parents as learning partners",
        description:
          "parent-teacher discussions, attention to learning difficulties and guidance on home study keep families involved.",
      },
    ],
    environment:
      "The facilities below describe the intended learning environment. Please confirm actual equipment, class availability and services during your school visit.",
  },
  facilities: [
    {
      title: "Morning assembly & good habits",
      category: "Assembly",
      image: "/images/campus/india-assembly.png",
      description:
        "A shared start to the day through thought for the day, news reading, prayer or reflection, and messages about discipline and kindness.",
    },
    {
      title: "Classroom learning",
      category: "Classrooms",
      image: "/images/banners/india-hero.png",
      description:
        "Reading, explanation, blackboard work and notebook practice, alongside questions and activities that make concepts clear.",
    },
    {
      title: "Science & practical discovery",
      category: "Science",
      image: "/images/facilities/india-science.png",
      description:
        "Observation, simple experiments and project work encourage scientific thinking. Confirm laboratory equipment and access with the office.",
    },
    {
      title: "Reading & language development",
      category: "Library",
      image: "/images/facilities/india-library.png",
      description:
        "Hindi and English stories, reference reading and a habit of independent learning. Confirm the available book collection during your visit.",
    },
    {
      title: "Kabaddi, kho-kho & fitness",
      category: "Sports",
      image: "/images/facilities/india-sports.png",
      description:
        "Traditional Indian games, team spirit, physical exercise and fair play. Ask the office about the current sports timetable and play spaces.",
    },
    {
      title: "Computer awareness",
      category: "Technology",
      image: "/images/facilities/india-computer.png",
      description:
        "Digital awareness and responsible technology use as part of school learning. Confirm computer facilities and class provision with the office.",
    },
    {
      title: "School transport enquiries",
      category: "Transport",
      image: "/images/facilities/india-transport.png",
      description:
        "Families in Anishabad and nearby Patna localities can contact the office to confirm whether transport is offered, along with routes and charges.",
    },
    {
      title: "Madhubani art & creative expression",
      category: "Arts",
      image: "/images/gallery/india-culture.png",
      description:
        "Drawing, folk patterns and the rich visual traditions of Mithila bring Bihar's cultural heritage into creative learning.",
    },
  ],
  gallery: {
    eyebrow: "School life | Bihar ki pehchaan",
    title: "Padhai, khel\naur apni sanskriti.",
    introduction:
      "An Indian school experience shaped by classroom learning, teamwork and cultural expression. Images are AI-generated illustrations of school life, not photographs of the actual school campus.",
    images: [
      {
        image: "/images/gallery/india-culture.png",
        title: "Mithila colours, young imaginations",
        category: "Culture",
      },
      {
        image: "/images/campus/india-assembly.png",
        title: "Togetherness, discipline and respect",
        category: "School life",
      },
    ],
  },
  achievements: [
    {
      title: "Bihar's heritage in the classroom",
      description:
        "Ideas for school activities include Madhubani art, Hindi kavita path, local history and learning about Bihar's contribution to knowledge and culture.",
    },
    {
      title: "Pride in our country, care for our community",
      description:
        "Suggested activities include Republic Day and Independence Day programmes, cleanliness drives, environmental awareness and respect for India's diversity.",
    },
  ],
  announcements: [
    {
      date: "Admission enquiry",
      title: "Speak to our school office",
      description:
        "Ask about the academic session, age criteria, available classes, fee details and required documents.",
      path: "/contact.html",
    },
    {
      date: "For parents",
      title: "Stay involved in your child's learning",
      description:
        "Contact the office for parent-teacher meetings, school timings, uniform details and current notices.",
      path: "/contact.html",
    },
  ],
  admission: {
    session: "2027–28",
    eyebrow: "Admission enquiries | Patna",
    title: "Your child's next step\nstarts with a conversation.",
    description:
      "Speak to our school office in Anishabad about classes, the learning approach, fees and admission requirements.",
    steps: [
      {
        title: "Start a conversation",
        description:
          "Call the school office or send a WhatsApp message to discuss the class you are looking for.",
      },
      {
        title: "Visit our campus",
        description:
          "Arrange a visit to explore our learning spaces and discuss your child’s needs.",
      },
      {
        title: "Complete your application",
        description:
          "The team will explain availability, age criteria, required documents, and the next steps.",
      },
    ],
    documents: [
      "Birth certificate / age proof",
      "Recent passport-size photographs",
      "Previous class report card, where applicable",
      "Transfer certificate, where applicable",
    ],
    note: "Please confirm class availability, age criteria, fees, recognition details and admission dates directly with the school office.",
  },
  footer: {
    description:
      "Shiksha aur sanskaar for a brighter tomorrow. Serving the aspirations of families in Anishabad, Patna.",
    copyright: "Demo Internatiol School. All rights reserved.",
    partnerBranding: {
      label: "Designed & developed by",
      primaryName: "Penport",
      secondaryName: "India",
    },
  },
};

export default schoolConfig;
