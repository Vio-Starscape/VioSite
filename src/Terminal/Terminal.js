import React, {useEffect, useState, useContext} from 'react';
import { instance } from '../instance';
import { createApiInstance } from '../api';
import { VioContext } from '../context';


function Terminal() {

    const [api, setApi] = useState();
    const { VioUser } = useContext(VioContext);
    
    useEffect(() => {
        if (!(VioUser)){
            console.error('User is not logged in');
            window.location.href = '/';
        }

        if (!api) {
            instance
                .get(`/auth/@me/key`)
                .then((res) => {
                    setApi(createApiInstance(res.data.key));
                })
                .catch((err) => {
                    console.error('Failed to get permissions:', err);
                });
        }
    });

    return (
        <div>
            <section className="h-screen">
                <div className="sticky top-0 bg-white z-50 text-center rounded-b-3xl shadow-md p-1">
                    <h1 className="text-5xl font-anta">Terminal</h1>
                </div>
                <div className="flex flex-wrap justify-center m-10 gap-4">
                </div>
            </section>
        </div>
    )
}

export default Terminal;