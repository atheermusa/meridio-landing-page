/* eslint-disable */
import { createClient } from 'next-sanity';


export default function IndexPage({ pets }: any) {
  return (
    <>
      <header>
        <h1>Sanity + Next.js</h1>
      </header>
      <main>
        <h2>Pets</h2>
        {pets.length > 0 && (
          <ul>
            {pets.map((pet: any) => (

              <li key={pet._id}>{pet?.name}</li>
            ))}
          </ul>
        )}
        {pets && <p>No pets to show</p>}
        {pets.length > 0 && (
          <div>
            <pre>{JSON.stringify(pets, null, 2)}</pre>
          </div>
        )}
        {!pets && (
          <div>
            <div>¯\_(ツ)_/¯</div>
            <p>
              Your data will show up here when you've configured everything
              correctly
            </p>
          </div>
        )}
      </main>
    </>
  );
}

const client = createClient({
  projectId: "07eh67l2",
  dataset: "blog",
  apiVersion: "2022-05-01",
  useCdn: false
});

export async function getStaticProps() {
  const pets = await client.fetch(`*[_type == "pet"]`);

  return {
    props: {
      pets
    }
  };
}
