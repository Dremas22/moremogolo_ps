"use client";

import Image from "next/image";

const sections = [
  {
    title: "Coding Education",
    description:
      "Learners are introduced to coding to develop logical thinking, creativity and problem-solving skills needed in the modern digital world.",
    images: ["/images/coding1.jpg", "/images/coding2.jpg", "/images/coding3.jpg"],
  },
  {
    title: "Robotics Program",
    description:
      "Through robotics activities learners explore science, engineering and technology while building and programming robots.",
    images: [
      "/images/robotics1.jpg",
      "/images/robotics2.jpg",
      "/images/robotics3.jpg",
      "/images/robotics4.jpg",
    ],
  },
  {
    title: "Unplugged Coding",
    description:
      "Unplugged coding helps learners understand computational thinking through fun physical activities and games without using computers.",
    images: [
      "/images/unpluggedcoding1.jpg",
      "/images/unpluggedcoding2.jpg",
      "/images/unpluggedcoding3.jpg",
    ],
  },
  {
    title: "Sports Development",
    description:
      "Sports activities encourage teamwork, discipline, leadership and healthy lifestyles among learners.",
    images: ["/images/sports1.jpg", "/images/sports2.jpg", "/images/sports3.jpg"],
  },
  {
    title: "Heritage Day Celebration",
    description:
      "Learners celebrate their cultures and traditions through Heritage Day activities that promote diversity and unity.",
    images: ["/images/heritageday1.jpg", "/images/heritageday2.jpg"],
  },
  {
    title: "Career Dress-Up Day",
    description:
      "Career dress-up activities inspire learners to dream big by allowing them to dress as professionals they aspire to become.",
    images: ["/images/careerdressup1.jpg", "/images/careerdressup2.jpg"],
  },
  {
    title: "International Learning – Teachers in China",
    description:
      "Our educators continuously improve their teaching methods through international exposure and collaboration.",
    images: ["/images/TeachersInChina1.jpg", "/images/TeachersInChina2.jpg"],
  },
  {
    title: "School Environment",
    description:
      "Our school provides a safe, welcoming and supportive learning environment where every learner can thrive.",
    images: ["/images/theschool1.jpg", "/images/theschool2.jpg"],
  },
];

export default function Services() {
  return (
    <div className="w-full px-6 py-16 -mt-3 bg-gray-00b4d8">

      {/* Page Title */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold text-white mb-4">
          Our Programs & Activities
        </h1>
        <p className="text-lg text-gray-300 max-w-3xl mx-auto">
          Our school offers a variety of educational, cultural, and sporting
          activities that support the development of well-rounded learners.
        </p>
      </div>

      {/* Sections */}
      {sections.map((section, index) => (
        <div key={index} className="mb-20 text-center">

          <h2 className="text-3xl font-bold text-white mb-4">
            {section.title}
          </h2>

          <p className="text-gray-300 mb-8 max-w-3xl mx-auto">
            {section.description}
          </p>

          {/* Centered Responsive Image Grid */}
          <div className="grid gap-6 max-w-6xl mx-auto justify-center [grid-template-columns:repeat(auto-fit,minmax(250px,300px))]">
            {section.images.map((img, i) => (
              <Image
                key={i}
                src={img}
                alt={section.title}
                width={400}
                height={300}
                className="rounded-lg object-cover w-full h-[250px]"
              />
            ))}
          </div>

        </div>
      ))}

      {/* Learner Awards */}
      <div className="mb-20 text-center">

        <h2 className="text-3xl font-bold text-white mb-4">
          Learner Achievement Awards
        </h2>

        <p className="text-gray-300 mb-8 max-w-3xl mx-auto">
          Our learner award ceremonies recognise academic excellence,
          leadership, discipline and outstanding achievements in different
          school activities.
        </p>

        <div className="flex justify-center">
          <Image
            src="/images/learnerawards.jpg"
            alt="Learner Awards"
            width={600}
            height={400}
            className="rounded-lg"
          />
        </div>

      </div>

      {/* Sponsors */}
      <div className="text-center">

        <h2 className="text-3xl font-bold text-white mb-4">
          Our Sponsors
        </h2>

        <p className="text-gray-300 mb-8 max-w-3xl mx-auto">
          We are grateful for the support of our sponsors who contribute to
          the development of education, technology and sports at our school.
        </p>

        <div className="flex justify-center">
          <Image
            src="/images/spectlesponsorimpala.jpg"
            alt="Sponsors"
            width={600}
            height={400}
            className="rounded-lg"
          />
        </div>

      </div>

    </div>
  );
}