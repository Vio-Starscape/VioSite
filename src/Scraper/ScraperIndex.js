import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import './scraper.css';
import TitleBar from "../Components/TitleBar";
import { instance } from "../instance";

function Account({ AccountObject, changeFunction }) {


    var get_button = () => {
        if (AccountObject.active) {
            return <button disabled className="bg-gray-500 text-white px-4 py-2 rounded-md">Active</button>
        }
        if (AccountObject.yoinked) {
            return <button onClick={() => changeFunction(AccountObject, false)} className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md">Mark Good</button>
        } else {
            return <button onClick={() => changeFunction(AccountObject, true)} className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md">Mark Yoinked</button>
        }
    };

    return (
        <div className="flex flex-row items-center justify-between border-b border-gray-200 p-4 md650:w-1/2 lg1000:w-1/3 lg1300:w-1/4">
            <div>
                <h1 className="font-bold text-lg">{AccountObject.name}</h1>
                <p className="text-gray-500">Status: {AccountObject.yoinked ? "Yoinked" : AccountObject.active ? "Active" : "Primed"}</p>
            </div>
            <div>
                {get_button()}
            </div>
        </div>
    )
}

function ScraperIndex({ VioUser }) {
    const [list_of_accounts, set_list_of_accounts] = useState([]);
    const navigate = useNavigate();

    const changeFunction = (account, mark_yoinked) => {
        instance
            .post('scrapers/update', {
                name: account.name,
                active: account.active,
                yoinked: mark_yoinked
            })
            .then((res) => {
                if (res.status === 200) {
                    account.yoinked = mark_yoinked;
                    set_list_of_accounts([...list_of_accounts]);
                }
            }).catch((err) => {
                console.error('Failed to update account:', err);
            })
    }

    useEffect(() => {
        const token = localStorage.getItem('vio-token');
        if (!token) {
            navigate('/');
            return; // Prevent further execution if redirecting
        } else if (VioUser && !VioUser.scraper) {
            navigate('/');
            return;
        }

        // Get list of accounts

        instance.get('/scrapers')
            .then((res) => {
                if (res.status === 200) {
                    set_list_of_accounts(res.data);
                }
            })
            .catch((err) => {
                console.error('Failed to get accounts:', err);
            });

    }, []);

    return (
        <div>
            <section className="h-screen">
                <TitleBar Title={"Scraper"} />
                <div className="md650:flex md650:flex-wrap">
                    {
                        list_of_accounts.map((account) => {
                            return <Account key={account.name} AccountObject={account} changeFunction={changeFunction} />
                        })
                    }
                </div>
            </section>
        </div>
    )
}

export default ScraperIndex;