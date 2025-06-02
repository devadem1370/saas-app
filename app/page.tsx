import CompanionCard from '@/components/CompanionCard'
import React from 'react'
import CompanionsList from '@/components/CompanionsList'
import Cta from '@/components/Cta'
import { recentSessions } from '@/constants'

const Page = () => {
  return (
    <main className=''>
      <h1>Popular Companions</h1>
      <section className="home-section">
        <CompanionCard
        id="1"
        name="Neura the Brainy Explorer"
        topic="Neural Network of the Brain"
        subject="Science"
        duration={45}
        color="#008903"
        />
        <CompanionCard
        id="3"
        name="Neura the Brainy Explorer"
        topic="Neural Network of the Brain"
        subject="Science"
        duration={90}
        color="#9099ed"
        />
        <CompanionCard
        id="12"
        name="Neura the Brainy Explorer"
        topic="Neural Network of the Brain"
        subject="Science"
        duration={40}
        color="#980432"
        />
        
      </section>

      <section className="home-section pb-3">
        <CompanionsList
        title="Recently completed sessions"
        companions={recentSessions}
        classNames="w-2/3 max-lg:w-full"
        
        />
        <Cta/>
      </section>
    </main>
  )
}

export default Page