"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useContext } from "react";
import { instance } from "@/lib/apiClients";
import { VioContext } from "@/context/VioContext";

function Callback() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const code = searchParams.get("code");
    const state = searchParams.get("state");
    const { fetchUserData } = useContext(VioContext);

    useEffect(() => {
        const storedState = localStorage.getItem("discord-oauth2-state");
        if (state !== storedState) {
            console.error("State mismatch");
            router.replace("/");
            return;
        }

        instance
            .post("/auth/register", { code })
            .then((res) => {
                if (res.status === 200) {
                    console.log("Successfully logged in");
                    localStorage.setItem("vio-token", res.data.token);
                    fetchUserData(res.data.token);
                } else {
                    console.log("Failed to log in");
                }
                router.replace("/");
            })
            .catch((err) => {
                console.error("Failed to log in:", err);
                router.replace("/");
            });
    }, [code, router]);

    return null;
}

export default Callback;
