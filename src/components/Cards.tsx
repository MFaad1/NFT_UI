

function Cards(props:any) {
  return (
    <div className="main_Card">
    <img src="imgs/card.png" alt="cardsArray" />

<div className='card_Details'>
    <img src={props.imgUrl} alt="MoneyBag" />
    <p className="card_title">{props.title}</p>
</div>

    </div>
  )
}

export default Cards