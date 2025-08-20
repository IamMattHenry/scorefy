import { sdk } from '@audius/sdk'
import { NextResponse } from 'next/server';

const audiusSdk = sdk({
    apiKey: process.env.NEXT_PUBLIC_AUDIUS_API_KEY!,
  })

export async function GET() {
    try {
        const tracks = await audiusSdk.tracks.getTrendingTracks({ limit: 10 });
        return NextResponse.json(tracks);
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: 'Failed to fetch tracks' });
    }
}