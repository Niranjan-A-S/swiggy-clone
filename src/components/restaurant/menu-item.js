export const MenuItem = ({ itemInfo: { name, price } }) => {
    return <div className="item">
        <h5>{name}</h5>
        <span>Rs {price / 100}</span>
    </div>
}
