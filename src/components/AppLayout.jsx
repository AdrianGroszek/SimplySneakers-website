import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import { Toaster } from 'react-hot-toast'

function AppLayout() {
    return (
        <div className="no-scrollbar flex h-screen w-full justify-center overflow-y-scroll bg-gray-50 text-stone-800">
            <Header />
            <main className="mt-10 flex w-4/5 max-w-screen-xl justify-center md:m-20">
                <Outlet />
            </main>
            <Toaster position="top-center" />
            <Footer />
        </div>
    )
}

export default AppLayout
