import { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import { Header } from "./components/header";
import { Shimmer } from "./components/shimmer";
import { useOnlineStatus } from "./hooks/use-online-status";
import { ErrorPage } from "./pages/error";
import { Provider } from "react-redux";
import { appStore } from "./redux/store/app-store";

const HomePage = lazy(() => import('./pages/home'));
const AboutPage = lazy(() => import('./pages/about'));
const ContactPage = lazy(() => import('./pages/contact'));
const RestaurantPage = lazy(() => import('./pages/restaurant'));

const AppLayout = () => {
    const isOnline = useOnlineStatus();

    return (
        <Provider store={appStore}>
        <div className="box-border text-md">
            <Header />
            <Suspense fallback={<Shimmer />}>
                {isOnline
                    ? <Outlet />
                    : <h1>   Looks like you are offline</h1>}
            </Suspense>
        </div>
        </Provider>
    );
};

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