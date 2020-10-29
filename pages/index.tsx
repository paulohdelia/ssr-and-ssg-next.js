import { GetStaticProps } from 'next';

export default function Home({ user }) {
  return (
    <div>
      <h1>
        {user.name} - {user.login}
      </h1>
      <h3>{user.bio}</h3>

      <p>Repositórios publicados: {user.public_repos}</p>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch('https://api.github.com/users/paulohdelia');
  const data = await response.json();

  return {
    props: {
      user: data,
    },
    // Intervalo em segundos para que a página se mantenha estática
    revalidate: 60,
  };
};
