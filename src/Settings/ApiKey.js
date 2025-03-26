import React, { useEffect, useState, useContext } from "react";
import { useMatomo } from '@datapunt/matomo-tracker-react';
import { VioContext } from "../context";
import { instance } from "../instance";

function ApiKey() {

    const { VioUser } = useContext(VioContext);
    const [apiKey, setApiKey] = useState();
    const { trackEvent } = useMatomo();

    useEffect(() => {
        if (!(VioUser)){
            console.error('User is not logged in');
            window.location.href = '/';
        }

        instance
            .get(`/auth/@me/key`)
            .then((res) => {
                setApiKey(res.data.key);
            })
            .catch((err) => {
                console.error('Failed to get permissions:', err);
            });
    });

    const reloadKey = () => {
            trackEvent({ 
                category: 'API Key', 
                action: 'Regenerate', 
                name: 'Regenerate API Key' 
            });

            instance
                .post(`/auth/@me/key/regenerate`)
                .then((res) => {
                    setApiKey(res.data.key);
                })
                .catch((err) => {
                    console.error('Failed to get permissions:', err);
                });
        }

    return (
        <div className="rounded-xl w-4/5 bg-white shadow-xl">
            <h1 className="text-center text-4xl font-anta">API Key</h1>

            <div className="grid gap-10 p-5">
                <div className="m-auto lg1000:w-1/2 flex flex-col md650:flex-row items-center  gap-4">
                    <input 
                        type="text" 
                        className="rounded-md border-2 shadow w-full p-2" 
                        value={apiKey}
                        readOnly
                    />
                    <button 
                        className="bg-red-500 hover:bg-red-700 text-white font-bold w-auto md650:mx-2 my-2 md650:my-0 py-2 px-4 rounded"
                        onClick={reloadKey}
                    >
                        Regenerate
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ApiKey;