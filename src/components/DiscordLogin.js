"use client";

function DiscordLogin({redirect_uri}) {

    const state = generateRandomState();
    localStorage.setItem('discord-oauth2-state', state);

    console.log(redirect_uri);

    return (
        <a href={`https://discord.com/api/oauth2/authorize?client_id=1199334865858986104&redirect_uri=${encodeURIComponent(redirect_uri)}&response_type=code&scope=identify&state=${state}`} className="p-4 block md:inline hover:text-gray-500">Login with Discord</a>
    )
}

const generateRandomState = () => {
    return Math.random().toString(36).substring(2, 15);
};

export default DiscordLogin;