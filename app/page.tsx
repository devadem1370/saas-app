export const dynamic = 'force-dynamic';

import CompanionCard from '@/components/CompanionCard'
import React from 'react'
import CompanionsList from '@/components/CompanionsList'
import Cta from '@/components/Cta'
import { getAllCompanions, getRecentSessions } from '@/lib/actions/companion.action'
import { getSubjectColor } from '@/lib/utils'

const Page = async () => {

  const companions = await getAllCompanions({limit: 3}) ;

  const recentSessionsCompanion = await getRecentSessions( 10);

  return (
    <main className=''>
      <h1>Popular Companions</h1>
      <section className="home-section">
        {companions.map((companion) =>(
           <CompanionCard
           {...companion}
           key={companion.id}
           color={getSubjectColor(companion.subject)}

      
        />

        ))}
       
       
        
      </section>

      <section className="home-section pb-3">
        <CompanionsList
        title="Recently completed sessions"
        companions={recentSessionsCompanion}
        classNames="w-2/3 max-lg:w-full"
        
        />
        <Cta/>
      </section>
    </main>
  )
}

export default Page