import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import Home from './pages/Home'
import ProductDetails from './pages/ProductDetails'
import Summary from './pages/Summary'
import AppLayout from './components/AppLayout'

const router = createBrowserRouter([
    {
        element: <AppLayout />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: '/product/:productId',
                element: <ProductDetails />,
            },
            {
                path: '/summary',
                element: <Summary />,
            },
        ],
    },
])

function App() {
    return <RouterProvider router={router} />
}

export default App
