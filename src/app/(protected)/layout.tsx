// app/(protected)/layout.tsx
'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Loading from '@/components/Generic/Loading'

export default function ProtectedLayout({ children }: { children: React.ReactNode }) {
    const [isLoading, setIsLoading] = useState(true)
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const router = useRouter()

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            router.replace('/auth/login');
        } else {
            setIsAuthenticated(true);
        }
        setIsLoading(false);
    }, [router])

    if (isLoading) {
        return <Loading text="Cargando..." />
    }

    if (!isAuthenticated) {
        return null
    }

    return <>{children}</>
}
