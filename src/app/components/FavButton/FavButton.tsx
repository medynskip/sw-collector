import styles from './FavButton.module.scss';

const FavButton = ({ isFavourite }: { isFavourite: boolean}) => {
    return (
        <div className={styles.favorite}>
            {isFavourite ? (
                <NativeIcon />
            ) : null}
        </div>
    )
}

export default FavButton;

const NativeIcon = () => {
    return (
        <svg height="48px" width="48px" viewBox="0 0 28.673 28.673" xmlSpace="preserve">
            <g>
                <path fill="#ffffff" d="M21.385,0H7.289c-0.232,0-0.42,0.189-0.42,0.417v27.84c0,0.168,0.1,0.318,0.26,0.384
                    c0.052,0.022,0.104,0.032,0.16,0.032c0.108,0,0.215-0.041,0.293-0.125l6.755-6.747l6.752,6.747
                    c0.118,0.122,0.296,0.154,0.456,0.093c0.156-0.065,0.26-0.216,0.26-0.384V0.417C21.805,0.189,21.617,0,21.385,0z M17.778,8.75
                    h-2.59v2.647h-2.257V8.75h-2.622V6.495h2.622v-2.57h2.257v2.57h2.59V8.75z"/>
            </g>
        </svg>
    )
}
