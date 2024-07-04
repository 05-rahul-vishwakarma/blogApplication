import { Outlet } from "react-router-dom"
import { Toaster } from 'react-hot-toast';

function AuthLayout() {
    return (
        <main>
            <Toaster position="bottom-right" toastOptions={{duration:2000}} />
            <Outlet />
        </main>
    )
}

export default AuthLayout