import React, {useEffect, useState, useContext} from 'react';
import { instance } from '../instance';
import { VioContext } from '../context';
import { useMatomo } from '@datapunt/matomo-tracker-react';
import ItemContainer from './Item';
import SearchContainer from './Search';
import { createApiInstance } from './api';

function Terminal() {

    const [apiInstance, setApiInstance] = useState(null);
    const [item, setItem] = useState(null);
    const [itemInfo, setItemInfo] = useState(null);
    const { VioUser } = useContext(VioContext);
    const { trackPageView } = useMatomo();
    
    useEffect(() => {
        trackPageView();

        if (!(VioUser)){
            console.error('User is not logged in');
            window.location.href = '/';
        }

        if (!apiInstance) {
            instance
                .get(`/auth/@me/key`)
                .then((res) => {
                    const userApi = createApiInstance(res.data.key);
                    setApiInstance(() => userApi);
                })
                .catch((err) => {
                    console.error('Failed to get permissions:', err);
                });
        }
    }, []);

    useEffect(() => {
        if (apiInstance && item) {
            apiInstance.get(
                `/market/latest`, 
                {
                    params: {
                        items: item,
                    }
                })
                .then((res) => {
                    console.log('Item info:', res.data);
                    setItemInfo(res.data.items[item]);
                })
                .catch((err) => {
                    console.error('Failed to get item info:', err);
                });
        }
    }, [item]);

    return (
        <div>
            <section className="h-screen">
                <div className="sticky top-0 bg-white z-50 text-center rounded-b-3xl shadow-md p-1">
                    <h1 className="text-5xl font-anta">Terminal</h1>
                </div>
                <div className="flex flex-col md:flex-row justify-center m-4 md:m-10 gap-4">
                    <div className="w-full md:w-1/4">
                        <SearchContainer apiInstance={apiInstance} setItem={setItem} />
                    </div>
                    <div className='w-full md:w-3/4'>
                        <ItemContainer itemInfo={itemInfo} />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Terminal;