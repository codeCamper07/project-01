import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Sidebar from '@/components/sidebar'
import Header from '@/components/header'
import NameCard from '@/components/nameCard'
import Projects from '@/components/projects'

const inter = Inter({ subsets: ['latin'] })

const skill = [
  {
    category: 'Web Development',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js'],
  },
  {
    category: 'Tools',
    skills: ['Git', 'Visual Studio Code', 'AWS Amplify', 'AWS Lambda'],
  },
]

export default function Home() {
  return (
    <>
      <Head>
        <title>Dommaraju Bhargav&apos;s Portfolio</title>
      </Head>
      <div className={styles.container}>
        <div className={styles.side}>
          <Sidebar />
        </div>
        <div className={styles.mainContainer}>
          <Header />
          <div className={styles.contentContainer}>
            <div>
              <NameCard />
            </div>
            <Projects />
            <div id='aboutme'>
              <h1>About Me</h1>
              <p>
                As an accomplished full-stack web developer, I possess a
                comprehensive skill set that enables me to architect and
                implement sophisticated web solutions. With proficiency spanning
                both front-end and back-end development, I bring strategic
                vision to user interface design and technical prowess to
                server-side functionalities. My expertise includes leveraging
                HTML, CSS, and JavaScript for intuitive interfaces, while
                harnessing the power of server-side languages and frameworks to
                engineer robust back-end systems. Driven by a dedication to
                optimizing user experiences and adhering to industry best
                practices, I am adept at transforming conceptual ideas into
                meticulously crafted web applications. My professional journey
                is characterized by a commitment to continuous learning and
                innovative problem-solving, resulting in the seamless
                integration of cutting-edge technologies into high-performance,
                full-stack solutions.
              </p>
            </div>
            <div id='skills'>
              <h1>Skills</h1>
              {skill.map((items, i) => (
                <div key={i}>
                  <h3>{items.category}</h3>
                  <ul style={{ display: 'flex', gap: '20px', padding: '25px' }}>
                    {items.skills.map((eveySkill, j) => (
                      <li key={j}>{eveySkill}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
