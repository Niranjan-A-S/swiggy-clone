export const withOpenLabel = (Component) => {
    return (props) => {
        return <div>
            <label>Open</label>
            <Component {...props} />
        </div>
    }
}