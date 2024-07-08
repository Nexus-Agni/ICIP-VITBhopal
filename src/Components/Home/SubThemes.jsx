import React from 'react'
import { StickyScroll } from '../ui/sticky-scroll-reveal'
import { Highlight } from '../ui/hero-highlight'
import st1 from "../../assets/st1.png"
import st2 from "../../assets/st2.png"
import st3 from "../../assets/st3.png"
import st4 from "../../assets/st4.png"
import st5 from "../../assets/st5.png"
import st6 from "../../assets/st6.png"
import st7 from "../../assets/st7.png"
import st8 from "../../assets/st8.png"
import st9 from "../../assets/st9.png"

function SubThemes() {
    const content = [
        {
            title : "Science and Mathematics Education",
            description : "Innovative teaching methods in science and mathematics. Curriculum development and evaluation. Integration of technology in science and mathematics education. Assessment and evaluation in science and mathematics education",
            content : (
                <div className='className="h-full w-full  flex items-center justify-center text-white"'>
                    <img src={st1} alt="Science and Mathematics Education" height={500} width={500} className="h-full w-full object-cover" />
                </div>
            )
        },
        {
            title : "Data Science and Computational Methods",
            description : "Big Data Analytics, Machine Learning and Artifical Intelligence, Statistical Methods in Data Science, Applicatin of Data Science in various domains.",
            content : (
                <div className='className="h-full w-full  flex items-center justify-center text-white"'>
                    <img src={st2} alt="Data Science and Computational Methods" height={300} width={300} className="h-full w-full object-cover" />
                </div>
            )

        },
        {
            title : "Computational Biology",
            description : "Bioinformatics, System Biology, Computational Genomics, Biological Data Analysis.",
            content : (
                <div className='className="h-full w-full  flex items-center justify-center text-white"'>
                    <img src={st3} alt="Computational Biology" height={300} width={300} className="h-full w-full object-cover" />
                </div>
            )
        },
        {
            title : "Computational Physics",
            description : "Numerical Methods in Physics, Simulation and Modelling in Physics, Quantum Computing and its applications, Computational Methods in theoritical Physics.",
            content : (
                <div className='className="h-full w-full  flex items-center justify-center text-white"'>
                    <img src={st4} alt="Computational Physics" height={300} width={300} className="h-full w-full object-cover" />
                </div>
            )
        },
        {
            title : "Computational Chemistry",
            description : "Molecular Modelling and simulations, Quantum Chemistry, Cheminformatics, Application of Computational Drug Design.",
            content : (
                <div className='className="h-full w-full  flex items-center justify-center text-white"'>
                    <img src={st5} alt="Computational Chemistry" height={300} width={300} className="h-full w-full object-cover" />
                </div>
            )
        }, 
        {
            title : "Mathematical Modelling in Natural Sciences",
            description : "Mathematical Modelling in Physics, Chemistry, Biology and Linguistics, Applications of Differential Equations, Computational Techniques in Natural sciences and languages, Interdisciplinary applications of mathematical modelling.",
            content : (
                <div className='className="h-full w-full  flex items-center justify-center text-white"'>
                    <img src={st6} alt="Mathematical Modelling in Natural Sciences" height={300} width={300} className="h-full w-full object-cover" />
                </div>
            )
        }, 
        {
            title : "Interdisciplinary Approaches to Data Science",
            description : "Data Science in Social Sciences and Humanities, Ethical issues in Data Science, Data Visualization and Interpretation, Case Studies and Applications.",
            content : (
                <div className='className="h-full w-full  flex items-center justify-center text-white"'>
                    <img src={st7} alt="Interdisciplinary Approaches to Data Science" height={300} width={300} className="h-full w-full object-cover" />
                </div>
            )
        },
        {
            title : "Environmental Science and sustainability",
            description : "Climate Change and Environmental Modelling, Sustainable Development, Environmental Data Analysis, Interdisciplinary approaches to environmental science.",
            content : (
                <div className='className="h-full w-full  flex items-center justify-center text-white"'>
                    <img src={st8} alt="Environmental Science and sustainability" height={300} width={300} className="h-full w-full object-cover" />
                </div>
            )
        },
        {
            title : "Cognitive Science and Language",
            description : "Language acquisition and processing, Cognitive Models of Language understanding, Neurolinguistics, Language and thou.",
            content : (
                <div className='className="h-full w-full  flex items-center justify-center text-white"'>
                    <img src={st9} alt="Cognitive Science and Language" height={300} width={300} className="h-full w-full object-cover" />
                </div>
            )
        },
        {
            title : "",
            description : "",
            // content : (
            //     <div className='className="h-full w-full  flex items-center justify-center text-white"'>
            //         <img src={st9} alt="Cognitive Science and Language" height={300} width={300} className="h-full w-full object-cover" />
            //     </div>
            // )
        }
    ]
  return (
    <>
    <div className='text-center text-4xl lg:text-8xl flex justify-center bg-black items-center text-white'>
        <Highlight className='text-yellow-300'>SUB THEMES</Highlight>
    </div>
    <div className=''>
        <StickyScroll content={content} />
    </div>
    </>
  )
}

export default SubThemes