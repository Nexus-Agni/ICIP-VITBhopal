import React from "react";
import { twMerge } from "tailwind-merge";
import { TracingBeam } from "../ui/tracing-beam"
import vitImg from "../../assets/VITBhopal.jpg"
import st1 from "../../assets/st1.png"
import bhopal from "../../assets/Bhopal.jpg"

function AboutBody() {
    const aboutData = [
    {
      badge: "Our Mission",
      title: "About The University",
      description: (
        <p>
          VIT Bhopal University, a legacy of VIT Vellore, was established in 2017 with a global perspective, dedicated to shaping the leaders of future generations. The university is led by Dr. G. Viswanathan, Founder and Chancellor; Mr. Sankar Viswanathan, Vice President; and Ms. Kadhambari S. Viswanathan, Assistant Vice President. It is a lush green campus covering over 350 acres situated at the heart of India, between the two cleanest cities, Indore and Bhopal. Within a short span, VIT Bhopal University has become one of the preferred choices for students due to its future-ready programs. VIT's global outlook empowers its aspirants to attain excellence through learning. The university employs a comprehensive and innovative teaching and learning practice known as Collaborative and Active Learning through Technology (CALTech). This approach redefines the methods of learning, education, and knowledge-building in the country. VIT Bhopal is the first private university to boast a 100 percent doctoral faculty, with members hailing from all over India. The university has established collabo-rations with reputed national and international organizations and strategic partner-ships with universities worldwide to prepare a globally competent generation of professionals. Currently, over 14,000 students are enrolled in twenty-six engineering and non-engineering undergraduate, postgraduate, and Ph.D programs from 32 states and union territories of the country.
        </p>
      ),
        image: vitImg
    },
    {
      badge: "Our Vision",
      title: "About The School",
      description: (
        <p>
            The School of Advanced Sciences and Languages (SASL) at VIT Bhopal is principally concerned with blending the best knowledge of science and humanities with engineering to align the expertise of our students with ever-changing technological requirements. The school offers numerous core and elective courses developed in collaboration with international academia and industrial experts in mathematics, chemistry, physics, and humanities. The school imparts knowledge by employing student-centered teaching approaches via state-of-the-art studio classrooms equipped with wave 2.0 technology. The school is also involved in research, where researchers and scholars, in partnerships with government, industry, and nonprofit organizations, develop cutting-edge technology and innovations to serve our society. The research carried out by our faculty members, with diverse research profiles and industrial and international working experience, ranges from basic areas such as drug design, microbiology, molecular modelling, energy and the environment, materials, catalysis, nonlinear dynamics, numerical methods, graph theory, space science, astrophysics, and computational linguistics to interdisciplinary areas such as biotechnology, nanoelectronics, computational biology, machine learning in biology and chemistry, and socio-linguistics teaching pedagogy.
        </p>
      ),
      image: st1
    },
    {
      badge: "Our Values",
      title: "About Bhopal",
      description: (
        <p>
          Bhopal, the capital of Madhya Pradesh, is renowned worldwide as The City of Lakes. It boasts a rich cultural heritage and historical significance, attracting tourists and visitors from all corners of the globe. The city is well connected to various parts of the country by road, rail, and air, making it easily accessible for travellers. With its picturesque lakes, lush greenery, and architectural marvels, Bhopal offers a unique blend of natural beauty and urban charm.

VIT Bhopal University is conveniently located at a distance of approximately 68 km from Bhopal and 125 km from Indore, ensuring easy access for students and faculty members alike.
        </p>
      ),
      image : bhopal
    },
    // {
    //   badge: "Our Team",
    //   title: "Meet the people behind the magic",
    //   description: (
    //     <p>
    //       Our team is made up of a diverse group of individuals who are united
    //       by a shared passion for technology and a desire to make a positive
    //       impact on the world. We come from a wide range of backgrounds and
    //       experiences, but we are all driven by the same goal: to create a
    //       better future for all.
    //     </p>
    //   ),
    // },
    ]
  return (
    <TracingBeam className="px-6 font-sans">
      <div className="max-w-2xl mx-auto antialiased pt-4 relative">
        {aboutData.map((item, index) => (
          <div key={`content-${index}`} className="mb-10">
            {/* <h2 className="bg-black text-white rounded-full text-sm w-fit px-4 py-1 mb-4">
              {item.badge}
            </h2> */}
 
            <p className="text-4xl mb-4 text-yellow-300">
              {item.title}
            </p>
 
            <div className="text-sm  prose prose-sm dark:prose-invert text-white">
              {item?.image && (
                <img
                  src={item.image}
                  alt="blog thumbnail"
                  height="1000"
                  width="1000"
                  className="rounded-lg mb-10 object-cover"
                />
              )}
              {item.description}
            </div>
          </div>
        ))}
      </div>
    </TracingBeam>
  )
}

export default AboutBody