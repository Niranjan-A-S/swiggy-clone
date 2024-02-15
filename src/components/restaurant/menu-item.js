export const MenuItem = ({ itemInfo: { name, price } }) => <div className="item">
    <span>{name}{' - '}</span>
    <strong>Rs {price / 100}</strong>
</div>

