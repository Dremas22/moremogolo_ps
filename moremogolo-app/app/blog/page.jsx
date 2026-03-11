"use client";

import Image from "next/image";
import { useState } from "react";

const blogPosts = [
  {
    title: "Coding Club Achievements",
    date: "2026-03-01",
    description:
      "Our learners showcased their coding skills by creating fun games and solving programming challenges in the school coding club.",
    image: "/images/coding1.jpg",
  },
  {
    title: "Robotics Competition Winners",
    date: "2026-02-20",
    description:
      "The Robotics Program learners designed innovative robots and participated in a local robotics challenge, winning multiple awards.",
    image: "/images/robotics1.jpg",
  },
  {
    title: "Heritage Day Celebration",
    date: "2026-02-15",
    description:
      "Learners celebrated their cultural diversity through traditional attire, performances, and art during our annual Heritage Day.",
    image: "/images/heritageday1.jpg",
  },
  {
    title: "Learner Awards Ceremony",
    date: "2026-01-30",
    description:
      "We honored outstanding learners in academics, sports, and arts during our Learner Achievement Awards Ceremony.",
    image: "/images/learnerawards.jpg",
  },
  {
    title: "Career Dress-Up Day",
    date: "2026-01-15",
    description:
      "Learners dressed as professionals they aspire to become, inspiring dreams and creativity during our Career Dress-Up Day.",
    image: "/images/careerdressup1.jpg",
  },
  {
    title: "International Learning – Teachers in China",
    date: "2026-03-05",
    description:
      "Our educators traveled to China for international collaboration and training, bringing innovative teaching methods back to our school.",
    image: "/images/TeachersInChina1.jpg",
  },
  {
    title: "Our Sponsors – Impala Support",
    date: "2026-02-10",
    description:
      "We are grateful for the support of Impala, whose sponsorship contributes to educational programs, sports activities, and technology development for our learners.",
    image: "/images/spectlesponsorimpala.jpg",
  },
];

export default function Blog() {
  // Track which blog post is expanded
  const [expandedPosts, setExpandedPosts] = useState({});

  const toggleExpand = (index) => {
    setExpandedPosts((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const getPreviewText = (text, isExpanded) => {
    const maxLength = 100; // Adjust how many characters to show in preview
    if (isExpanded || text.length <= maxLength) return text;
    return text.substring(0, maxLength) + "...";
  };

  return (
    <div className="text-white min-h-screen px-6 py-16 bg-gray-800">
      {/* Page Title */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-4">School Blog</h1>
        <p className="text-lg max-w-3xl mx-auto">
          Read about our latest events, achievements, and school activities.
        </p>
      </div>

      {/* Blog Posts */}
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {blogPosts.map((post, index) => {
          const isExpanded = expandedPosts[index] || false;
          return (
            <div
              key={index}
              className="rounded-lg overflow-hidden shadow-lg flex flex-col bg-gray-900"
            >
              <div className="relative w-full h-48">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
                <p className="text-sm text-gray-300 mb-4">{post.date}</p>
                <p className="flex-1 mb-4">
                  {getPreviewText(post.description, isExpanded)}
                </p>
                {post.description.length > 100 && (
                  <button
                    onClick={() => toggleExpand(index)}
                    className="mt-2 self-start bg-yellow-400 text-gray-900 font-semibold px-4 py-2 rounded hover:bg-yellow-500 transition"
                  >
                    {isExpanded ? "Show Less" : "Read More"}
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}