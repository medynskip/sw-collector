import styles from './CardImage.module.scss';

const CardImage = ({ description }: { description: string}) => {
    return (
        <picture className={styles.picture}>
            <source srcSet="/card-bkg.webp" />
            <img src="/card-bkg.jpg" alt={description} />
        </picture>
    )
}

export default CardImage;