'use client'

import { useEffect, useState, FC } from "react";

import { motion } from "framer-motion";
import Link from 'next/link';

import styles from './Card.module.scss';
import CardImage from "../CardImage";
import FavButton from "../FavButton";

interface IProps {
    name: string, 
    url: string, 
    path: string, 
    isFavourite: boolean,
}

const Card: FC<IProps> = ({ name, url, path, isFavourite }) => {
    const segments = new URL(url).pathname.split('/');
    const last = segments.pop() || segments.pop(); 

    const [isClient, setIsClient] = useState(false)
 
    useEffect(() => {
      setIsClient(true)
    }, [])

    return (
        <motion.div 
            whileHover={{ scale: 1.05 }}
        >
            <Link 
                href={{
                    pathname: `${path}`,
                    query: `id=${last}`,
                }} 
                className={styles.card}
            > 
                <motion.div 
                    initial={{ opacity: 0}}
                    animate={{ opacity: 1 }}
                    transition={{
                        duration: 0.2
                    }
                }>
                    <CardImage description={name} />
                    <h3>
                        {name}
                    </h3>
                    {isClient ? (
                        <FavButton isFavourite={isFavourite} />
                    ) : null}
                </motion.div>
            </Link>
        </motion.div>
    )
}

export default Card;