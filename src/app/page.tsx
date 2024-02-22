import styles from "./page.module.scss";

import CardList from "./components/CardList";

import { getItemsList } from "./helpers/suppliers";

export default async function Page() {
    const initialParams: { type: string } = {
      type: 'people',
    };

    const data = await getItemsList(initialParams);

    return (
        <main className={styles.main}>
            <CardList initialData={data} />
        </main>
    );
}