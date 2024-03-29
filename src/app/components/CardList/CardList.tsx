'use client'

import { useCallback, useMemo, FC } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";

import { getItemsList } from "@/app/helpers/suppliers";
import { IResponse } from "@/app/types/types";
import { useIntersectionObserver } from "@/app/hooks/useIntersectionObserver";
import { useLocalStorageFavs } from "@/app/hooks/useLocalStorageFavs";

import styles from './CardList.module.scss';
import Card from './../Card';
import { normalizeName } from "@/app/helpers/hero";
import Loader from "../Loader";

const CardList: FC<{ initialData: IResponse }> = ({ initialData }) => {
    const [favourites, ] = useLocalStorageFavs('fav-heroes');

    const { data, fetchNextPage, isFetchingNextPage, hasNextPage} = useInfiniteQuery({
        queryKey: ['heroes'],
        queryFn: ({ pageParam }) => getItemsList(pageParam),
        getNextPageParam: (lastPage) => {
            if (!lastPage.next) {
                return undefined;
            }

            return { type: 'people', next: lastPage.next };
        },
        initialPageParam: { type: 'people' },
        initialData: () => ({
            pageParams: [{ type: 'people' }],
            pages: [initialData]
        })
    })

    const [setRef] = useIntersectionObserver(useCallback(() => {
        if (!hasNextPage) { 
            return; 
        }

        fetchNextPage();
    }, [hasNextPage, fetchNextPage]));

    const items = useMemo(() => {
        return data?.pages.map(({ results }) => 
            results.map(({ name, url}, i) => {
                const normalizedName: string = normalizeName(name);

                const isFavourite: boolean = favourites?.includes(normalizedName);

                return (
                    <li key={`${name}-${i}`}>
                        <Card name={name} url={url} path={normalizedName} isFavourite={isFavourite} />
                    </li>
                )
            })
        )
    }, [data.pages, favourites]);
        
    return (
        <>
            <ul className={styles.list}>
                {items}
            </ul>
            
            {isFetchingNextPage ? (
                <Loader />
                ) : null}
            <div ref={setRef}/>
        </>
    );
}

export default CardList;