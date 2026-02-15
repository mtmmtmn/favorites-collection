'use client'

import { useState, useMemo } from 'react'
import MasonryGrid from '@/components/MasonryGrid'
import FilterBar, { Category } from '@/components/FilterBar'
import { FavoriteItem } from '@/components/ItemCard'
import styles from '@/app/page.module.css'

interface FavoriteListProps {
    initialItems: FavoriteItem[]
}

export default function FavoriteList({ initialItems }: FavoriteListProps) {
    const [activeCategory, setActiveCategory] = useState<Category>('all')
    const [searchQuery, setSearchQuery] = useState('')

    const filteredItems = useMemo(() => {
        let items = initialItems

        // カテゴリフィルター
        if (activeCategory !== 'all') {
            items = items.filter((item) => item.category === activeCategory)
        }

        // 検索フィルター
        if (searchQuery) {
            const query = searchQuery.toLowerCase()
            items = items.filter(
                (item) =>
                    item.title.toLowerCase().includes(query) ||
                    item.description.toLowerCase().includes(query)
            )
        }

        return items
    }, [initialItems, activeCategory, searchQuery])

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h1 className={styles.title}>
                    <span className="gradient-text">My Favorites</span>
                </h1>
                <p className={styles.subtitle}>
                    お気に入りの漫画・本・アニメのコレクション
                </p>
            </header>

            <FilterBar
                activeCategory={activeCategory}
                onCategoryChange={setActiveCategory}
                searchQuery={searchQuery}
                onSearchChange={setSearchQuery}
            />

            {filteredItems.length > 0 ? (
                <MasonryGrid items={filteredItems} />
            ) : (
                <div className={styles.empty}>
                    <p className={styles.emptyText}>
                        該当するアイテムが見つかりませんでした
                    </p>
                </div>
            )}
        </div>
    )
}
