import React from 'react'

import styles from "./styles.module.css";
import { Loading } from "@/components/loading";

function FeaturedMovieLoading() {
    return (
        <div style={{ height: 278 }} className={styles.movieWrapper}>
            <Loading />
        </div>
    );
}

export default FeaturedMovieLoading
