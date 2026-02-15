'use client'

import React, { useState } from 'react'
import styles from './FilterBar.module.css'

export type Category = 'all' | 'manga' | 'book' | 'anime'

interface FilterBarProps {
    activeCategory: Category
    onCategoryChange: (category: Category) => void
    searchQuery: string
    onSearchChange: (query: string) => void
}

export default function FilterBar({
    activeCategory,
    onCategoryChange,
    searchQuery,
    onSearchChange,
}: FilterBarProps) {
    const categories: { value: Category; label: string }[] = [
        { value: 'all', label: 'すべて' },
        { value: 'manga', label: '漫画' },
        { value: 'book', label: '本' },
        { value: 'anime', label: 'アニメ' },
    ]

    return (
        <div className={styles.filterBar}>
            <div className={styles.categories}>
                {categories.map((cat) => (
                    <button
                        key={cat.value}
                        className={`${styles.categoryBtn} ${activeCategory === cat.value ? styles.active : ''
                            }`}
                        onClick={() => onCategoryChange(cat.value)}
                    >
                        {cat.label}
                    </button>
                ))}
            </div>
            <div className={styles.searchWrapper}>
                <input
                    type="text"
                    placeholder="検索..."
                    value={searchQuery}
                    onChange={(e) => onSearchChange(e.target.value)}
                    className={styles.searchInput}
                />
                <span className={styles.searchIcon}>🔍</span>
            </div>
        </div>
    )
}
