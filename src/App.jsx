import { useState } from 'react'
import nailNutritionProducts from './assets/nail-nutrition-products.png'
import './App.css'

const skills = [
  { name: 'HTML', description: '시맨틱하고 접근성 높은 웹 구조를 작성합니다.', level: 90 },
  { name: 'CSS', description: '반응형 레이아웃과 일관된 UI를 구현합니다.', level: 85 },
  { name: 'JavaScript', description: '동적인 사용자 경험과 웹 기능을 개발합니다.', level: 80 },
  { name: 'React', description: '재사용 가능한 컴포넌트 기반 UI를 만듭니다.', level: 80 },
  { name: 'Vite', description: '빠른 개발 환경을 구성하고 빌드합니다.', level: 75 },
  { name: 'Figma', description: 'UI 화면을 설계하고 디자인 시스템을 정리합니다.', level: 75 },
  { name: 'Git', description: '버전을 관리하고 작업 이력을 체계적으로 기록합니다.', level: 70 },
  { name: 'GitHub', description: '프로젝트를 공유하고 협업 과정을 관리합니다.', level: 70 },
]

const nailVideo67Url = 'https://www.youtube.com/watch?v=wYMpIRX-Xxw'

const projects = [
  {
    title: '결담 | 스킨케어 브랜드 웹 프로젝트',
    description: '스킨케어 브랜드 결담의 브랜드 기획부터 제품 콘텐츠와 웹페이지 디자인까지 제작한 프로젝트입니다.',
    skills: ['Brand', 'Web Design', 'Figma', 'AI'],
    image: '/결담 프로젝트 이미지.png',
    demo: 'https://uiwhinabe.github.io/gyeoldam/',
    github: '/GYEOLDAM기획안.pdf',
    githubDownload: 'GYEOLDAM기획안.pdf',
    demoLabel: '사이트 바로가기',
    githubLabel: '기획안 PDF 다운로드',
  },
  {
    title: '네일 영양제 AI 영상 콘텐츠',
    description: '네일 영양제를 주제로 AI를 활용해 영상 콘셉트부터 이미지·영상 제작까지 진행한 콘텐츠 프로젝트입니다.',
    skills: ['React', 'JavaScript', 'CSS'],
    image: nailNutritionProducts,
    imageHref: nailVideo67Url,
    imageLinkLabel: '네일 영양제 AI 영상 콘텐츠 67초 영상 보기 (새 탭)',
    actions: [
      { label: '67초 영상', href: nailVideo67Url },
      { label: '31초 영상', href: 'https://youtu.be/vV0eQHRZJ4Q' },
      { label: '기획안 PDF', href: null, download: true },
    ],
    demo: null,
    github: null,
  },
  {
    title: 'Movie Search App',
    description: '영화 정보를 검색하고 원하는 콘텐츠를 확인하는 웹 애플리케이션입니다.',
    skills: ['React', 'API', 'Vite'],
    image: '/project-movie.svg',
    demo: null,
    github: null,
  },
]

const experiences = [
  {
    year: '2026',
    title: 'React Frontend Project',
    description: 'React와 Vite를 활용한 웹 애플리케이션 제작',
  },
  {
    year: '2025',
    title: 'UI/UX Design Project',
    description: 'Figma를 활용한 웹앱 UI/UX 기획 및 디자인',
  },
  {
    year: '2024',
    title: 'Web Publishing',
    description: 'HTML, CSS, JavaScript 기반 반응형 웹 제작',
  },
]

const contact = {
  email: 'xiaouiw@gmail.com',
  github: null,
}

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleFormChange = (event) => {
    const { name, value } = event.target

    setFormData((currentFormData) => ({
      ...currentFormData,
      [name]: value,
    }))
  }

  const handleFormSubmit = (event) => {
    event.preventDefault()
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <div className="portfolio">
      <header id="header" className="site-header">
        <div className="container site-header__container">
          <a className="site-header__logo" href="#hero" onClick={closeMenu}>
            MINKYOUNG'S PORTFOLIO
          </a>
          <button
            className="menu-toggle"
            type="button"
            aria-label={isMenuOpen ? '메뉴 닫기' : '메뉴 열기'}
            aria-expanded={isMenuOpen}
            aria-controls="primary-navigation"
            onClick={() => setIsMenuOpen((currentState) => !currentState)}
          >
            <span className="menu-toggle__line" aria-hidden="true"></span>
            <span className="menu-toggle__line" aria-hidden="true"></span>
            <span className="menu-toggle__line" aria-hidden="true"></span>
          </button>
          <nav
            id="primary-navigation"
            className={`site-header__nav${isMenuOpen ? ' site-header__nav--open' : ''}`}
            aria-label="Primary navigation"
          >
            <a href="#hero" onClick={closeMenu}>Home</a>
            <a href="#about" onClick={closeMenu}>About</a>
            <a href="#skills" onClick={closeMenu}>Skills</a>
            <a href="#projects" onClick={closeMenu}>Projects</a>
            <a href="#contact" onClick={closeMenu}>Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <section id="hero" className="portfolio-section hero-section">
          <div className="container hero-section__container">
            <div className="hero-section__content">
              <p className="section-label">안녕하세요.</p>
              <h1 className="portfolio__title">
                사용자 경험을 생각하며 구현하는
                <strong>Frontend Developer 박민경입니다.</strong>
              </h1>
              <p className="hero-section__description">
                React와 JavaScript를 활용하여 사용하기 편리하고 직관적인 웹
                서비스를 만드는 것을 좋아합니다.
              </p>
              <div className="hero-section__actions">
                <a className="button-link button-link--primary" href="#projects">
                  프로젝트 보기
                </a>
                <a className="button-link button-link--secondary" href="#contact">
                  연락하기
                </a>
              </div>
            </div>

            <div className="hero-section__image-wrap">
              <img
                className="hero-section__image"
                src="/프로필.jpg"
                alt="박민경 프로필 이미지"
              />
            </div>
          </div>
        </section>

        <section id="about" className="portfolio-section">
          <div className="container about-section__container">
            <div className="about-section__content">
              <p className="section-label">Get to know me</p>
              <h2 className="section-title">ABOUT ME</h2>
              <p>
                새로운 기술을 배우고 실제 결과물로 구현하는 것을 좋아하는
                프론트엔드 개발자입니다.
              </p>
              <p>
                UI/UX 디자인부터 React 기반 웹 개발까지 사용자 관점에서
                고민하며 작업합니다.
              </p>
            </div>

            <dl className="about-card">
              <div className="about-card__item">
                <dt>Name</dt>
                <dd>박민경</dd>
              </div>
              <div className="about-card__item">
                <dt>Position</dt>
                <dd>Frontend Developer</dd>
              </div>
              <div className="about-card__item">
                <dt>Focus</dt>
                <dd>React / UI·UX / AI</dd>
              </div>
              <div className="about-card__item">
                <dt>Location</dt>
                <dd>Seoul, Korea</dd>
              </div>
            </dl>
          </div>
        </section>

        <section id="skills" className="portfolio-section">
          <div className="container">
            <p className="section-label">What I use</p>
            <h2 className="section-title">SKILLS</h2>
            <p className="skills-section__intro">
              웹 서비스를 기획하고 구현할 때 사용하는 기술과 도구입니다.
            </p>

            <div className="skills-grid">
              {skills.map((skill) => (
                <article className="skill-card" key={skill.name}>
                  <div className="skill-card__heading">
                    <h3>{skill.name}</h3>
                    <span>{skill.level}%</span>
                  </div>
                  <p>{skill.description}</p>
                  <progress
                    aria-label={`${skill.name} 숙련도`}
                    max="100"
                    value={skill.level}
                  >
                    {skill.level}%
                  </progress>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="portfolio-section">
          <div className="container">
            <p className="section-label">What I made</p>
            <h2 className="section-title">PROJECTS</h2>
            <p className="projects-section__intro">
              사용자 경험과 기능 구현에 집중해 작업한 프로젝트입니다.
            </p>

            <div className="projects-grid">
              {projects.map((project) => (
                <article className="project-card" key={project.title}>
                  {project.imageHref || project.demo ? (
                    <a
                      className={`project-card__image-link${project.imageHref ? ' project-card__image-link--video' : ''}`}
                      href={project.imageHref || project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={project.imageLinkLabel || `${project.title} 사이트 바로가기`}
                    >
                      <img
                        className="project-card__image"
                        src={project.image}
                        alt={`${project.title} 프로젝트 미리보기`}
                      />
                    </a>
                  ) : (
                    <img
                      className="project-card__image"
                      src={project.image}
                      alt={`${project.title} 프로젝트 미리보기`}
                    />
                  )}
                  <div className="project-card__content">
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <ul className="project-card__technologies" aria-label="사용 기술">
                      {project.skills.map((skill) => (
                        <li key={skill}>{skill}</li>
                      ))}
                    </ul>
                    <div className={`project-card__actions${project.actions ? ' project-card__actions--videos' : ''}`}>
                      {project.actions ? project.actions.map((action) => (
                        action.href ? (
                          <a
                            key={action.label}
                            className="project-card__link"
                            href={action.href}
                            target={action.download ? undefined : '_blank'}
                            rel={action.download ? undefined : 'noopener noreferrer'}
                            download={action.download || undefined}
                          >
                            {action.label}
                          </a>
                        ) : (
                          <span
                            key={action.label}
                            className="project-card__link project-card__link--disabled"
                            aria-disabled="true"
                            aria-label={`${action.label} — 추후 업로드 예정`}
                            title="기획안 PDF는 추후 업로드 예정입니다."
                          >
                            {action.label}
                          </span>
                        )
                      )) : (
                        <>
                      {project.demo ? (
                        <a
                          className="project-card__link project-card__link--primary"
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {project.demoLabel || '프로젝트 보기'}
                        </a>
                      ) : (
                        <span
                          className="project-card__link project-card__link--disabled"
                          aria-disabled="true"
                        >
                          프로젝트 준비 중
                        </span>
                      )}
                      {project.github ? (
                        <a
                          className="project-card__link"
                          href={project.github}
                          target={project.githubDownload ? undefined : '_blank'}
                          rel={project.githubDownload ? undefined : 'noopener noreferrer'}
                          download={project.githubDownload || undefined}
                          onClick={project.githubDownload && import.meta.env.BASE_URL !== '/' ? (event) => {
                            event.preventDefault()
                            const downloadLink = document.createElement('a')
                            downloadLink.href = `${import.meta.env.BASE_URL}GYEOLDAM기획안.pdf`
                            downloadLink.download = 'GYEOLDAM기획안.pdf'
                            downloadLink.click()
                          } : undefined}
                        >
                          {project.githubLabel || 'GitHub'}
                        </a>
                      ) : (
                        <span
                          className="project-card__link project-card__link--disabled"
                          aria-disabled="true"
                        >
                          GitHub 준비 중
                        </span>
                      )}
                        </>
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="experience" className="portfolio-section">
          <div className="container">
            <p className="section-label">My journey</p>
            <h2 className="section-title">EXPERIENCE</h2>
            <p className="experience-section__intro">
              교육과 프로젝트를 통해 쌓아 온 경험입니다.
            </p>

            <ol className="timeline">
              {experiences.map((experience) => (
                <li className="timeline__item" key={experience.year}>
                  <div className="timeline__marker" aria-hidden="true"></div>
                  <article className="timeline__card">
                    <time className="timeline__year" dateTime={experience.year}>
                      {experience.year}
                    </time>
                    <h3>{experience.title}</h3>
                    <p>{experience.description}</p>
                  </article>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="contact" className="portfolio-section">
          <div className="container contact-section__container">
            <div className="contact-section__content">
              <p className="section-label">Contact</p>
              <h2 className="section-title">LET&apos;S WORK TOGETHER</h2>
              <p className="contact-section__description">
                프로젝트와 협업에 관심이 있으시면 언제든지 연락해주세요.
              </p>

              <address className="contact-info">
                <div className="contact-info__item">
                  <span>Email</span>
                  <a href={`mailto:${contact.email}`}>{contact.email}</a>
                </div>
                <div className="contact-info__item">
                  <span>GitHub</span>
                  {contact.github ? (
                    <a
                      href={contact.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub Profile
                    </a>
                  ) : (
                    <span className="contact-info__unavailable">추후 업데이트</span>
                  )}
                </div>
              </address>
            </div>

            <form className="contact-form" onSubmit={handleFormSubmit}>
              <div className="contact-form__field">
                <label htmlFor="contact-name">이름</label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  placeholder="이름을 입력해주세요."
                  required
                  value={formData.name}
                  onChange={handleFormChange}
                />
              </div>
              <div className="contact-form__field">
                <label htmlFor="contact-email">이메일</label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="이메일을 입력해주세요."
                  required
                  value={formData.email}
                  onChange={handleFormChange}
                />
              </div>
              <div className="contact-form__field">
                <label htmlFor="contact-message">메시지</label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows="6"
                  placeholder="메시지를 입력해주세요."
                  required
                  value={formData.message}
                  onChange={handleFormChange}
                ></textarea>
              </div>
              <button type="submit">메시지 보내기</button>
            </form>
          </div>
        </section>
      </main>

      <footer id="footer" className="site-footer">
        <div className="container site-footer__container">
          <p>© 2026 MINKYOUNG Portfolio. All Rights Reserved.</p>
          <nav className="site-footer__links" aria-label="Footer links">
            {contact.github ? (
              <a
                href={contact.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            ) : (
              <span className="site-footer__link--disabled">GitHub 준비 중</span>
            )}
            <a href={`mailto:${contact.email}`}>Email</a>
          </nav>
        </div>
      </footer>
    </div>
  )
}

export default App
