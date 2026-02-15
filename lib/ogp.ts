import * as cheerio from 'cheerio'
import axios from 'axios'

export interface OGPData {
    title: string
    description: string
    image: string
    siteName: string
    url: string
}

export async function fetchOGP(url: string): Promise<OGPData> {
    try {
        const response = await axios.get(url, {
            headers: {
                'User-Agent': 'Mozilla/5.0 (compatible; OGPBot/1.0)',
            },
        })

        const html = response.data
        const $ = cheerio.load(html)

        const ogTitle = $('meta[property="og:title"]').attr('content') || $('title').text()
        const ogDescription = $('meta[property="og:description"]').attr('content') || $('meta[name="description"]').attr('content') || ''
        const ogImage = $('meta[property="og:image"]').attr('content') || ''
        const ogSiteName = $('meta[property="og:site_name"]').attr('content') || ''

        return {
            title: ogTitle,
            description: ogDescription,
            image: ogImage,
            siteName: ogSiteName,
            url,
        }
    } catch (error) {
        console.error('Error fetching OGP:', error)
        throw error
    }
}
