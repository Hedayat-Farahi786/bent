// File: src/data/dummyData.js
export const categories = [
    { id: 1, name: 'Tech Art', slug: 'tech-art', description: 'Digital art pieces created with cutting-edge technology' },
    { id: 2, name: 'Concept Art', slug: 'concept-art', description: 'Imaginative concept designs for games and films' },
    { id: 3, name: 'Comic Project', slug: 'comic-project', description: 'Original comic series and illustrations' },
    { id: 4, name: 'Digital Paintings', slug: 'digital-paintings', description: 'Digital paintings and illustrations' },
    { id: 5, name: '3D Models', slug: '3d-models', description: '3D character and environment designs' }
  ];
  
  export const projects = [
    {
      id: 1,
      title: 'Cyberpunk City',
      slug: 'cyberpunk-city',
      category: 'Tech Art',
      categorySlug: 'tech-art',
      description: 'A futuristic cityscape with neon lights and flying vehicles',
      thumbnail: '/api/placeholder/600/400',
      images: ['/api/placeholder/1200/800', '/api/placeholder/800/1200'],
      content: 'This project explores the intersection of technology and urban life in a dystopian future. Created using a combination of 3D modeling and digital painting techniques.',
      createdAt: '2024-03-15'
    },
    {
      id: 2,
      title: 'Fantasy Character Design',
      slug: 'fantasy-character',
      category: 'Concept Art',
      categorySlug: 'concept-art',
      description: 'Character design for an upcoming fantasy game',
      thumbnail: '/api/placeholder/500/700',
      images: ['/api/placeholder/800/1200', '/api/placeholder/1200/800'],
      content: 'A series of character designs exploring different fantasy races and their cultural attributes.',
      createdAt: '2024-03-14'
    },
    {
      id: 3,
      title: 'The Last Guardian',
      slug: 'last-guardian',
      category: 'Comic Project',
      categorySlug: 'comic-project',
      description: 'Original comic series about ancient guardians',
      thumbnail: '/api/placeholder/600/800',
      images: ['/api/placeholder/1200/800', '/api/placeholder/800/1200'],
      content: 'Chapter 1 of an original comic series following the last remaining guardian of an ancient temple.',
      createdAt: '2024-03-13'
    },
    {
      id: 4,
      title: 'Mecha Design',
      slug: 'mecha-design',
      category: 'Tech Art',
      categorySlug: 'tech-art',
      description: 'Detailed mecha robot design',
      thumbnail: '/api/placeholder/500/500',
      images: ['/api/placeholder/1200/800', '/api/placeholder/800/1200'],
      content: 'Technical design exploration of a military-grade mecha unit.',
      createdAt: '2024-03-12'
    },
    {
      id: 5,
      title: 'Dragon Studies',
      slug: 'dragon-studies',
      category: 'Digital Paintings',
      categorySlug: 'digital-paintings',
      description: 'Various dragon anatomy studies',
      thumbnail: '/api/placeholder/700/500',
      images: ['/api/placeholder/1200/800', '/api/placeholder/800/1200'],
      content: 'A series of digital paintings exploring dragon anatomy and movement.',
      createdAt: '2024-03-11'
    },
    {
      id: 6,
      title: 'Sci-Fi Environment',
      slug: 'scifi-environment',
      category: '3D Models',
      categorySlug: '3d-models',
      description: 'Detailed 3D environment for a sci-fi game',
      thumbnail: '/api/placeholder/600/400',
      images: ['/api/placeholder/1200/800', '/api/placeholder/800/1200'],
      content: 'A fully realized 3D environment design for a science fiction video game.',
      createdAt: '2024-03-10'
    }
  ];