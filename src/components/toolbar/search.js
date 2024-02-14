export const SearchBar = ({ query, onChange, onSearch }) => {

    return <div className="search">
        <input type="text" className="search-box" value={query} onChange={onChange} />
        <button className="btn" onClick={onSearch}>Search</button>
    </div>
}
