import Image from 'next/image'
import Header from './components/Header'
import MainPhoto from './components/MainPhoto'
import Profile from './components/Profile'
import Skill from './components/Skill'
import Work from './components/Work'
import Contact from './components/Contact'

export default function Home() {
  return (
    <>
    <Header/>
    <main >
     <MainPhoto/>
     <Profile/>
     <Skill/>
     <Work/>
     <Contact/>
    </main>
    
    </>
  )
}
