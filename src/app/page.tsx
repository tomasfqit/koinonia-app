"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const Home = () => {
    const router = useRouter();
    
    useEffect(() => {
        const token = localStorage.getItem("token");
        if(token){
            router.push("/home");
        }else{
            router.push("/auth/login");
        }
    }, [router]);

    return <></>;
};

export default Home;