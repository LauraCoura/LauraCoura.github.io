import '../App.css'

function Header() {
  return (
    <header className='header'>
      <nav className='nav'>
        <a href="/">Home</a>
        <a href="/projects">Projects</a>
        <a href="https://www.researchgate.net/profile/Laura-Coura/research">Papers</a>
        <a href="/portfolio">Portfolio</a>
      </nav>
    </header>
  )
}

export default Header