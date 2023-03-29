import Hero from '../components/Hero'
import Projects from '../components/Projects'
import CreateProject from '../components/CreateProject'
import AddButton from '../components/AddButton'
import { useEffect } from 'react'
import { loadProjects } from '../services/blockchain'
import { useGlobalState } from '../store'

const Home = () => {
  const [projects] = useGlobalState('projects')

  useEffect(async () => {
    await loadProjects()
  }, [])
  return (
    <>
        <Hero />
        <Projects projects={projects} />
        <CreateProject />
        <AddButton />
    </>

  )
}

export default Home