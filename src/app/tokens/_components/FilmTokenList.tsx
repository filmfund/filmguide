'use client';

import { useQuery } from '@tanstack/react-query'
import { TokenInfo } from './types';
import FilmToken from './FilmToken';

export default function FilmTokensList(): React.ReactElement {

    const { data, isPending, error } = useQuery<TokenInfo[]>({
        queryKey: ['filmtokens'],
        queryFn: () => fetch('/api/tokens').then(r => r.json()),
    })

    console.log('Token data:', data);
    console.log('Number of tokens:', data?.length);

    if (isPending) return <div className="text-center text-[#999999] py-12">Loading...</div>
    if (error) return <div className="text-center text-[#E71111] py-12">Oops!</div>

    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {data.map((tokenInfo, index) => (
                <FilmToken key={index} {...tokenInfo} />
            ))}
        </div>
    );
}
