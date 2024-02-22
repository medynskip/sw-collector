'use client'

import { useEffect, useState } from "react";

import { motion } from "framer-motion";
import Link from 'next/link';

import styles from './Card.module.scss';
import CardImage from "../CardImage";
import FavButton from "../FavButton";

const Card = ({ name, url, path, isFavourite }: { 
    name: string, 
    url: string, 
    path: string, 
    isFavourite: boolean,
}) => {
    const segments = new URL(url).pathname.split('/');
    const last = segments.pop() || segments.pop(); 

    const [isClient, setIsClient] = useState(false)
 
    useEffect(() => {
      setIsClient(true)
    }, [])

    return (
        <motion.div 
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, scale: 0.75 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
                duration: 0.2
            }
        }>
            <Link 
                href={{
                    pathname: `${path}`,
                    query: `id=${last}`,
                }} 
                className={styles.card}
            > 
                <CardImage description={name} />
                <h3>
                    {name}
                </h3>
                {isClient ? (
                    <FavButton isFavourite={isFavourite} />
                ) : null}
            </Link>
        </motion.div>
    )
}

export default Card;