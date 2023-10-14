


const initialState = {
  posts:[
    {
      id: '1',
      title: 'Article title',
      author: 'John Doe',
      publishedDate: new Date('02/02/2022'),
      category: 'Sport',
      shortDescription: 'Short description of the article...',
      content: 'Main content of the article'
    },

    {
      id: '2',
      title: 'Article title',
      author: 'John Doe',
      publishedDate:new Date('02/02/2022'),
      category: 'News',
      shortDescription: 'Short description of the article...',
      content: 'Main content of the article'
    },

    {
      id: '3',
      title: 'Article title',
      author: 'John Doe',
      publishedDate: new Date('02/02/2022'),
      category: 'Movies',
      shortDescription: 'Short description of the article...',
      content: 'Main content of the article'
    }
  ],

  categories: ['Sport', 'News', 'Movies']

  
}

export default initialState;