import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import { ErrorPage } from "./pages/error";
import { AboutPage } from "./pages/about";
import { ContactPage } from "./pages/contact";
import { HomePage } from "./pages/home";
import { Header } from "./components/header";
import { RestaurantPage } from "./pages/restaurant";
import { useOnlineStatus } from "./hooks/use-online-status";

const AppLayout = () => {
    const isOnline = useOnlineStatus();

    return (
        <div className="app">
            <Header />
            {isOnline ? <Outlet /> : <h1>   Looks like you are offline</h1>}
        </div>
    )
}

const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <HomePage />
            },
            {
                path: 'about',
                element: <AboutPage />
            },
            {
                path: 'contact',
                element: <ContactPage />
            },
            {
                path: 'restaurant/:resId',
                element: <RestaurantPage />
            }
        ]
    },

])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider
    router={appRouter}
/>);