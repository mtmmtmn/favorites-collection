import React from 'react'
import styles from './ItemCard.module.css'

export interface FavoriteItem {
    id: string
    url: string
    title: string
    description: string
    image: string
    category: 'manga' | 'book' | 'anime'
    addedAt: string
}

interface ItemCardProps {
    item: FavoriteItem
}

export default function ItemCard({ item }: ItemCardProps) {
    const categoryLabels = {
        manga: '漫画',
        book: '本',
        anime: 'アニメ',
    }

    return (
        <a
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.card}
        >
            <div className={styles.imageWrapper}>
                {item.image ? (
                    <img
                        src={item.image}
                        alt={item.title}
                        className={styles.image}
                        loading="lazy"
                    />
                ) : (
                    <div className={styles.placeholder}>
                        <span className={styles.placeholderIcon}>📚</span>
                    </div>
                )}
                <div className={styles.overlay}>
                    <span className={styles.viewLink}>詳細を見る →</span>
                </div>
            </div>
            <div className={styles.content}>
                <div className={styles.header}>
                    <h3 className={styles.title}>{item.title}</h3>
                    <span className={`badge badge-${item.category}`}>
                        {categoryLabels[item.category]}
                    </span>
                </div>
                <p className={styles.description}>{item.description}</p>
                <div className={styles.footer}>
                    <span className={styles.date}>
                        {new Date(item.addedAt).toLocaleDateString('ja-JP')}
                    </span>
                </div>
            </div>
        </a>
    )
}
