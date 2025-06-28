'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Loading from '@/components/Generic/Loading'

export default function AuthLayout({ children }: { children: React.ReactNode }) {
    const [isLoading, setIsLoading] = useState(true)
    const router = useRouter()

    useEffect(() => {
        const checkAuth = () => {
            try {
                const token = localStorage.getItem('token');
                if (token) {
                    // Si ya tiene token, redirigir al home
                    const homePath = process.env.NODE_ENV === 'production' ? '/koinonia-app/home/' : '/home/';
                    router.replace(homePath);
                } else {
                    // Si no tiene token, permitir acceso a las páginas de auth
                    setIsLoading(false);
                }
            } catch (error) {
                console.error('Error checking auth:', error);
                // Si hay error, permitir acceso a las páginas de auth
                setIsLoading(false);
            }
        };

        // Agregar un timeout para evitar que se quede cargando indefinidamente
        const timeoutId = setTimeout(() => {
            console.warn('Auth check timeout, allowing access');
            setIsLoading(false);
        }, 3000);

        checkAuth();

        return () => clearTimeout(timeoutId);
    }, [router])

    if (isLoading) {
        return <Loading text="Verificando autenticación..." />
    }

    return <>{children}</>
} 