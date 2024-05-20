import React, {useEffect, useState } from 'react';
import { instance } from '../instance';
import TitleBar from '../Components/TitleBar';

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
                <TitleBar Title={"Terminal"} />
                <div>
                    <div className="flex justify-center mt-5">
                        <div className="w-1/3 bg-blue-300 rounded-3xl p-5 m-4">
                            Hello
                        </div>
                        <div className="w-2/3 bg-red-400 rounded-3xl p-5 m-4">
                            {currentItem ? currentItem.name : 'Loading...'}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Terminal;