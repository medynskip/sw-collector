import styles from './page.module.scss';

import { getItemDetails } from "../helpers/suppliers";
import Details from '../components/Details/Details';

export default async function Page({ searchParams }: { searchParams: { id: string } }) {
    const heroParams = {
        type: 'people',
        id: searchParams.id,
    }

    const data = await getItemDetails(heroParams);

    return (
        <main className={styles.main}>
            <Details initialData={data} id={searchParams.id} />
        </main>
    )
  }