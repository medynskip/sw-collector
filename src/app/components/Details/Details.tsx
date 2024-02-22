'use client'

import styles from './Details.module.scss';

import { useQuery } from '@tanstack/react-query';
import { getItemDetails } from '@/app/helpers/suppliers';
import { useLocalStorageFavs } from '@/app/hooks/useLocalStorageFavs';

import { IResult } from '@/app/types/types';
import { normalizeName } from '@/app/helpers/hero';
import Loader from '../Loader';
import { FC } from 'react';

interface IProps { 
    initialData: IResult,
    id: string
}

const Details: FC<IProps> = ({ initialData, id }) => {
    const [favourites, setFavourites] = useLocalStorageFavs('fav-heroes');

    const { data, isFetching } = useQuery({
        queryKey: [`hero-&${id}`],
        queryFn: () =>
        getItemDetails({ type: 'people', id,}),
        initialData: initialData,
    })

    const normalizedName: string = normalizeName(data?.name)
    const isFavourite: boolean = favourites?.includes(normalizedName);
    
    const handleFavClick = (): void => {
        if (!isFavourite) {
            setFavourites((prev: string[]) => [ ...prev, normalizedName]);

            return;
        }

        setFavourites((prev: string[]) => prev.filter((name) => name !== normalizedName));
    }

    if (isFetching) {
        return <Loader />
    }

    return (
        <div className={styles.details}>
            <header className={styles.detailsHeader}>
                <h2>Name: {data.name}</h2>
                <button className={styles.favButton} onClick={handleFavClick}>
                    {isFavourite ? 'Remove favourite' : 'Add to favourites'}
                </button>
            </header>
            <div className={styles.table} role="table" aria-label="Hero details">
                <div className={styles.tableRow} role="row">
                    <span className={styles.tableCell} role="cell">Height:</span>
                    <span className={styles.tableCell} role="cell">{data.height}</span>
                </div>
                <div className={styles.tableRow} role="row">
                    <span className={styles.tableCell} role="cell">Mass:</span>
                    <span className={styles.tableCell} role="cell">{data.mass}</span>
                </div>
                <div className={styles.tableRow} role="row">
                    <span className={styles.tableCell} role="cell">Hair color:</span>
                    <span className={styles.tableCell} role="cell">{data.hair_color}</span>
                </div>
                <div className={styles.tableRow} role="row">
                    <span className={styles.tableCell} role="cell">Skin color:</span>
                    <span className={styles.tableCell} role="cell">{data.skin_color}</span>
                </div>
                <div className={styles.tableRow} role="row">
                    <span className={styles.tableCell} role="cell">Eye color:</span>
                    <span className={styles.tableCell} role="cell">{data.eye_color}</span>
                </div>
                <div className={styles.tableRow} role="row">
                    <span className={styles.tableCell} role="cell">Gender:</span>
                    <span className={styles.tableCell} role="cell">{data.gender}</span>
                </div>
                <div className={styles.tableRow} role="row">
                    <span className={styles.tableCell} role="cell">Homeworld:</span>
                    <span className={styles.tableCell} role="cell">{data.homeworld}</span>
                </div>
            </div>
            <h3>Films:</h3>
            <ul className={styles.films}>
                {data.films.map((el, i) => {
                    return <li className={styles.movie} key={i}>{el}</li>;
                })}
            </ul>
        </div>
    );
};

export default Details;
