import React, {useEffect, useState } from 'react';
import { instance } from '../instance';

function Terminal({VioUser}) {
    const [chosenItem, setChosenItem] = useState('Korrelite'); // Default item is Korrelite
    const [currentItem, setCurrentItem] = useState();

    useEffect(() => {
        instance
            .get('/terminal/item', {
                params: {
                    name: chosenItem
                }
            })
            .then((res) => {
                setCurrentItem(res.data);
                console.log('Got item:', res.data);
            })
            .catch((err) => {
                console.error('Failed to get permissions:', err);
                chosenItem('Korrelite');
            });
    }, [])

    return (
        <div>
            <section>
                <div className="sticky top-0 bg-white z-50 text-center rounded-b-3xl shadow-md p-1">
                    <h1 className="text-5xl font-anta">Terminal</h1>
                </div>
                <div>
                    <div className="flex justify-center mt-5">
                        <div className="w-1/3 bg-blue-300 rounded-3xl p-5 m-4">
                            Hello
                        </div>
                        <div className="w-2/3 bg-red-400 rounded-3xl p-5 m-4">
                            Hello 2
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Terminal;