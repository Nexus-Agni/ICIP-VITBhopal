import React from 'react'
import { HeroHighlight, Highlight } from '../ui/hero-highlight'
import { BackgroundGradient } from '../ui/background-gradient'

function Objectives() {
  return (
    <HeroHighlight className='w-[90%] h-[40%] md:h-[80%]  md:items-center justify-start md:justify-between md:space-x-8 flex flex-col md:flex-row space-y-5 md:space-y-0'>
        <div className='text-center text-4xl lg:text-8xl flex justify-center items-center text-white'>
            <Highlight className='text-yellow-300'>OBJECTIVE</Highlight>
        </div>
        <BackgroundGradient className='rounded-[22px] h-[30rem] overflow-scroll md:overflow-clip p-9 text-justify bg-white dark:bg-zinc-900 text-white '>
        The objective of the Interdisciplinary Conference on Mathematics, Science, and Linguistics is to foster collaboration and the exchange of ideas among participants from various disciplines. It aims to explore the intersection of these fields and promote innovative approaches to addressing complex challenges and advancing knowledge. The conference provides a platform for experts to present their latest research findings, theories, and methodologies, facilitating the sharing of knowledge and encouraging discussions on interdisciplinary topics. It fosters collaboration and research across disciplines, offering an opportunity for participants to interact, exchange ideas, and explore potential collaborations that can lead to advancements. By bringing together experts from different fields, the conference facilitates the crosspollination of ideas and perspectives, leading to new insights and solutions to existing problems. It seeks to bridge gaps between disciplines by exploring commonalities and synergies among them, encouraging participants to look beyond boundaries and discover connections that enhance understanding and problem-solving capabilities. Moreover, the conference aims to explore the practical applications and societal implications of interdisciplinary research, fostering discussions on how it can contribute to addressing societal challenges, advancing technology, and shaping policy. Overall, the Interdisciplinary Conference on Mathematics, Science, and Linguistics aims to create a collaborative environment where participants can share knowledge, collaborate across disciplines, and contribute to the advancement of these fields through interdisciplinary perspectives.
        </BackgroundGradient>
        {/* <BackgroundGradient className='rounded-[22px] h-fit  p-9 text-justify bg-white dark:bg-zinc-900 text-white block md:hidden'>
        The Interdisciplinary Conference on Mathematics, Science, and Linguistics aims to foster collaboration and idea exchange among experts from various disciplines. It focuses on exploring intersections between these fields to promote innovative solutions to complex challenges and advance knowledge. The conference provides a platform for presenting research findings, theories, and methodologies, facilitating knowledge sharing and interdisciplinary discussions. By bringing together experts from different fields, the event encourages collaboration, leading to new insights and solutions. Additionally, it explores the practical applications and societal implications of interdisciplinary research, contributing to societal challenges, technological advancements, and policy shaping.
        </BackgroundGradient> */}
    </HeroHighlight>
  )
}

export default Objectives