export const SearchBar = ({ query, onChange }) => {

    return <div className="search">
        <input type="text" className="search-box" value={query} onChange={onChange} />
    </div>
}
