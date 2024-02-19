const api = 'https://swapi.dev/api/';

import { IResponse, IResult } from "../types/types";

export const getItemsList = async ({ type, next }: { type: string, next?: string  }): Promise<IResponse>  => {
    try {
        const url = next ? next : api + type;

        const res = await fetch(url);

        return res.json();
    } catch {

        throw new Error('Failed to fetch data')
    }   
}

export const getItemDetails = async ({ type, id }: { type: string, id: string }): Promise<IResult>  => {
    try {
        const url = api + type + '/' + id;

        const res = await fetch(url);
        const details = await res.json();

        const homeworld = await fetch(details.homeworld).then((res) => res.json());

        var filmPromises = details.films.map((url: string) => fetch(url).then(y => y.json()));
    
        const films = await Promise.all(filmPromises).then(results => 
            results.map((film) => film.title)
        );
        
        return {
            ...details,
            films: films,
            homeworld: homeworld.name,
        }
    } catch {
        throw new Error('Failed to fetch data')
    }
}