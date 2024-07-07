import React from 'react'
import { HeroHighlight, Highlight } from '../ui/hero-highlight'
import { BackgroundGradient } from '../ui/background-gradient'

function Objectives() {
  return (
    <HeroHighlight className='w-[90%] mx-auto h-[80%] flex flex-col md:flex-row'>
        <div className='text-center text-4xl lg:text-8xl flex justify-center items-center text-white'>
            <Highlight>OBJECTIVE</Highlight>
        </div>
        <BackgroundGradient className='rounded-[22px]  p-10 pt-14 bg-white dark:bg-zinc-900 text-white'>
        The objective of the Interdisciplinary Conference on Mathematics, Science, and Linguistics is to foster collaboration and the exchange of ideas among participants from various disciplines. It aims to explore the intersection of these fields and promote innovative approaches to addressing complex challenges and advancing knowledge. The conference provides a platform for experts to present their latest research findings, theories, and methodologies, facilitating the sharing of knowledge and encouraging discussions on interdisciplinary topics. It fosters collaboration and research across disciplines, offering an opportunity for participants to interact, exchange ideas, and explore potential collaborations that can lead to advancements. By bringing together experts from different fields, the conference facilitates the crosspollination of ideas and perspectives, leading to new insights and solutions to existing problems. It seeks to bridge gaps between disciplines by exploring commonalities and synergies among them, encouraging participants to look beyond boundaries and discover connections that enhance understanding and problem-solving capabilities. Moreover, the conference aims to explore the practical applications and societal implications of interdisciplinary research, fostering discussions on how it can contribute to addressing societal challenges, advancing technology, and shaping policy. Overall, the Interdisciplinary Conference on Mathematics, Science, and Linguistics aims to create a collaborative environment where participants can share knowledge, collaborate across disciplines, and contribute to the advancement of these fields through interdisciplinary perspectives.
        </BackgroundGradient>
    </HeroHighlight>
  )
}

export default Objectives