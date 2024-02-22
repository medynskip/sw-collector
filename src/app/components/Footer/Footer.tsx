import { FC } from 'react';
import styles from './Footer.module.scss';

const Footer: FC = () => {
    return (
        <footer className={styles.footer}>
            Copyright Netizens.pl | 2024
        </footer>
    )
}

export default Footer;