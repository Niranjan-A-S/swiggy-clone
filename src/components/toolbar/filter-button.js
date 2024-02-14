export const FilterButton = ({ onFilter }) => {
    return <div className="filter">
        <button className="btn filter-btn" onClick={onFilter}>Top Rated Restaurants</button>
    </div>
}