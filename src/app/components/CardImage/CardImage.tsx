import { FC } from 'react';
import styles from './CardImage.module.scss';

const CardImage: FC<{ description: string }> = ({ description }) => {
    return (
        <picture className={styles.picture}>
            <source srcSet="/card-bkg.webp" />
            <img src="/card-bkg.jpg" alt={description} />
        </picture>
    )
}

export default CardImage;