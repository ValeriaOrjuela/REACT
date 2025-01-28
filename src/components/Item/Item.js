import ItemCount from "../ItemCount/ItemCount";
const Item =({id, name, img, price, stock})=> {
    return(
        <article className='CardItem'>
            <header className='Header'>
                <h2 className='ItemHeader'> {name}</h2>
            </header>
            <picture>
                <img src={img} alt={name} className="ItemImg"/>
            </picture>
            <section>
                <p className= 'Info'>
                    precio: ${price}
                </p>
                <p className= 'Info'>
                    Stock disponible: {stock}
                </p>

            </section>
            <section>
                <ItemCount initial={1} stock ={stock} onAdd={(quantity)=> console.log('Cantidad Agregada ', quantity)} />
            </section>
            <footer className='ItemFooter'>
                <a href={`/item/${id}`} className="Option">Ver detalles</a>
                
            </footer>
        </article>
    )
}
export default Item