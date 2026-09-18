import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Navbar from "./components/Navbar";
import "./App.css";

const projects = [
  {
    title: "Ayurvedic Diagnosis & Recommendation",
    category: "AI / Machine Learning",
    description:
      "An ML-based web application for disease prediction and personalized Ayurvedic recommendations.",
    details:
      "The project combines machine learning with Ayurveda to predict diseases based on symptoms and provide personalized Ayurvedic recommendations. The application was developed using Python, Machine Learning and Streamlit.",
    technologies: ["Python", "Machine Learning", "Streamlit"],
    github: "https://github.com/Swathi550/ayucare-replit",
    icon: "🌿",
  },
  {
    title: "Business Sales Dashboard",
    category: "Data Analytics",
    description:
      "A Power BI dashboard designed to analyze sales, profit, quantity, orders and business performance.",
    details:
      "The dashboard presents business sales information through KPI cards and visual analytics. It covers sales, profit, quantity, orders, categories, regions and other business insights using Power BI and CSV data.",
    technologies: ["Power BI", "Data Analysis", "CSV"],
    github: "https://github.com/Swathi550/FUTURE_DS_01",
    icon: "📊",
  },
  {
    title: "College Event Feedback Analysis",
    category: "Data Science",
    description:
      "A Python-based analysis of event ratings, comments, sentiment and satisfaction trends.",
    details:
      "This project analyzes college event feedback using Python and data analysis techniques. It explores ratings, comments, sentiment and satisfaction trends using Pandas and TextBlob.",
    technologies: ["Python", "Pandas", "TextBlob"],
    github: "https://github.com/Swathi550/FUTURE_DS_03",
    icon: "💬",
  },
  {
    title: "Titanic Dataset EDA",
    category: "Exploratory Data Analysis",
    description:
      "An exploratory data analysis project using Python and Pandas to understand the Titanic dataset.",
    details:
      "The project focuses on exploring and understanding the Titanic dataset using Python, Pandas and exploratory data analysis techniques.",
    technologies: ["Python", "Pandas", "EDA"],
    github: "https://github.com/Swathi550/EDA-on-Titanic-Dataset",
    icon: "🚢",
  },
];

const skills = {
  Programming: ["Python", "SQL"],
  "AI / ML": [
    "Machine Learning",
    "Deep Learning",
    "NLP",
    "Generative AI",
    "LLMs",
    "Model Training",
    "Model Evaluation",
  ],
  Data: [
    "Pandas",
    "NumPy",
    "Data Preprocessing",
    "EDA",
    "Data Visualization",
  ],
  "Web / API": [
    "HTML",
    "CSS",
    "React.js",
    "REST APIs",
    "API Integration",
  ],
  Database: ["MySQL", "PostgreSQL"],
  Tools: ["Git", "GitHub", "Power BI", "Jupyter", "VS Code"],
  Core: [
    "OOP",
    "Data Structures",
    "DBMS",
    "Operating Systems",
    "Computer Networks",
    "SDLC",
  ],
};

const certifications = [
  {
    title: "AI & ML using Python",
    organization: "SWAYAM Plus",
  },
  {
    title: "Data Science",
    organization: "IBM SkillsBuild",
  },
  {
    title: "AI & Robotics",
    organization: "GEC Thrissur",
  },
];

const softSkills = [
  "Problem Solving",
  "Analytical Thinking",
  "Communication",
  "Quick Learning",
  "Team Collaboration",
];

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [selectedProject, setSelectedProject] = useState(null);
  const [resumeOpen, setResumeOpen] = useState(false);
  const [toast, setToast] = useState("");
  const [githubRepos, setGithubRepos] = useState([]);
  const [githubLoading, setGithubLoading] = useState(true);
  const [visitorCount, setVisitorCount] = useState(1);

  useEffect(() => {
    document.body.className = darkMode ? "dark-theme" : "light-theme";
  }, [darkMode]);

  useEffect(() => {
    const storedCount = Number(
      localStorage.getItem("swathi_portfolio_visitors") || "0"
    );

    const newCount = storedCount + 1;

    localStorage.setItem(
      "swathi_portfolio_visitors",
      String(newCount)
    );

    setVisitorCount(newCount);
  }, []);

  useEffect(() => {
    const fetchGithubRepos = async () => {
      try {
        const response = await fetch(
          "https://api.github.com/users/Swathi550/repos?sort=updated&per_page=6"
        );

        if (!response.ok) {
          throw new Error("GitHub request failed");
        }

        const data = await response.json();

        setGithubRepos(data);
      } catch (error) {
        console.error("GitHub error:", error);
      } finally {
        setGithubLoading(false);
      }
    };

    fetchGithubRepos();
  }, []);

  const showToast = (message) => {
    setToast(message);

    setTimeout(() => {
      setToast("");
    }, 3000);
  };

  const handleContactSubmit = (event) => {
    event.preventDefault();

    const form = event.currentTarget;

    const name = form.name.value;
    const email = form.email.value;
    const message = form.message.value;

    const subject = encodeURIComponent(
      `Portfolio Contact from ${name}`
    );

    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    );

    window.location.href =
      `mailto:swathiii2004.vineetha@gmail.com?subject=${subject}&body=${body}`;

    showToast("Opening your email application...");
    form.reset();
  };

  const openGithub = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="app">
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        onResumeClick={() => setResumeOpen(true)}
      />

      {/* HERO */}
      <section id="home" className="hero section">
        <div className="hero-background">
          <div className="gradient-blob blob-one"></div>
          <div className="gradient-blob blob-two"></div>
        </div>

        <div className="hero-content">
          <motion.div
            className="hero-text"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="eyebrow">
              ✦ AI / ML • DATA • SOFTWARE
            </span>

            <h1>
              Hi, I'm{" "}
              <span className="gradient-text">Swathi</span>
              <br />
              <span className="hero-subtitle">
                AI Developer.
              </span>
            </h1>

            <p className="hero-description">
              B.Tech graduate in Artificial Intelligence &
              Machine Learning, passionate about building
              intelligent applications, data-driven solutions
              and modern software experiences.
            </p>

            <div className="hero-buttons">
              <a href="#projects" className="primary-button">
                Explore My Work
                <span>↗</span>
              </a>

              <button
                className="secondary-button"
                onClick={() => setResumeOpen(true)}
              >
                View Resume
              </button>
            </div>

            <div className="hero-mini-stats">
              <div>
                <strong>8.21</strong>
                <span>CGPA</span>
              </div>

              <div>
                <strong>AI/ML</strong>
                <span>Graduate</span>
              </div>

              <div>
                <strong>2026</strong>
                <span>Graduate</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="hero-photo-wrapper"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.2,
            }}
          >
            <div className="photo-glow"></div>

            <div className="profile-frame">
              <img
                src="/swathi.jpg"
                alt="Swathi Parameswaran"
                className="profile-image"
              />
            </div>

            <div className="photo-caption">
              <span className="status-dot"></span>
              Open to opportunities
            </div>
          </motion.div>
        </div>
      </section>

      {/* QUICK INFO */}
      <section className="quick-section">
        <div className="container quick-grid">
          <motion.div
            className="quick-card"
            whileHover={{ y: -5 }}
          >
            <span className="quick-icon">🤖</span>
            <div>
              <strong>AI & ML</strong>
              <p>Intelligent solutions</p>
            </div>
          </motion.div>

          <motion.div
            className="quick-card"
            whileHover={{ y: -5 }}
          >
            <span className="quick-icon">📈</span>
            <div>
              <strong>Data</strong>
              <p>Insights & analytics</p>
            </div>
          </motion.div>

          <motion.div
            className="quick-card"
            whileHover={{ y: -5 }}
          >
            <span className="quick-icon">💻</span>
            <div>
              <strong>Development</strong>
              <p>Modern applications</p>
            </div>
          </motion.div>

          <motion.div
            className="quick-card"
            whileHover={{ y: -5 }}
          >
            <span className="quick-icon">🚀</span>
            <div>
              <strong>Learning</strong>
              <p>Always exploring</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="section content-section">
        <div className="container">
          <SectionHeading
            eyebrow="01 / ABOUT"
            title="A little about me"
            description="A curious AI & ML graduate focused on turning ideas into practical digital solutions."
          />

          <div className="about-grid">
            <motion.div
              className="about-main card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="card-label">PROFILE</span>

              <h3>
                Building with{" "}
                <span className="gradient-text">
                  intelligence & creativity.
                </span>
              </h3>

              <p>
                I am Swathi Parameswaran, a B.Tech graduate in
                Artificial Intelligence and Machine Learning
                from Vidya Academy of Science and Technology.
              </p>

              <p>
                My interests include Artificial Intelligence,
                Machine Learning, Data Science, Generative AI,
                application development and data-driven
                problem solving.
              </p>

              <p>
                I enjoy learning new technologies and building
                practical projects that connect technology
                with real-world problems.
              </p>
            </motion.div>

            <motion.div
              className="about-side"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className="info-card">
                <span>EDUCATION</span>
                <strong>B.Tech AI & ML</strong>
                <p>Vidya Academy of Science and Technology</p>
              </div>

              <div className="info-card">
                <span>LOCATION</span>
                <strong>Kerala, India</strong>
                <p>Thrissur</p>
              </div>

              <div className="info-card">
                <span>LANGUAGES</span>
                <strong>English & Malayalam</strong>
                <p>Professional communication</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* EXPERTISE */}
      <section className="section expertise-section">
        <div className="container">
          <SectionHeading
            eyebrow="02 / EXPERTISE"
            title="What I work with"
            description="A growing technical toolkit across AI, data and application development."
          />

          <div className="expertise-grid">
            <ExpertiseCard
              icon="🧠"
              title="Artificial Intelligence"
              text="Machine Learning, Deep Learning, NLP, Generative AI and LLM concepts."
            />

            <ExpertiseCard
              icon="📊"
              title="Data & Analytics"
              text="Data preprocessing, exploratory analysis, visualization and business insights."
            />

            <ExpertiseCard
              icon="⚙️"
              title="Application Development"
              text="React.js, HTML, CSS, REST APIs and API integration."
            />
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="section content-section">
        <div className="container">
          <SectionHeading
            eyebrow="03 / SKILLS"
            title="Technical toolkit"
            description="Technologies and concepts included in my current skill set."
          />

          <div className="skills-grid">
            {Object.entries(skills).map(([category, items], index) => (
              <motion.div
                className="skill-card"
                key={category}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.04 }}
              >
                <div className="skill-card-header">
                  <span className="skill-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <h3>{category}</h3>
                </div>

                <div className="skill-tags">
                  {items.map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="section projects-section">
        <div className="container">
          <SectionHeading
            eyebrow="04 / PROJECTS"
            title="Things I've built"
            description="Selected projects across machine learning, data analytics and exploratory analysis."
          />

          <div className="projects-grid">
            {projects.map((project, index) => (
              <motion.article
                className="project-card"
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                whileHover={{ y: -8 }}
              >
                <div className="project-top">
                  <span className="project-icon">
                    {project.icon}
                  </span>

                  <span className="project-index">
                    0{index + 1}
                  </span>
                </div>

                <span className="project-category">
                  {project.category}
                </span>

                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <div className="project-tech">
                  {project.technologies.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>

                <div className="project-actions">
                  <button
                    className="small-button"
                    onClick={() => setSelectedProject(project)}
                  >
                    Details
                  </button>

                  <button
                    className="github-button"
                    onClick={() => openGithub(project.github)}
                  >
                    GitHub ↗
                  </button>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* GITHUB */}
      <section className="section github-section">
        <div className="container">
          <SectionHeading
            eyebrow="05 / GITHUB"
            title="Live repositories"
            description="A live view of public repositories from my GitHub profile."
          />

          {githubLoading ? (
            <div className="loading-box">
              Loading GitHub repositories...
            </div>
          ) : githubRepos.length > 0 ? (
            <div className="github-grid">
              {githubRepos.map((repo) => (
                <motion.a
                  href={repo.html_url}
                  target="_blank"
                  rel="noreferrer"
                  className="github-card"
                  key={repo.id}
                  whileHover={{ y: -5 }}
                >
                  <div className="github-card-top">
                    <span className="github-symbol">
                      ◉
                    </span>

                    <span>↗</span>
                  </div>

                  <h3>{repo.name}</h3>

                  <p>
                    {repo.description ||
                      "Public GitHub repository."}
                  </p>

                  <div className="repo-meta">
                    {repo.language && (
                      <span>{repo.language}</span>
                    )}

                    <span>★ {repo.stargazers_count}</span>
                  </div>
                </motion.a>
              ))}
            </div>
          ) : (
            <div className="loading-box">
              GitHub repositories could not be loaded.
              <br />
              <a
                href="https://github.com/Swathi550"
                target="_blank"
                rel="noreferrer"
              >
                Visit GitHub →
              </a>
            </div>
          )}

          <div className="github-profile-button-wrapper">
            <a
              href="https://github.com/Swathi550"
              target="_blank"
              rel="noreferrer"
              className="secondary-button"
            >
              View GitHub Profile ↗
            </a>
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="section content-section">
        <div className="container">
          <SectionHeading
            eyebrow="06 / EXPERIENCE"
            title="My journey"
            description="Education and professional experience."
          />

          <div className="timeline">
            <TimelineItem
              year="Aug 2026 — Present"
              title="AI Developer Trainee"
              company="White Matrix Software Solutions"
              text="Currently working as an AI Developer Trainee at White Matrix Software Solutions."
              current
            />

            <TimelineItem
              year="Internship"
              title="Data Science Intern"
              company="HexSoftwares"
              text="Worked on data preprocessing, exploratory data analysis, machine learning model development and model evaluation."
            />

            <TimelineItem
              year="2022 — 2026"
              title="B.Tech — Artificial Intelligence & Machine Learning"
              company="Vidya Academy of Science and Technology"
              text="Graduated with a CGPA of 8.21, specializing in Artificial Intelligence and Machine Learning."
            />
          </div>
        </div>
      </section>

      {/* EDUCATION + CERTIFICATIONS */}
      <section className="section education-section">
        <div className="container">
          <div className="two-column">
            <div>
              <SectionHeading
                eyebrow="07 / EDUCATION"
                title="Education"
                description=""
              />

              <div className="education-card card">
                <span className="education-year">
                  2022 — 2026
                </span>

                <h3>
                  B.Tech in Artificial Intelligence &
                  Machine Learning
                </h3>

                <p>
                  Vidya Academy of Science and Technology
                </p>

                <strong>CGPA: 8.21</strong>
              </div>

              <div className="education-card card">
                <span className="education-year">
                  2020 — 2022
                </span>

                <h3>HSC XII — Bio-Maths</h3>

                <p>Carmel Central School, Valappad</p>

                <strong>86.4%</strong>
              </div>

              <div className="education-card card">
                <span className="education-year">
                  2019 — 2020
                </span>

                <h3>SSLC</h3>

                <p>Carmel Central School, Valappad</p>

                <strong>92.3%</strong>
              </div>
            </div>

            <div>
              <SectionHeading
                eyebrow="08 / CERTIFICATIONS"
                title="Certifications"
                description=""
              />

              <div className="certification-list">
                {certifications.map((cert) => (
                  <motion.div
                    className="cert-card"
                    key={cert.title}
                    whileHover={{ x: 5 }}
                  >
                    <span className="cert-icon">✦</span>

                    <div>
                      <h3>{cert.title}</h3>
                      <p>{cert.organization}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="soft-card">
                <span className="card-label">
                  SOFT SKILLS
                </span>

                <div className="skill-tags">
                  {softSkills.map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RESUME CTA */}
      <section className="resume-banner">
        <div className="container resume-banner-inner">
          <div>
            <span className="eyebrow">MY RESUME</span>

            <h2>
              Want to know more
              <span className="gradient-text">
                {" "}
                about my journey?
              </span>
            </h2>

            <p>
              Explore my education, skills, projects,
              experience and certifications.
            </p>
          </div>

          <div className="resume-buttons">
            <button
              className="primary-button"
              onClick={() => setResumeOpen(true)}
            >
              Preview Resume ↗
            </button>

            <a
              href="/SWATHI_RESUME.pdf"
              download
              className="secondary-button"
            >
              Download PDF
            </a>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section contact-section">
        <div className="container">
          <SectionHeading
            eyebrow="09 / CONTACT"
            title="Let's connect"
            description="Have an opportunity, project idea or simply want to say hello?"
          />

          <div className="contact-grid">
            <div className="contact-info">
              <motion.div
                className="contact-card"
                whileHover={{ y: -5 }}
              >
                <span className="contact-icon">✉</span>

                <div>
                  <small>EMAIL</small>
                  <a href="mailto:swathiii2004.vineetha@gmail.com">
                    swathiii2004.vineetha@gmail.com
                  </a>
                </div>
              </motion.div>

              <motion.div
                className="contact-card"
                whileHover={{ y: -5 }}
              >
                <span className="contact-icon">in</span>

                <div>
                  <small>LINKEDIN</small>
                  <a
                    href="https://www.linkedin.com/in/swathiparameswaran/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    linkedin.com/in/swathiparameswaran
                  </a>
                </div>
              </motion.div>

              <motion.div
                className="contact-card"
                whileHover={{ y: -5 }}
              >
                <span className="contact-icon">⌘</span>

                <div>
                  <small>GITHUB</small>
                  <a
                    href="https://github.com/Swathi550"
                    target="_blank"
                    rel="noreferrer"
                  >
                    github.com/Swathi550
                  </a>
                </div>
              </motion.div>

              <div className="visitor-card">
                <span>👀</span>

                <div>
                  <strong>{visitorCount}</strong>
                  <p>Portfolio visits on this browser</p>
                </div>
              </div>
            </div>

            <motion.form
              className="contact-form"
              onSubmit={handleContactSubmit}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="form-row">
                <label>
                  Name
                  <input
                    type="text"
                    name="name"
                    placeholder="Your name"
                    required
                  />
                </label>

                <label>
                  Email
                  <input
                    type="email"
                    name="email"
                    placeholder="your@email.com"
                    required
                  />
                </label>
              </div>

              <label>
                Message
                <textarea
                  name="message"
                  rows="7"
                  placeholder="Tell me about your opportunity or idea..."
                  required
                ></textarea>
              </label>

              <button
                type="submit"
                className="primary-button form-button"
              >
                Send Message
                <span>↗</span>
              </button>

              <p className="form-note">
                This opens your email application with the
                message prepared.
              </p>
            </motion.form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container footer-inner">
          <div>
            <strong>Swathi Parameswaran</strong>
            <p>AI Developer • AIML Graduate</p>
          </div>

          <div className="footer-links">
            <a
              href="https://github.com/Swathi550"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/swathiparameswaran/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>

            <a href="mailto:swathiii2004.vineetha@gmail.com">
              Email
            </a>
          </div>

          <p className="copyright">
            © {new Date().getFullYear()} Swathi Parameswaran
          </p>
        </div>
      </footer>

      {/* PROJECT MODAL */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="modal project-modal"
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 20 }}
              onClick={(event) => event.stopPropagation()}
            >
              <button
                className="modal-close"
                onClick={() => setSelectedProject(null)}
              >
                ×
              </button>

              <span className="project-icon large">
                {selectedProject.icon}
              </span>

              <span className="project-category">
                {selectedProject.category}
              </span>

              <h2>{selectedProject.title}</h2>

              <p className="modal-description">
                {selectedProject.details}
              </p>

              <div className="project-tech modal-tech">
                {selectedProject.technologies.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>

              <div className="modal-actions">
                <button
                  className="primary-button"
                  onClick={() =>
                    openGithub(selectedProject.github)
                  }
                >
                  View GitHub ↗
                </button>

                <button
                  className="secondary-button"
                  onClick={() => setSelectedProject(null)}
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* RESUME MODAL */}
      <AnimatePresence>
        {resumeOpen && (
          <motion.div
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setResumeOpen(false)}
          >
            <motion.div
              className="modal resume-modal"
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              onClick={(event) => event.stopPropagation()}
            >
              <button
                className="modal-close"
                onClick={() => setResumeOpen(false)}
              >
                ×
              </button>

              <div className="resume-modal-header">
                <div>
                  <span className="eyebrow">RESUME</span>
                  <h2>Swathi Parameswaran</h2>
                </div>

                <a
                  href="/SWATHI_RESUME.pdf"
                  download
                  className="primary-button"
                >
                  Download PDF
                </a>
              </div>

              <iframe
                src="/SWATHI_RESUME.pdf"
                title="Swathi Parameswaran Resume"
                className="resume-frame"
              ></iframe>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* TOAST */}
      <AnimatePresence>
        {toast && (
          <motion.div
            className="toast"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
          >
            ✓ {toast}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function SectionHeading({ eyebrow, title, description }) {
  return (
    <motion.div
      className="section-heading"
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <span className="eyebrow">{eyebrow}</span>

      <h2>{title}</h2>

      {description && <p>{description}</p>}
    </motion.div>
  );
}

function ExpertiseCard({ icon, title, text }) {
  return (
    <motion.div
      className="expertise-card"
      whileHover={{ y: -7 }}
    >
      <span className="expertise-icon">{icon}</span>

      <h3>{title}</h3>

      <p>{text}</p>
    </motion.div>
  );
}

function TimelineItem({
  year,
  title,
  company,
  text,
  current = false,
}) {
  return (
    <motion.div
      className="timeline-item"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
    >
      <div className="timeline-marker">
        <span className={current ? "active-marker" : ""}></span>
      </div>

      <div className="timeline-content">
        <span className="timeline-year">{year}</span>

        <h3>{title}</h3>

        <strong>{company}</strong>

        <p>{text}</p>
      </div>
    </motion.div>
  );
}

export default App;