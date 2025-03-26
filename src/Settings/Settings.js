import React, { useEffect, useContext } from "react";
import { useMatomo } from '@datapunt/matomo-tracker-react';
import { VioContext } from "../context";
import ApiKey from "./ApiKey";

function Settings() {

    const { VioUser } = useContext(VioContext);
    const { trackPageView } = useMatomo();

    useEffect(() => {
        trackPageView();

        if (!(VioUser)){
            console.error('User is not an admin');
            window.location.href = '/';
        }
    }, [VioUser]);

    return (
        <div>
            <section className="h-screen">
                <div className="sticky top-0 bg-white z-50 text-center rounded-b-3xl shadow-md p-1">
                    <h1 className="text-5xl font-anta">Settings</h1>
                </div>
                <div className="flex flex-wrap justify-center m-10 gap-4">
                    <ApiKey />
                </div>
            </section>
        </div>
    )
}

export default Settings;