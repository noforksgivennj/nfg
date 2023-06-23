import styled from "./Item.module.css"
// Individual Item with price and description. See Menu page
const Item = ({ itemTitle, itemPrice, itemDescription }) => {
    return (
        <div className={styled.item}>
            <h3>
                {itemTitle}<span className={styled.price}>{itemPrice}</span>
            </h3>
            <div className="item-description">
                {itemDescription}
            </div>
        </div>
    )
}
export default Item