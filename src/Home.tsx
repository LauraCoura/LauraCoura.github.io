import './App.css'
import Header from './assets/Header'
import Card from './assets/Card'
import IconButton from './assets/IconButton'

// Importing icons
import IconQuestion from './assets/icons/icon_question.png'
import IconFolders from './assets/icons/icon_folders.png'
import IconSearch from './assets/icons/icon_search_file.png'
import IconThemes from './assets/icons/icon_themes.png'
import IconImage from './assets/icons/icon_image.ico'

// Importing icons for about me text
import IconWebsite from './assets/icons/icon_website.png'
import IconCertificate from './assets/icons/icon_certificate.png'
import IconSkill from './assets/icons/icon_skill.ico'
import IconLinkedin from './assets/icons/icon_linkedin.png'
import IconRG from './assets/icons/icon_research.png'
import IconGitHub from './assets/icons/icon_github.png'
import IconLattes from './assets/icons/icon_lattes.png'

// Importing project logos
import LogoLIVRIM from './assets/icons/logo_livrim.png'
import LogoXR4Edu from './assets/icons/logo_xr4edu.png'

// Importing images for portfolio Card
import image2026_17 from './assets/portfolio/2026/insta.png'
import image2026_3 from './assets/portfolio/2026/animais3.png'
import image2026_15 from './assets/portfolio/2026/rosto3.png'

import { useRef } from 'react'

// Text for the projects
function LIVRIMText(){
  return(
    <div className='main-text-projects'>
      <img className='image-logo-project' src={LogoLIVRIM}/>
      <div>
       <p>Project funded by FAPEMIG: Code APQ-06466-24.</p>
        <p>
          This research aims to investigate, develop, and evaluate an Extended Reality (XR) application—utilizing Augmented Reality (AR) and Virtual Reality (VR)—based on 
          STEAM-related books. It is anticipated that the printed book, when integrated with XR technologies, will serve as an effective teaching and learning tool 
          within K-12 education by combining traditional, playful, and technological elements. The project involves a team of researchers specializing in Computing, 
          Education, and Digital Literature from UFOP, UFSJ, UFMT, UFPR, and UTFPR.
        </p>
      </div>
    </div>
  )
}

function XR4EduText(){
  return(
    <div className='main-text-projects'>
      <img className='image-logo-project' src={LogoXR4Edu}/>
      <div>
       <p>How can we use Extended Reality (XR) technologies to support teachers and students, creating more engaging, interesting and unique experiences in learning? This is the question we asked ourselves years ago. And this project is how we hope to answer it.</p>
        <p>Our actions, until now, have been related to workshops, courses and publications.</p>
        <p>Learn more at our website:</p>
        <a href='https://xr4edu.decom.ufop.br/' className='text-link-papers'>https://xr4edu.decom.ufop.br/</a>
      </div>
    </div>
  )
}

// Text for the portfolio sub-Cards
function TextSocial(){
  return(
    <div className='main-text-projects'>
      <img className='image-portfolio' src={image2026_17}/>
      <p>My main work in graphical design is for social media, especially for Instagram. 
        By using Adobe Photoshop as my primary tool, I like to try different styles and formats, while keeping the branding of the account in mind.</p>
    </div>
  )
}

function TextIllustrations(){
  return(
    <div className='main-text-projects'>
      <img className='image-portfolio' src={image2026_15}/>
      <img className='image-portfolio' src={image2026_3}/>
      <p>My favorite thing to do in my free time is art, with more than 17 fully filled out sketchbooks as proof. 
        Although I have done a lot of digital illustration, currently my preference lies in traditional art, where I use pencils, markers and pens (ink). 
        My favorite material to use are alcohol and acrylic markers, which allow me to make vibrant, colorful pieces. 
        In the regards of drawing subjects, I tend to focus on animals, plants and people in general, but I have tried other stuff before (such as lettering) 
        and I hope to keep growing my skills by trying and learning new stuff.</p>
    </div>
  )
}

// Text for the main Cards

function SkillText(){
  return(
    <div>
      <div className='skill-bar'>
        <p className='skill-text'>Adobe Photoshop</p>
        <div className='skill-level' style={{width: '15em'}}></div>
      </div>

      <div className='skill-bar'>
        <p className='skill-text'>Affinity Designer</p>
        <div className='skill-level' style={{width: '12em'}}></div>
      </div>

      <div className='skill-bar'>
        <p className='skill-text'>DaVinci Resolve</p>
        <div className='skill-level' style={{width: '10em'}}></div>
      </div>

      <div className='skill-bar'>
        <p className='skill-text'>Figma</p>
        <div className='skill-level' style={{width: '14em'}}></div>
      </div>

      <div className='skill-bar'>
        <p className='skill-text'>Clip Studio Paint / Illustration</p>
        <div className='skill-level' style={{width: '18em'}}></div>
      </div>

      <div className='skill-bar'>
        <p className='skill-text'>Coding</p>
        <div className='skill-level' style={{width: '18em'}}></div>
      </div>

      <div className='skill-bar'>
        <p className='skill-text'>Writing</p>
        <div className='skill-level' style={{width: '18em'}}></div>
      </div>
    </div>
  )
}

function AboutMeText(){
  return(
    <>
      <div className='main-greeting-text'>
          <div className='main-text-projects'>
          <div>
            <p>Nice to meet you! I’m Laura, a PhD student from Brazil, full-time researcher and part-time designer. </p>
            <p>I have a lot of experience with coding (especially for Game, Web and Mobile development), Artificial Inteligence and Human Computer-Interaction, 
          and a lot of love - and experience as well! - for art and design. It’s not usual to find me drawing on my skethbook or working on a new design idea, after all.</p>

            <div className='icons-text-row'>
              <img className='icon-text' src={IconCertificate}></img>
              <p>If you’re curious about my degrees, check them out:</p>
            </div>

            <p>■ Master’s degree in Computer Science | UFOP (2024)</p>
            <p>■ Bachelor degree in Computer Science | UFOP (2023)</p>
            <p>■ Technical degree in Industrial Automation | IFMG - OP (2019)</p>

            <div className='icons-text-row'>
              <img className='icon-text' src={IconWebsite}></img>
              <p>You can also find me in several other websites!</p>
            </div>

            <div className='icons-row'>
              <a href='http://lattes.cnpq.br/7583406781578627'>
                <button className='icon-website'>
                  <img className='menu-icon' src={IconLattes}></img>
                  <p>Lattes</p>
                </button>
              </a>

              <a href='https://www.researchgate.net/profile/Laura-Coura'>
                <button className='icon-website'>
                  <img className='menu-icon' src={IconRG}></img>
                  <p>ResearchGate</p>
                </button>
              </a>

              <a href='https://github.com/LauraCoura'>
                <button className='icon-website'>
                  <img className='menu-icon' src={IconGitHub}></img>
                  <p>GitHub</p>
                </button>
              </a>

              <a href='https://www.linkedin.com/in/laura-coura/'>         
                <button className='icon-website'>
                  <img className='menu-icon' src={IconLinkedin}></img>
                  <p>LinkedIn</p>
                </button>
              </a> 
            </div>
          </div>

          <div className='skills-main'>
            <Card title={'Skills'} icon={IconSkill} Text={SkillText}/>
          </div>
        </div>
      </div>
    </>
  )
}

function PapersText(){
  return(
    <div className='main-text-papers'>
      <p>Here's some of my most relevant papers:</p>
      <a href='https://ieeexplore.ieee.org/document/11683750' className='text-link-papers'>■ UAI Canvas: Empowering Teachers to Design Immersive VR Learning Games</a>
      <a href='https://www.scitepress.org/Link.aspx?doi=10.5220/0014934100004021' className='text-link-papers'>■ Gaming Preferences and Habits in Young Brazilian Students: An Experience Report of a Hybrid Activity</a>
      <a href='https://ieeexplore.ieee.org/document/11194880/' className='text-link-papers'>■ Training Teachers to Design Virtual Reality Games: A Brazilian Context Experience</a>
      <a href='https://sol.sbc.org.br/index.php/sbie/article/view/26715' className='text-link-papers'>■ Qualificação de Professores do Ensino Básico com Jogos: Um Mapeamento Sistemático</a>

      <div className='icons-text-row'>
        <p>And you can check all my papers at</p>
        <a href='https://lattes.cnpq.br/7583406781578627' className='text-link'>Lattes</a>
        <p>or</p>
        <a href='https://www.researchgate.net/profile/Laura-Coura' className='text-link'>ResearchGate!</a>
      </div>
    </div>
  )
}

function PortfolioText(){
  return(
    <div className='main-text-papers'>
      <Card title={'Social media'} icon={IconImage} Text={TextSocial}/>
      <Card title={'Illustrations'} icon={IconImage} Text={TextIllustrations}/>

      <div className='icons-text-row'>
        <p>Check out my full portfolio</p>
        <a href='/portfolio' className='text-link'>here!</a>
      </div>
    </div>
  )
}

function ProjectsText(){
  return(
    <div className='main-text-papers'>
      <Card title={'LIVRIM'} icon={IconFolders} Text={LIVRIMText}/>
      <Card title={'XR4Edu'} icon={IconFolders} Text={XR4EduText}/>

      <div className='icons-text-row'>
        <p>Check out all my projects</p>
        <a href='/projects' className='text-link'>here!</a>
      </div>
      
    </div>
  )
}

function Home() {
  const shortGreeting = `I’m Laura Coura, a researcher from Brazil interested in HCI, XR and Informatics in Education (alongside some other areas).`;

  // CARDS REFERENCES
  const AboutMeRef = useRef(null);
  const ProjectsRef = useRef(null);
  const PaperRef = useRef(null);
  const PortfolioRef = useRef(null);

  // Scroll to the proper Cards
  function scrollTo(ref: string){
    const element = document.getElementById(ref);

    if(element){
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    <>
      <Header />
      <div className="main">
        <div className='main-greeting'>
          <div className='main-greeting-text'>
            <p className='hello'>Hello world!</p>
            <p className='short-greeting'>{shortGreeting}</p>
            <p className='short-greeting'>{`Check-out my work, projects and my art/design portfolio below - or use the icons in the side:`}</p>
          </div>

          <div className='main-greeting-icons'>
            <div className='icons-row'>
              <IconButton iconSrc={IconQuestion} title={'About me'} click={() => scrollTo('aboutme')}/>
              <IconButton iconSrc={IconFolders} title={'Projects'} click={() => scrollTo('projects')}/>
            </div>
            
            <div className='icons-row'>
              <IconButton iconSrc={IconSearch} title={'Papers'} click={() => scrollTo('papers')}/>
              <IconButton iconSrc={IconThemes} title={'Portfolio'} click={() => scrollTo('portfolio')}/>
            </div>
          </div>
        </div>

        <div ref={AboutMeRef} id='aboutme'>
          <Card title={'About me'} icon={IconQuestion} Text={AboutMeText}/>
        </div>
        
        <div ref={ProjectsRef} id='projects'>
          <Card title={'Projects'} icon={IconFolders} Text={ProjectsText}/>
        </div>

        <div ref={PaperRef} id='papers'>
          <Card title={'Papers'} icon={IconSearch} Text={PapersText}/>
        </div>

        <div ref={PortfolioRef} id='portfolio'>
          <Card title={'Portfolio'} icon={IconThemes} Text={PortfolioText}/>
        </div>
      </div>
    </>
  )
}

export default Home
