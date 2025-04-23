export interface F1Team {
  id: string;
  name: string;
  color: string;
  secondaryColor: string;
  slug: string;
  description: string;
  founded: string;
  championships: number;
  scale: number;
  drivers: string[];
}

export const F1_TEAMS: F1Team[] = [
  {
    id: 'ferrari',
    name: 'Ferrari',
    color: '#DC0000',
    secondaryColor: '#FFEB00',
    slug: 'ferrari',
    description: 'Ferrari is the oldest and most successful team in Formula 1 history, with a rich heritage dating back to 1950. Known for their iconic red cars and passionate fanbase, Ferrari has won more Constructors\' Championships than any other team.',
    founded: '1950',
    championships: 16,
    scale: 0.9,
    drivers:['leclerc', 'hamilton']
  },
  {
    id: 'red-bull',
    name: 'Red Bull Racing',
    color: '#0600EF',
    secondaryColor: '#FF0000',
    slug: 'red-bull-racing',
    description: 'Red Bull Racing has dominated Formula 1 in recent years, winning multiple Constructors\' Championships. Known for their innovative approach and aggressive racing style, they have revolutionized the sport with their engineering excellence.',
    founded: '2005',
    championships: 6,
    scale: 1.15,
    drivers:['verstappen', 'tsunoda']
  },
  {
    id: 'mercedes',
    name: 'Mercedes',
    color: '#00D2BE',
    secondaryColor: '#000000',
    slug: 'mercedes',
    description: 'Mercedes has been a dominant force in Formula 1 since their return as a works team in 2010. With their innovative hybrid power units and exceptional team management, they have secured multiple Constructors\' and Drivers\' Championships.',
    founded: '1954',
    championships: 8,
    scale: 1.5,
    drivers:['russell', 'antonelli']
  }
]; 