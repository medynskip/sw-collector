'use client'

import { usePathname, useRouter } from 'next/navigation'

import styles from './Header.module.scss';

const Header = () => {
    const router = useRouter();

    const pathname = usePathname();
    const isDetailsPage = pathname !== '/';
    
    const handleBack = () => {
        router.back();
    }

    return (
        <header className={styles.header}>
            {isDetailsPage ? (
                <button className={styles.back} onClick={handleBack}>
                    Back
                </button>
            ) : null}
            <h1>
                Star Wars Heroes
            </h1>
        </header>
    )
}

export default Header;