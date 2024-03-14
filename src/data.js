import { SiOpenaigym } from "react-icons/si";
import { MdSportsGymnastics } from "react-icons/md";
import { CgGym } from "react-icons/cg";
import { IoFitness } from "react-icons/io5";
import { IoIosFitness } from "react-icons/io";

import avatar1 from "./images/avatar1.jpg";
import avatar2 from "./images/avatar2.jpg";
import avatar3 from "./images/avatar3.jpg";
import avatar4 from "./images/avatar4.jpg";
import avatar5 from "./images/avatar5.jpg";

export const links = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Gallery",
    path: "/gallery",
  },
  {
    name: "Plans",
    path: "/plans",
  },
  {
    name: "Trainers",
    path: "/trainers",
  },
  {
    name: "Contact",
    path: "/contact",
  },
];

export const programs = [
  {
    id: 1,
    icon: MdSportsGymnastics,
    title: "Full Body Workout Program",
    info: "Aimed at individuals who are new to gym training",
    details: [
      "Aimed at individuals who are new to gym training",
      "Includes exercises targeting all major muscle groups",
      "Emphasizes proper form and technique",
      "Progresses gradually over a period of 4-6 weeks",
    ],
    path: "/programs/111",
  },
  {
    id: 2,
    icon: CgGym,
    title: "Strength Training Program",
    info: "Designed to increase muscle strength and endurance!",
    details: [
      "Designed to increase muscle strength and endurance",
      "Incorporates compound exercises such as squats, deadlifts, bench presses, and rows",
      "Focuses on progressive overload to continually challenge muscles",
      "Suitable for intermediate to advanced gym-goers",
    ],
    path: "/programs/222",
  },
  {
    id: 3,
    icon: IoFitness,
    title: "Fat Loss Program",
    info: "A combination of cardio and resistance training exercises",
    details: [
      "A combination of cardio and resistance training exercises.",
      "High-intensity interval training (HIIT) for efficient calorie burning.",
      "Includes metabolic conditioning circuits.",
      "Provides nutritional guidance for fat loss.",
    ],
    path: "/programs/333",
  },
  {
    id: 4,
    icon: SiOpenaigym,
    title: "Muscle Building Program",
    info: "Tailored for individuals looking to increase muscle mass",
    details: [
      "Tailored for individuals looking to increase muscle mass.",
      "Incorporates hypertrophy-focused resistance training.",
      "Includes progressive overload principles and adequate rest periods.",
      "Offers nutritional advice to support muscle growth.",
    ],
    path: "/programs/444",
  },
];

export const values = [
  {
    id: 1,
    icon: IoIosFitness,
    title: "Commitment to Excellence",
    desc: "We provide exceptional service to help our members achieve their fitness goals",
  },
  {
    id: 2,
    icon: IoIosFitness,
    title: "Empowerment",
    desc: "We empower our members to take control of their health and wellness journey",
  },
  {
    id: 3,
    icon: IoIosFitness,
    title: "Health and Safety",
    desc: "We prioritize the health and safety of our members and staff",
  },
  {
    id: 4,
    icon: IoIosFitness,
    title: "Inclusivity",
    desc: "We welcome individuals of all ages, fitness levels, and backgrounds",
  },
];

export const faqs = [
  {
    id: 1,
    question: "What are your membership options?",
    answer:
      "Explore our various membership plans tailored to fit your fitness needs, including options for individuals, couples, families, and corporate memberships.",
  },
  {
    id: 2,
    question: "What facilities and equipment do you offer?",
    answer:
      "Our gym features state-of-the-art equipment for cardio, strength training, and functional fitness. We also offer amenities such as locker rooms, showers, and sauna facilities.",
  },
  {
    id: 3,
    question: "What safety measures do you have in place?",
    answer:
      "We prioritize the health and safety of our members and staff. Our gym adheres to strict cleaning protocols, social distancing guidelines, and equipment sanitization practices to ensure a safe workout environment.",
  },
  {
    id: 4,
    question: "Can I try out the gym before committing to a membership?",
    answer:
      "Absolutely! We offer complimentary trial passes for first-time visitors to experience our facilities and services before making a commitment.",
  },
  {
    id: 5,
    question: "Do you offer personal training services?",
    answer:
      "Yes, we have certified personal trainers available to provide one-on-one coaching, personalized workout plans, and guidance to help you achieve your fitness goals.",
  },
  {
    id: 6,
    question: "What group fitness classes do you offer?",
    answer:
      "Choose from a diverse range of group fitness classes including yoga, Pilates, spinning, HIIT, Zumba, and more. Our classes cater to all fitness levels and interests",
  },
  {
    id: 7,
    question: "How can I cancel or freeze my membership?",
    answer:
      "Membership cancellations or freezes can be arranged through our customer service desk or online portal. Please refer to our membership terms and conditions for details on cancellation policies",
  },
  {
    id: 8,
    question: "What amenities do you offer for recovery and relaxation?",
    answer:
      "Our gym provides amenities such as massage therapy, foam rolling stations, and relaxation areas to promote post-workout recovery and rejuvenation",
  },
  {
    id: 9,
    question: "Are there nutrition and dietary guidance services available?",
    answer:
      "Yes, we provide nutritional counseling and dietary guidance from certified professionals to complement your fitness regimen and help you achieve your wellness goals.",
  },
  {
    id: 10,
    question: "Do you have childcare facilities available?",
    answer:
      "Yes, we offer childcare services with qualified staff to supervise and entertain your little ones while you work out.",
  },
];

export const testimonials = [
  {
    id: 1,
    name: "Celine Abuga",
    quote:
      "Joining this gym has been a game-changer for me. The facilities are top-notch, the staff is friendly and knowledgeable, and the atmosphere is incredibly motivating. I've achieved fitness goals I never thought possible, thanks to the support and guidance of the trainers here",
    job: "Student",
    avatar: avatar1,
  },
  {
    id: 2,
    name: "Dankan George",
    quote:
      "I've been a member of this gym for over two years now, and I can't imagine going anywhere else. The variety of classes keeps me engaged and challenged, and the personal trainers have helped me push past plateaus and achieve new levels of strength and endurance. Plus, the sense of community among members is truly inspiring.",
    avatar: avatar2,
  },
  {
    id: 3,
    name: "Edem Quist",
    quote:
      "As a busy working mom, finding time for fitness can be tough, but this gym makes it easy. With convenient class schedules, on-site childcare, and a welcoming atmosphere, I'm able to prioritize my health and well-being without sacrificing time with my family. It's been a lifesaver for me!",
    job: "Nurse",
    avatar: avatar3,
  },
  {
    id: 4,
    name: "Jeniffer Ropuka",
    quote:
      "After struggling with my weight for years, I finally decided to take control of my health and join this gym. The trainers here listened to my goals and created a personalized workout plan that has helped me shed pounds and gain confidence. I'm grateful for their expertise and encouragement every step of the way.",
    job: "Entreprenuer",
    avatar: avatar4,
  },
  {
    id: 5,
    name: "Ameki Smooth",
    quote:
      "I'm relatively new to fitness, but the welcoming atmosphere at this gym made me feel right at home from day one. The staff and members are so supportive, and I've made friends along the way. Plus, the variety of classes and equipment means I never get bored with my workouts.",
    job: "Lecturer",
    avatar: avatar5,
  },
];

export const plans = [
  {
    id: 1,
    name: "Silver Package",
    desc: "This package is perfect for beginners who need constant help",
    price: 29.99,
    features: [
      { feature: "First Feature", available: true },
      { feature: "Second Feature", available: true },
      { feature: "Third Feature", available: true },
      { feature: "Fourth Feature", available: true },
      { feature: "Fifth Feature", available: true },
      { feature: "Fifth Feature Plus", available: false },
      { feature: "Sixth Feature", available: false },
      { feature: "Seventh Feature", available: false },
      { feature: "Seventh Feature Plus", available: false },
      { feature: "Eighth Feature", available: false },
      { feature: "Ninth Feature", available: false },
      { feature: "Tenth Feature", available: false },
      { feature: "Eleventh Feature", available: false },
    ],
  },
  {
    id: 2,
    name: "Gold Package",
    desc: "This is the perfect package for beginners who know what their doing",
    price: 49.99,
    features: [
      { feature: "First Feature", available: true },
      { feature: "Second Feature", available: true },
      { feature: "Third Feature", available: true },
      { feature: "Fourth Feature", available: true },
      { feature: "Fifth Feature", available: true },
      { feature: "Fifth Feature Plus", available: true },
      { feature: "Sixth Feature", available: true },
      { feature: "Seventh Feature", available: true },
      { feature: "Seventh Feature Plus", available: true },
      { feature: "Eighth Feature", available: false },
      { feature: "Ninth Feature", available: false },
      { feature: "Tenth Feature", available: false },
      { feature: "Eleventh Feature", available: false },
    ],
  },
  {
    id: 3,
    name: "Platinum Package",
    desc: "This package is perfect for busy people who need home service",
    price: 89.99,
    features: [
      { feature: "First Feature", available: true },
      { feature: "Second Feature", available: true },
      { feature: "Third Feature", available: true },
      { feature: "Fourth Feature", available: true },
      { feature: "Fifth Feature", available: true },
      { feature: "Fifth Feature Plus", available: true },
      { feature: "Sixth Feature", available: true },
      { feature: "Seventh Feature", available: true },
      { feature: "Seventh Feature Plus", available: true },
      { feature: "Eighth Feature", available: true },
      { feature: "Ninth Feature", available: true },
      { feature: "Tenth Feature", available: true },
      { feature: "Eleventh Feature", available: true },
    ],
  },
];

import Trainer1 from "./images/trainer1.jpg";
import Trainer2 from "./images/trainer2.jpg";
import Trainer3 from "./images/trainer3.jpg";
import Trainer4 from "./images/trainer4.jpg";
import Trainer5 from "./images/trainer5.jpg";
import Trainer6 from "./images/trainer6.jpg";

export const trainers = [
  {
    id: 1,
    image: Trainer1,
    name: "John Doe",
    job: "Aerobic Trainer",
    socials: [
      "https://instagram.com/",
      "https://twitter.com/",
      "https://facebook.com/",
      "https://linkedin.com/",
    ],
  },
  {
    id: 2,
    image: Trainer2,
    name: "Daniel vinyo",
    job: "Speed Trainer",
    socials: [
      "https://instagram.com/",
      "https://twitter.com/",
      "https://facebook.com/",
      "https://linkedin.com/",
    ],
  },
  {
    id: 3,
    image: Trainer3,
    name: "Edem Quist",
    job: "Flexibility Trainer",
    socials: [
      "https://instagram.com/",
      "https://twitter.com/",
      "https://facebook.com/",
      "https://linkedin.com/",
    ],
  },
  {
    id: 4,
    image: Trainer4,
    name: "Shatta Wale",
    job: "Body Composition Trainer",
    socials: [
      "https://instagram.com/",
      "https://twitter.com/",
      "https://facebook.com/",
      "https://linkedin.com/",
    ],
  },
  {
    id: 5,
    image: Trainer5,
    name: "Diana Ayi",
    job: "Circuit Trainer",
    socials: [
      "https://instagram.com/",
      "https://twitter.com/",
      "https://facebook.com/",
      "https://linkedin.com/",
    ],
  },
  {
    id: 6,
    image: Trainer6,
    name: "Wayne Carter",
    job: "Physical Intelligence Trainer",
    socials: [
      "https://instagram.com/",
      "https://twitter.com/",
      "https://facebook.com/",
      "https://linkedin.com/",
    ],
  },
];
