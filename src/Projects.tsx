import './App.css'

import Header from './assets/Header'
import IconFolders from './assets/icons/icon_folders.png'
import Card from './assets/Card'

// Importing project logos
import LogoLIVRIM from './assets/icons/logo_livrim.png'
import LogoXR4Edu from './assets/icons/logo_xr4edu.png'
import LogoEducaMinasVR from './assets/icons/logo_educaminas.png'

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

function EducaMinasText(){
  return(
    <div className='main-text-projects'>
      <img className='image-logo-educaminas' src={LogoEducaMinasVR}/>
      <div>
       <p>Project funded by FAPEMIG: Code APQ-06466-24.</p>
        <p> This extension project, which incorporates a research component, aims to enhance the skills of K-12 educators and students. 
          From an extension perspective, the project proposes training educators to create "serious games" for use in their teaching practice. 
          Students, in turn, will be able to use virtual reality digital games to support their learning. From a research perspective, the objective 
          is to evaluate the effectiveness of using serious games to support the teaching of educational content, as well as to assess educators' 
          capabilities regarding the use and creation of such games.</p>
      </div>
    </div>
  )
}

function Projects(){
    return(
    <div className='main'>
        <Header />
            <div className='title-page'>
                <img className='title-icon' src={IconFolders} />
                <p className='title-portfolio'>PROJECTS</p>
            </div>

        <Card title={'LIVRIM'} icon={IconFolders} Text={LIVRIMText}/>
        <Card title={'XR4Edu'} icon={IconFolders} Text={XR4EduText}/>
        <Card title={'EducaMinasVR'} icon={IconFolders} Text={EducaMinasText}/>
    </div>
    )
}

export default Projects