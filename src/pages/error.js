import { useRouteError } from "react-router-dom"

export const ErrorPage = () => {

    const { statusText, status } = useRouteError();
    return <div>
        <h1>Oops!!</h1>
        <h2>Something went wrong.</h2>
        <h4>{status}: {statusText}</h4>
    </div>
}