
import { WithContext, Person } from 'schema-dts';

export const personSchema: WithContext<Person> = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'NALL MUSIC',
  jobTitle: 'Produtor Musical & DJ',
  image: '/nall.png',
  description: 'Produtor Musical & DJ especializado em Melodic Techno e Progressive House. Serviços de produção musical, mixagem, masterização e composição.',
  url: 'https://nall.art.br',
  email: 'ozzynall@gmail.com',
  sameAs: [
    'https://www.instagram.com/nall.dj/',
    'https://soundcloud.com/kosmophonic',
    'https://tiktok.com/nall.dj',
  ],
  knowsAbout: [
    'Produção Musical',
    'Mixagem',
    'Masterização',
    'Composição',
    'Melodic Techno',
    'Progressive House',
    'DJ',
  ],
};
