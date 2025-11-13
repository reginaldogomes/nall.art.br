
import { WithContext, LocalBusiness } from 'schema-dts';

export const localBusinessSchema: WithContext<LocalBusiness> = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'NALL',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Pirapora',
    addressRegion: 'MG',
    addressCountry: 'BR',
  },
  telephone: '+5531998811678',
  priceRange: '$$',
  image: '/nall.png',
  description: 'DJ em Pirapora, especialista em Rock, Eletrônico e Brasilidades para festas e eventos.',
  url: 'https://nall.art.br',
  geo: {
    '@type': 'GeoCoordinates',
    latitude: -17.3494,
    longitude: -44.9425,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
      ],
      opens: '00:00',
      closes: '23:59',
    },
  ],
  sameAs: [
    'https://www.instagram.com/nall.dj/',
  ],
};
