export const Bio = {
  name: "Muqsi Bagas Eka Putra",
  roles: [
    "Full Stack Developer",
    "Software Developer",
    "DevOps Engineer",
    "Freelancer",
  ],
  description:
    "I am a motivated and versatile individual, always eager to take on new challenges. With a passion for learning I am dedicated to delivering high-quality results. With a positive attitude and a growth mindset, I am ready to make a meaningful contribution and achieve great things.",
  github: "https://github.com/moxiebagas",
  resume: "https://drive.google.com/file/d/1xv6TtamEr_kPNIPZi1126XnC7keaC5fP/view?usp=sharing",
  linkedin: "https://www.linkedin.com/in/muqsibaga",
  twitter: "https://twitter.com/muqsibagas",
  instagram: "https://www.instagram.com/muqsibagas",
  facebook: "https://www.facebook.com/muqsibagas",
};

export const skills = [
  {
    title: "Frontend",
    skills: [
      {
        name: "HTML",
        image: require("../images/skills/HTML.png"),
      },
      {
        name: "CSS",
        image: require("../images/skills/CSS.png"),
      },
      {
        name: "Bootstrap",
        image: require("../images/skills/Bootstrap.png"),
      },
      {
        name: "JavaScript",
        image: require("../images/skills/JavaScript.png"),
      },
      {
        name: "Vue Js",
        image: require("../images/skills/Vuejs.png"),
      },
      {
        name: "React Js",
        image: require("../images/skills/ReactJs.png"),
      },
    ],
  },
  {
    title: "Backend",
    skills: [
      {
        name: "PHP",
        image: require("../images/skills/PHP.png"),
      },
      {
        name: "Laravel",
        image: require("../images/skills/Laravel.png"),
      },
      {
        name: "CodeIgniter",
        image: require("../images/skills/Codeigniter.png"),
      },
      {
        name: "MySQL",
        image: require("../images/skills/MySQL.png"),
      },
      {
        name: "Java",
        image: require("../images/skills/Java.png"),
      },
      {
        name: "NetBeans",
        image: require("../images/skills/NetBeans.png"),
      },
      {
        name: "Node Js",
        image: require("../images/skills/NodeJs.png"),
      },
    ],
  },
  {
    title: "Android",
    skills: [
      {
        name: "Android Studio",
        image: require("../images/skills/AndroidStudio.png"),
      },
      {
        name: "Java",
        image: require("../images/skills/Java.png"),
      },
      {
        name: "XML",
        image: require("../images/skills/XML.png"),
      },
    ],
  },
  {
    title: "Others",
    skills: [
      {
        name: "Git",
        image: require("../images/skills/Git.png"),
      },
      {
        name: "GitHub",
        image: require("../images/skills/GitHub.png"),
      },
      {
        name: "Jenkins",
        image: require("../images/skills/Jenkins.png"),
      },
      {
        name: "PHPUnit",
        image: require("../images/skills/PHPUnit.png"),
      },
      {
        name: "CircleCI",
        image: require("../images/skills/CircleCI.png"),
      },
      {
        name: "Postman",
        image: require("../images/skills/Postman.png"),
      },
      {
        name: "Katalon Studio",
        image: require("../images/skills/Katalon.png"),
      },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: require("../images/experience/Barantum.png"),
    role: "Full Stack Developer",
    company: "Barantum",
    date: "Oktober 2022 - Present",
    desc: "Build CRM Web Application Using PHP Framework (Laravel) & JavaScript Framework (Vue Js).",
    skills: [
      "PHP",
      "Laravel",
      "MySQL",
      "HTML",
      "CSS",
      "JavaScript",
      "Vue JS",
      "PHPUnit",
      "Jenkins",
      "CircleCI",
      "Katalon",
    ],
  },
  {
    id: 1,
    img: require("../images/experience/AXI.jpg"),
    role: "Software Developer",
    company: "Astragraphia Xprins Indonesia",
    date: "Februari 2021 - Oktober 2022",
    desc: "Create Desktop & Web-based Applications to Help The Printing And Delivery Process by Couriers Based on Client Requests Using Netbeans, Delphi, Visual FoxPro and CodeIgniter.",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "Java",
      "NetBeans",
      "PHP",
      "CodeIgniter",
      "MySQL",
      "Pascal",
      "Delphi",
      "DBF",
      "Microsoft Visual FoxPro",
    ],
  },
];

export const education = [
  {
    id: 0,
    img: require("../images/experience/gunadarma-university.png"),
    school: "Gunadarma University",
    date: "Jun 2015 - Aug 2020",
    grade: "3.23 GPA",
    desc: "I am currently pursuing a Bachelor's degree in Information Technology at Gunadarma University, Bekasi. I have completed 4.5 semesters and have a GPA of 3.23. I have taken courses in Algorithms, Object-Oriented Programming, Database Management Systems, Operating Systems, and Computer Networks.",
    degree: "Bachelor of Engineering - BE, Information Technology",
  },
];

export const projects = [
  {
    id: 1,
    title: "Klinik Bougenville",
    date: "Sep 2023 - Dec 2023",
    description:
      "Project 'Bougenville Clinic Management System' is a clinic application built using the PHP framework, CodeIgniter. This application aims to optimize the management and service processes within the Bougenville clinic. The modules created in this project include: Reception, Queue, Clinics, Pharmacy, Medical Records, Doctors, Inventory, Employees, Clinic Master, and User Role Settings. This project aims to improve the operational efficiency of the Bougenville clinic, enhance patient experiences, and ensure more structured and integrated data management.",
    image: require("../images/projects/klinik-bougenville.jpg"),
    img1: require("../images/projects/klinik-1.png"),
    tags: [
      "HTML",
      "CSS",
      "SCSS",
      "PHP",
      "CodeIgniter",
      "MySQL",
      "JavaScript",
      "jQuery",
    ],
    category: "Web Application",
    github: "https://github.com/moxiebagas/",
    webapp: "https://github.com/moxiebagas/",
  },
  // {
  //   id: 0,
  //   title: "Podstream",
  //   date: "Apr 2023 - May 2023",
  //   description:
  //     "Developed a full-stack web application that allows users to search for, play, and pause their favorite podcasts on demand and create podcasts. Implemented user authentication using Google Auth and Jwt Auth, made responsive user interface with React JS that provides users with a seamless experience across all devices. Practiced agile methodologies to optimize team efficiency and communication.",
  //   image:
  //     "https://user-images.githubusercontent.com/64485885/234602896-a1bd8bcc-b72b-4821-83d6-8ad885bf435e.png",
  //   tags: ["React Js", "MongoDb", "Node Js", "Express Js", "Redux"],
  //   category: "web app",
  //   github: "https://github.com/rishavchanda/Podstream",
  //   webapp: "https://podstream.netlify.app/",
  //   member: [
  //     {
  //       name: "Rishav Chanda",
  //       img: "https://avatars.githubusercontent.com/u/64485885?v=4",
  //       linkedin: "https://www.linkedin.com/in/rishav-chanda-b89a791b3/",
  //       github: "https://github.com/rishavchanda/",
  //     },
  //     {
  //       name: "Upasana Chaudhuri",
  //       img: "https://avatars.githubusercontent.com/u/100614635?v=4",
  //       linkedin: "https://www.linkedin.com/in/upasana-chaudhuri-2a2bb5231/",
  //       github: "https://github.com/upasana0710",
  //     },
  //   ],
  // },
  // {
  //   id: 1,
  //   title: "Vexa",
  //   date: "Oct 2022 - Present",
  //   description:
  //     "Designed and developed the Vexa project, a project management app that helps users and teams stay organized and on track. Implemented key features such as task tracking, team collaboration, and time tracking to improve productivity and project outcomes and also invite team/project members. The plan is to add a community of users where they can find developers and other team members and chat system implementation.",
  //   image:
  //     "https://user-images.githubusercontent.com/64485885/234916413-96296f13-fe4b-4cc4-b215-e72bd7c27928.png",
  //   tags: [
  //     "React Js",
  //     "MongoDb",
  //     "Node Js",
  //     "Express Js",
  //     "Redux",
  //     "NodeMailer",
  //   ],
  //   category: "web app",
  //   github: "https://github.com/rishavchanda/Project-Management-App",
  //   webapp: "https://vexa-app.netlify.app/",
  // },
  // {
  //   id: 2,
  //   title: "Brain Tumor Detection",
  //   date: "Jan 2023 - Mar 2023",
  //   description:
  //     "Preprocessed and augmented the dataset to improve model accuracy, trained the model, created API using model and Python, and used React web app for the project's front end. Achievements: Achieved an accuracy of 99.2% to accurately detect brain tumors from medical images.",
  //   image:
  //     "https://github.com/rishavchanda/Brain-Tumor-Detection/raw/main/Readme_resource/Image2.png",
  //   tags: ["Python", "Keras", "TensorFlow", "VGG16", "Pickle", "React"],
  //   category: "machine learning",
  //   github: "https://github.com/rishavchanda/Brain-Tumor-Detection",
  //   webapp: "https://brain-tumor.netlify.app/",
  //   member: [
  //     {
  //       name: "Rishav Chanda",
  //       img: "https://avatars.githubusercontent.com/u/64485885?v=4",
  //       linkedin: "https://www.linkedin.com/in/rishav-chanda-b89a791b3/",
  //       github: "https://github.com/rishavchanda/",
  //     },
  //     {
  //       name: "Upasana Chaudhuri",
  //       img: "https://avatars.githubusercontent.com/u/100614635?v=4",
  //       linkedin: "https://www.linkedin.com/in/upasana-chaudhuri-2a2bb5231/",
  //       github: "https://github.com/upasana0710",
  //     },
  //   ],
  // },
  // {
  //   id: 3,
  //   title: "Buckoid",
  //   date: "Dec 2021 - Apr 2022",
  //   description:
  //     "App Is Currently In Playstore 100+ Downloads. This Project proposes an “Expense Tracking App”. Keep track of your personal expenses and compare them to your monthly income with the budget planner. It has Google Drive Cloud API for Backup of User Room Database. Made with Kotlin in MVVM Architecture & Live Data.",
  //   image:
  //     "https://camo.githubusercontent.com/fbf405040ae86b5d4a40f24e4ac034982cb8c0e2d850560ba64527997b258be8/68747470733a2f2f666972656261736573746f726167652e676f6f676c65617069732e636f6d2f76302f622f6c6f67696e2d65613565322e61707073706f742e636f6d2f6f2f4255434b4f49442532302831292e706e673f616c743d6d6564696126746f6b656e3d32653735376235372d323964372d346263612d613562322d653164346538313432373435",
  //   tags: ["Kotlin", "MVVM", "Room Database", "Google Drive Cloud API"],
  //   category: "android app",
  //   github: "https://github.com/rishavchanda/Buckoid-Android-App",
  //   webapp: "https://play.google.com/store/apps/details?id=com.rishav.buckoid",
  // },
  // {
  //   id: 10,
  //   title: "Job Finding App",
  //   date: "Jun 2023 - Jul 2023",
  //   description:
  //     "A Job Finding App made with React Native, Axios. Users can search for any job coming from API and apply there.",
  //   image:
  //     "https://user-images.githubusercontent.com/64485885/255237090-cf798a2c-1b41-4bb7-b904-b5353a1f08e8.png",
  //   tags: ["React Native", "JavaScript", "Axios"],
  //   category: "android app",
  //   github: "https://github.com/rishavchanda/Job-finder-App",
  //   webapp: "https://github.com/rishavchanda/Job-finder-App",
  // },
  // {
  //   id: 4,
  //   title: "Whatsapp Clone",
  //   date: "Jul 2021",
  //   description:
  //     "A WhatsApp clone made with React JS, Firebase, and Material UI. It has Phone Authentication, Real-time Database. It has a chat room where users can chat with each other. It has a sidebar where users can see all the chat rooms and can create a new chat room. It has a login page where users can log in with their Google account.",
  //   image:
  //     "https://firebasestorage.googleapis.com/v0/b/whatsapp-clone-rishav.appspot.com/o/Screenshot%20(151).png?alt=media&token=48391593-1ef0-4a8c-a92a-eb82bdf38e89",
  //   tags: ["React Js", "Firebase", "Firestore", "Node JS"],
  //   category: "web app",
  //   github: "https://github.com/rishavchanda/Whatsapp-Clone-React-Js",
  //   webapp: "https://whatsapp-clone-rishav.web.app",
  // },
  // {
  //   id: 5,
  //   title: "Todo Web App",
  //   date: "Jun 2021",
  //   description:
  //     " A Todo Web App made with React JS, Redux, and Material UI. It has a login page where users can log in with their Google account. It has a sidebar where users can see all the tasks and can create a new task. It has a calendar where users can see all the tasks on a particular date. It has a search bar where users can search for a particular task.",
  //   image:
  //     "https://camo.githubusercontent.com/a328255ad96f861f57d25096d28018ab2656c689a1456b0d145764009bed2d1a/68747470733a2f2f666972656261736573746f726167652e676f6f676c65617069732e636f6d2f76302f622f746f646f2d6170702d63386331392e61707073706f742e636f6d2f6f2f53637265656e73686f74253230283938292e706e673f616c743d6d6564696126746f6b656e3d33643335646366322d626666322d343730382d393031632d343232383866383332386633",
  //   tags: ["React Js", "Local Storage", "AWS Auth", "Node JS"],
  //   category: "web app",
  //   github: "https://github.com/rishavchanda/Todo-Web-App",
  //   webapp: "https://rishav-react-todo.netlify.app/",
  // },
  // {
  //   id: 6,
  //   title: "Breaking Bad",
  //   date: "Jun 2021",
  //   description:
  //     "A simple react app that shows the characters of the famous TV series Breaking Bad. It uses the Breaking Bad API to fetch the data. It also has a search bar to search for a particular character.",
  //   image:
  //     "https://camo.githubusercontent.com/cd07010cbeb90cb1b43a5d6162784326aef02210ef7d41a0f9ae043b3e392378/68747470733a2f2f666972656261736573746f726167652e676f6f676c65617069732e636f6d2f76302f622f746f646f2d6170702d63386331392e61707073706f742e636f6d2f6f2f53637265656e73686f7425323028313534292e706e673f616c743d6d6564696126746f6b656e3d65613439383630632d303435362d343333342d616435372d336239346663303333363263",
  //   tags: ["React Js", "API", "Axios", "Node JS"],
  //   category: "web app",
  //   github: "https://github.com/rishavchanda/Breaking-Bad",
  //   webapp: "https://breaking-bad-webapp.netlify.app",
  // },
  // {
  //   id: 7,
  //   title: "Quiz App",
  //   date: "Dec 2020 - Jan 2021",
  //   description:
  //     "A android quiz app made with Java and Firebase. It has a login page where users can log in with their Google account. It has a sidebar where users can see all the quiz categories and can create a new quiz. It has a leaderboard where users can see the top 10 scorers. It has a search bar where users can search for a particular quiz.",
  //   image:
  //     "https://github-production-user-asset-6210df.s3.amazonaws.com/64485885/239726262-c1b061d1-d9d0-42ef-9f1c-0412d14bc4f6.gif",
  //   tags: ["Java", "Android Studio", "Firebase", "Google Auth"],
  //   category: "android app",
  //   github: "https://github.com/rishavchanda/Quiz-Earn",
  //   webapp: "https://github.com/rishavchanda/Quiz-Earn",
  // },
  // {
  //   id: 8,
  //   title: "Face Recognition",
  //   date: "Jan 2021",
  //   description:
  //     "A Face recognition python app made with OpenCV. It uses face_recognition library to detect faces. It uses the webcam to detect faces. It also has a search bar to search for a particular face.",
  //   image:
  //     "https://camo.githubusercontent.com/a8b3e1ebf26d4c95f75bc6671189a3590eb67eb8332d7c7452492990e731efb9/68747470733a2f2f77617265686f7573652d63616d6f2e696e67726573732e636d68312e707366686f737465642e6f72672f356137383335396561323762643261633232336437656662306639303831306437373930383436312f363837343734373037333361326632663633366336663735363432653637363937343638373536323735373336353732363336663665373436353665373432653633366636643266363137333733363537343733326633383339333633363339333232663332333433343333333033333339333832663333333636363330363533333636333032643331333336333632326433313331363533373264333833323335333832643334363433303633333936333635333136353334333133393265363736393636",
  //   tags: ["Python", "Keras", "TensorFlow", "VGG16", "Pickle", "React"],
  //   category: "machine learning",
  //   github: "https://github.com/rishavchanda/Face-Recodnition-AI-with-Python",
  //   webapp: "https://github.com/rishavchanda/Face-Recodnition-AI-with-Python",
  // },
];

export const TimeLineData = [
  { year: 2017, text: "Started my journey" },
  { year: 2018, text: "Worked as a freelance developer" },
  { year: 2019, text: "Founded JavaScript Mastery" },
  { year: 2020, text: "Shared my projects with the world" },
  { year: 2021, text: "Started my own platform" },
];
