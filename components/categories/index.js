import Link from 'next/link'
import React from 'react'

import styles from './styles.module.css'

function Categories({ categories }) {
    return (
        <div className={styles.categories}>
            {categories?.map(cat => (
                <Link
                    key={cat.id}
                    className={styles.category}
                    href={`/${cat.id}`}
                >
                    <div className={styles.name}>{cat.name}</div>
                </Link>
            ))
            }
        </div>
    )
}

export default Categories
