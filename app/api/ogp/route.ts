import { NextRequest, NextResponse } from 'next/server'
import { fetchOGP } from '@/lib/ogp'

export async function GET(request: NextRequest) {
    const searchParams = request.nextUrl.searchParams
    const url = searchParams.get('url')

    if (!url) {
        return NextResponse.json(
            { error: 'URL parameter is required' },
            { status: 400 }
        )
    }

    try {
        const ogpData = await fetchOGP(url)
        return NextResponse.json(ogpData)
    } catch (error) {
        return NextResponse.json(
            { error: 'Failed to fetch OGP data' },
            { status: 500 }
        )
    }
}
