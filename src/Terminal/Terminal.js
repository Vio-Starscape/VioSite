import React, { useEffect, useState } from 'react';
import { instance } from '../instance';
import TitleBar from '../Components/TitleBar';
import { AnimatePresence, motion } from 'framer-motion';

const items = ['Korrelite', 'Axnit', 'Reknite']; // Replace with your actual items

function Terminal({ VioUser }) {
    const [chosenItem, setChosenItem] = useState(items[0]);
    const [currentItem, setCurrentItem] = useState();

    useEffect(() => {
        instance
            .get('/terminal/item', {
                params: {
                    name: chosenItem,
                },
            })
            .then((res) => {
                setCurrentItem(res.data);
                console.log('Got item:', res.data);
            })
            .catch((err) => {
                console.error('Failed to get permissions:', err);
                setChosenItem(items[0]);
            });
    }, [chosenItem]);

    return (
        <section>
            <TitleBar Title={"Terminal"} />
            <div className="flex">
                <div className="w-1/4 bg-blue-300 p-4">
                    <ul>
                        {items.map((item, index) => (
                            <li key={index} className="cursor-pointer" onClick={() => setChosenItem(item)}>
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="w-3/4 bg-red-400 p-4">
                </div>
            </div>
        </section>
    );
}

export default Terminal;