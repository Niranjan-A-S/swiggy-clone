export const withOpenLabel = (Component) => {
    return (props) => {
        return <div className="relative">
            <label className="text-[12px] absolute text-gray-500 font-bold px-1 py-1 rounded-md left-1">Open</label>
            <Component {...props} />
        </div>
    }
}