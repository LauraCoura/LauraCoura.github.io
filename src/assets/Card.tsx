import '../App.css'

function Card({title, icon, Text} : {title: string, icon: any, Text: any}) {

  return (
    <>
      <div className="card-main">
          <div className="card-header">
            <img className='card-header-icon' src={icon} />
            <p>{title}</p>
          </div>

          <Text/>
      </div>
    </>
  )
}

export default Card
