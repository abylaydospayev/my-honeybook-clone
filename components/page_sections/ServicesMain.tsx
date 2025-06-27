'use client';

import Image from 'next/image';
export function ServicesMain() {
  return (
    <div className="bg-white">
      {/* Intro + Stats section with dark background */}
      <section
        id="services-2051"
        className="relative pt-[120px] pb-16 bg-[#1c1c1e] text-white"
      >
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-12 pt-24">
          {/* Text Content */}
          <div className="md:w-1/2 space-y-5">
            <span className="text-sm uppercase tracking-wide text-blue-400 font-semibold">
              About Us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
              Making Strategy Simple & Purposeful
            </h2>
            <p className="text-gray-300 text-base">
              We help businesses and community organizations grow sustainably by offering data-driven strategy, stakeholder engagement, and operational clarity.
            </p>
            <p className="text-gray-300 text-base">
              Through proactive consulting and long-term partnerships, our clients gain more than just insights—they gain transformation and resilience.
            </p>
            <p className="text-gray-300 text-base">
              At Bulle Consulting, we don’t just provide services—we build futures.
            </p>

            <a
              href="#contact"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-5 rounded transition"
            >
              Get Started
            </a>
          </div>

          {/* Image & Stat Box */}
          <div className="relative w-full lg:w-auto flex justify-end">
            <div className="relative w-full lg:w-[150%] max-w-none -mr-[8vw]">
              <Image
                src="/image/bs.jpg"
                alt="consulting visual"
                width={1100}
                height={800}
                className="rounded-lg object-cover w-full h-auto"
              />
              <div className="absolute bottom-8 left-8 bg-white shadow-xl rounded-lg p-6 w-[400px] flex items-center gap-6">
                <Image
                  src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/MISC/dental-icon-people.svg"
                  alt="people icon"
                  width={75}
                  height={75}
                />
                <div>
                  <p className="text-2xl font-bold text-blue-600">150+</p>
                  <p className="text-gray-600 leading-snug">
                    Clients empowered through our strategic support and guidance
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats below intro */}
        <div className="max-w-7xl mx-auto px-4 mt-16 flex flex-col md:flex-row items-center gap-10 text-white">
          <p className="md:w-1/2 text-gray-300">
            Aenean et egestas nulla. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce gravida, ligula non molestie tristique, justo elit blandit risus, blandit maximus augue magna accumsan ante.
          </p>
          <ul className="md:w-1/2 flex gap-8 justify-center">
            <li className="flex items-center gap-4">
              <Image
                src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/Icons/dental-first-aid.svg"
                alt="first aid icon"
                width={48}
                height={48}
              />
              <div>
                <span className="text-3xl font-bold block">12+</span>
                <p>Years of scientific and clinical work.</p>
              </div>
            </li>
            <li className="flex items-center gap-4">
              <Image
                src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/Icons/dental-merit.svg"
                alt="merit icon"
                width={48}
                height={48}
              />
              <div>
                <span className="text-3xl font-bold block">35</span>
                <p>Certified specialists in various fields</p>
              </div>
            </li>
          </ul>
        </div>
      </section>

      {/* Cards section on white background
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              title: "Web Master",
              description:
                "Dignissimos asperiores vitae velit veniam totam fuga molestias accusamus alias autem provident. Odit ab aliquam dolor eius molestias accusamus alias autem provident. Odit ab aliquam dolor eius.",
              img: "/images/project-1.jpg",
              link: "#",
            },
            {
              title: "Business & Accounting",
              description:
                "Dignissimos asperiores vitae velit veniam totam fuga molestias accusamus alias autem provident. Odit ab aliquam dolor eius molestias accusamus alias autem provident. Odit ab aliquam dolor eius.",
              img: "/images/project-2.jpg",
              link: "#",
            },
            {
              title: "Science & Technology",
              description:
                "Dignissimos asperiores vitae velit veniam totam fuga molestias accusamus alias autem provident. Odit ab aliquam dolor eius molestias accusamus alias autem provident. Odit ab aliquam dolor eius.",
              img: "/images/project-3.jpg",
              link: "#",
            },
            {
              title: "Health & Psychology",
              description:
                "Dignissimos asperiores vitae velit veniam totam fuga molestias accusamus alias autem provident. Odit ab aliquam dolor eius molestias accusamus alias autem provident. Odit ab aliquam dolor eius.",
              img: "/images/project-4.jpg",
              link: "#",
            },
            {
              title: "Science & Technology",
              description:
                "Dignissimos asperiores vitae velit veniam totam fuga molestias accusamus alias autem provident. Odit ab aliquam dolor eius molestias accusamus alias autem provident. Odit ab aliquam dolor eius.",
              img: "/images/project-5.jpg",
              link: "#",
            },
            {
              title: "Health & Psychology",
              description:
                "Dignissimos asperiores vitae velit veniam totam fuga molestias accusamus alias autem provident. Odit ab aliquam dolor eius molestias accusamus alias autem provident. Odit ab aliquam dolor eius.",
              img: "/images/project-6.jpg",
              link: "#",
            },
          ].map(({ title, description, img, link }, idx) => (
            <div
              key={idx}
              className="course rounded-lg overflow-hidden shadow-lg flex flex-col md:flex-row"
            >
              <a
                href={link}
                className="course-img flex-shrink-0 bg-cover bg-center w-full md:w-48 h-40 md:h-auto"
                style={{ backgroundImage: `url(${img})` }}
                aria-label={title}
              />
              <div className="desc p-6 flex flex-col justify-between">
                <h3 className="text-xl font-semibold mb-2">
                  <a href={link} className="hover:underline">
                    {title}
                  </a>
                </h3>
                <p className="mb-4 text-gray-700">{description}</p>
                <span>
                  <a
                    href={link}
                    className="inline-block bg-blue-600 hover:bg-blue-700 text-white py-1 px-4 rounded text-sm transition"
                  >
                    Take A Course
                  </a>
                </span>
              </div>
            </div>
          ))}
        </div>
      </section> */}
    </div>
  );
}