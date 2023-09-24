const Item = (props) => {
    return (
        <div className="element-container">
        <div className="image-container">
            <img src={props.img} alt="original cinnamon roll"/>
        </div>
        <h2 className="element-title">{props.title}</h2>

        <div className="row-content"> 
            <p className="bodytext">Glazing:</p>
            <div className="content-right">
                <select id="dropdown" className="dropdown" name="glazing">
                    <option>Keep original</option>
                    <option>Sugar milk</option>
                    <option>Vanilla milk</option>
                    <option>Double chocolate</option>
                </select>
            </div>
        </div>

        <div className="row-content">
            <p className="bodytext">Pack size:</p>
            <div className="content-right">
                <button className= "button-pack-size" type="button">1</button>
                <button className= "button-pack-size" type="button">3</button>
                <button className= "button-pack-size" type="button">6</button>
                <button className= "button-pack-size" type="button">12</button>
            </div>
        </div>

        <div className="row-content">
            <p className="pricetext">{props.price}</p>
            <div className="content-right">
                <button className= "button-add-to-cart link">Add To Cart</button>
            </div>
        </div>
    </div>
    )
}

export default Item;