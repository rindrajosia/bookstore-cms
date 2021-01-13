export const CATEGORY_FILTERS = {
  ALL: 'All',
};

export const FILTER = [
  'All',
  'Action',
  'Biography',
  'History',
  'Horror',
  'Kids',
  'Learning',
  'Sci-Fi',
];

export const initialStateBooks = {
  books: [
    {
      id: Math.floor(Math.random() * 10000),
      title: 'Vision of Evil',
      category: 'Horror',
    },
    {
      id: Math.floor(Math.random() * 10000),
      title: 'Considered for Evil',
      category: 'Horror',
    },
    {
      id: Math.floor(Math.random() * 10000),
      title: 'Mists of Titan',
      category: 'Sci-Fi',
    },
  ],
};
