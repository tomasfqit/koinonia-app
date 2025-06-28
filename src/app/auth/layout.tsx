'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Loading from '@/components/Generic/Loading'

export default function AuthLayout({ children }: { children: React.ReactNode }) {
    const [isLoading, setIsLoading] = useState(true)
    const router = useRouter()

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            // Si ya tiene token, redirigir al home
            router.replace('/home');
        } else {
            // Si no tiene token, permitir acceso a las páginas de auth
            setIsLoading(false);
        }
    }, [router])

    if (isLoading) {
        return <Loading text="Verificando autenticación..." />
    }

    return <>{children}</>
} 