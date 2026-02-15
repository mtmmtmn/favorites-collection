import React from 'react'
import ItemCard, { FavoriteItem } from './ItemCard'
import styles from './MasonryGrid.module.css'

interface MasonryGridProps {
    items: FavoriteItem[]
}

export default function MasonryGrid({ items }: MasonryGridProps) {
    return (
        <div className={styles.grid}>
            {items.map((item) => (
                <div key={item.id} className={styles.gridItem}>
                    <ItemCard item={item} />
                </div>
            ))}
        </div>
    )
}
