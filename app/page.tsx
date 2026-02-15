import { FavoriteItem } from '@/components/ItemCard'
import FavoriteList from '@/components/FavoriteList'
import favoritesData from '@/data/favorites.json'
import { fetchOGP } from '@/lib/ogp'
import styles from './page.module.css'

// OGPデータ取得処理
async function getFavoritesWithOGP(): Promise<FavoriteItem[]> {
    const promises = (favoritesData as any[]).map(async (item) => {
        // すでに画像と説明がある場合はそのまま使う
        if (item.image && item.description) {
            return item as FavoriteItem
        }

        try {
            // OGPを取得してデータを補完
            const ogp = await fetchOGP(item.url)
            return {
                ...item,
                title: item.title || ogp.title, // タイトルもなければOGPから
                description: item.description || ogp.description,
                image: item.image || ogp.image,
            } as FavoriteItem
        } catch (error) {
            console.error(`Failed to fetch OGP for ${item.url}:`, error)
            // エラー時は元のデータを返す（画像なしになる）
            return item as FavoriteItem
        }
    })

    return Promise.all(promises)
}

export default async function Home() {
    const items = await getFavoritesWithOGP()

    return (
        <main className={styles.main}>
            <FavoriteList initialItems={items} />
        </main>
    )
}
