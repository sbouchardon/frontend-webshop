
export default function Card(props){
    return (
        <>
            <div className="w-80 flex items-center justify-center">
                <div className="card bg-beige rounded-md shadow-md flex flex-col items-center text-center space-y-2 ">
                    <img className="cardImage" src={props.image} alt={props.name}/>

                    <div className="cardTitle">
                        <h1>{props.name}</h1>
                    </div>

                    <div className="cardDescription">
                        <p>{props.description}</p>
                    </div>

                    <div className="cardPrice">
                        <p>{props.price} €</p>
                    </div>

                    <div className="p-4">
                        <button className="button">Buy now</button>
                    </div>
                </div>
            </div>
        </>
    )
}