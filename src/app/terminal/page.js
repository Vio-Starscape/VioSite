import Terminal from '@/components/Terminal/Index';

export async function generateMetadata({ params, searchParams }) {
    const searchParamsResolved = await searchParams;
    const item = searchParamsResolved.item;

    if (item) {
        return {
            title: `Vio - Terminal - ${item}`,
            description: `Explore real-time market trends and pricing for ${item} in Starscape with Vio's comprehensive data insights.`,
            openGraph: {
                title: `Vio - Terminal - ${item}`,
                description: `Explore real-time market trends and pricing for ${item} in Starscape with Vio's comprehensive data insights.`,
                url: `https://v-io.info/terminal?item=${item}`,
                images: [
                    {
                        url: `https://v-io.info/api/terminal/image/${item}`,
                        alt: item,
                    },
                ],
            },
        };
    }

    // Default metadata when no item parameter is present
    return {
        title: 'Vio - Terminal',
        description: 'Access real-time Starscape market data with Vio. Make informed trading decisions in the dynamic Starscape universe.',
        openGraph: {
            title: 'Vio - Terminal',
            description: 'Access real-time Starscape market data with Vio. Make informed trading decisions in the dynamic Starscape universe.',
        },
    };
}

export default function Page() {
    return <Terminal />;
}