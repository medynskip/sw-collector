'use client'

import { motion } from "framer-motion";
import Link from 'next/link';

import styles from './Card.module.scss';
import CardImage from "../CardImage";

const Card = ({ name, url, path }: { 
    name: string, 
    url: string, 
    path: string, 
}) => {
    const segments = new URL(url).pathname.split('/');
    const last = segments.pop() || segments.pop();

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
            </Link>
        </motion.div>
    )
}

export default Card;