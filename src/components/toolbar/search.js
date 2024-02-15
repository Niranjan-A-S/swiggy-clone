export const SearchBar = ({ query, onChange }) =>
    <input
        type="text"
        className="
            rounded-md
            border-0
            p-2
            ring-1
            ring-gray-300
            placeholder:text-gray-400
            focus:ring-1-[rgba(241_87_0)]
            sm:text-sm
            sm:leading-6
            font-semibold"
        value={query}
        onChange={onChange}
        placeholder="Enter Restaurant Name..."
    />
