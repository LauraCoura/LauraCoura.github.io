import '../App.css'

function IconButton({iconSrc, title, click}: {iconSrc: any, title: string, click: any}) {

  return (
    <button className='icon-button' onClick={click}>
      <img className='menu-icon' src={iconSrc} />
      <p>{title}</p>
    </button>
  )
}

export default IconButton