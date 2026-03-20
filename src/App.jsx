import './App.css'

function App() {
  const profile = {
    name: 'VO CHI THONG',
    role: 'Information Technology Student',
    location: '31/8D, My Hoa 3, Tan Xuan, Hoc Mon, Ho Chi Minh City',
    email: '94.thongvo@gmail.com',
    phone: '0902 785 990',
    portfolio: 'https://bom.so/5amIa0',
    github: 'https://github.com/STNx99',
    about:
      'I am an Information Technology student at HUTECH University with a passion for technology and a strong desire to become a frontend developer. I am eager to apply my knowledge and grow in this field.',
  }

  const softSkills = [
    'Time Management',
    'Read Scientific Papers',
    'Teamwork',
    'Critical Thinking',
    'Listen and Learn',
    'Presentation',
    'English',
  ]

  const technologies = [
    'JavaScript/TypeScript, ReactJS, NextJS',
    'NodeJS, ExpressJS',
    'TailwindCSS',
    'SQLServer, PostgreSQL',
  ]

  const achievements = [
    'Top 1 school-level STEM project (Grade 9)',
    'Bronze medal city-level Math Olympiad (Grade 11)',
    'Participated in coding talent incubation contest',
    'Bronze medal school-level tug of war',
    '3rd prize HDBANK Hackathon 2023',
    '4th prize Math IQ competition (2023)',
    '1st prize Math IQ competition (2024)',
  ]

  const education = [
    {
      school: 'Ho Chi Minh University of Technology - HUTECH',
      level: 'University',
      period: '2022 - 2026',
      summary: 'Major: Information Technology | GPA: 3.38/4.0',
    },
  ]

  const projects = [
    {
      name: 'HDBANK 24 / IT GOT TALENT 24',
      summary:
        'Project for managing monthly expenses and service payments. Built with ReactJS and Go.',
      link: 'https://github.com/STNx99/RegularBilling.git',
    },
    {
      name: 'AI Fall Detection (study in class)',
      summary:
        'Fall detection using YOLOv8 and LSTM algorithm for higher prediction accuracy.',
      link: 'https://github.com/STNx99/fallDetecWithLSTM.git',
    },
    {
      name: 'Mobile App (study in class)',
      summary:
        'Messaging app between users, built with Flutter/Dart and Firebase.',
      link: 'https://github.com/STNx99/Mobile.git',
    },
    {
      name: 'WebBuilder (Frontend)',
      summary:
        'Helps users build website UI without coding, built with NextJS and ASP.NET.',
      link: 'https://github.com/STNx99/webBuilder.git',
    },
  ]

  return (
    <main className="cv-page">
      <section className="hero-card">
        <div>
          <p className="eyebrow">Personal Portfolio</p>
          <h1>{profile.name}</h1>
          <p className="role">{profile.role}</p>
          <p className="about">{profile.about}</p>
          <div className="contact-row">
            <span>{profile.location}</span>
            <span>{profile.email}</span>
            <span>{profile.phone}</span>
            <a href={profile.portfolio} target="_blank" rel="noreferrer">
              Portfolio
            </a>
            <a href={profile.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
          </div>
        </div>
      </section>

      <section className="section-block">
        <h2>Skills</h2>
        <div className="chip-grid">
          {softSkills.map((skill) => (
            <span key={skill} className="chip">
              {skill}
            </span>
          ))}
        </div>
      </section>

      <section className="section-block">
        <h2>Technology Learnt and Learning</h2>
        <div className="timeline">
          {technologies.map((tech) => (
            <article key={tech} className="timeline-item">
              <p>{tech}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-block">
        <h2>Achievement</h2>
        <ul className="bullet-list">
          {achievements.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="section-block">
        <h2>Education</h2>
        <div className="timeline">
          {education.map((item) => (
            <article key={item.school} className="timeline-item">
              <div className="timeline-head">
                <h3>{item.school}</h3>
                <span>{item.period}</span>
              </div>
              <p className="company">{item.level}</p>
              <p>{item.summary}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-block">
        <h2>Projects</h2>
        <div className="project-grid">
          {projects.map((project) => (
            <article key={project.name} className="project-card">
              <h3>{project.name}</h3>
              <p>{project.summary}</p>
              <a href={project.link} target="_blank" rel="noreferrer">
                {project.link}
              </a>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}

export default App
