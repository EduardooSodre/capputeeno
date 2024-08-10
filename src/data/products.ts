export interface Product {
    id: number;
    image: string;
    name: string;
    price: string;
    description: string;
  }
  
  const products: Product[] = [
    {
      id: 1,
      image: '/assets/caneca-ceramica-rustica.png',
      name: 'Caneca de cerâmica rústica',
      price: 'R$ 40,00',
      description: 'Uma linda caneca de cerâmica com acabamento rústico. Ideal para café ou chá.',
    },
    {
      id: 2,
      image: '/assets/camiseta-not-today.png',
      name: 'Camiseta Not Today',
      price: 'R$ 78,00',
      description: 'Camiseta confortável e estilosa, perfeita para qualquer ocasião casual.',
    },
    {
      id: 3,
      image: '/assets/caneca-black-ring.png',
      name: 'Caneca Black Ring',
      price: 'R$ 32,00',
      description: 'Caneca elegante com anel preto. Perfeita para seu café da manhã.',
    },
    {
      id: 4,
      image: '/assets/camiseta-broken-saints.png',
      name: 'Camiseta Broken Saints',
      price: 'R$ 58,00',
      description: 'Camiseta com design exclusivo da Broken Saints. Mostre seu estilo único.',
    },
    {
      id: 5,
      image: '/assets/camiseta-outcast.png',
      name: 'Camiseta Outcast',
      price: 'R$ 89,00',
      description: 'Camiseta premium da Outcast, feita com materiais de alta qualidade.',
    },
    {
      id: 6,
      image: '/assets/caneca-the-grounds.png',
      name: 'Caneca The Grounds',
      price: 'R$ 85,00',
      description: 'Caneca exclusiva da The Grounds. Um item colecionável para os amantes de café.',
    },
    {
      id: 7,
      image: '/assets/camiseta-evening.png',
      name: 'Camiseta Evening',
      price: 'R$ 69,00',
      description: 'Camiseta leve e confortável, ideal para usar em noites descontraídas.',
    },
    {
      id: 8,
      image: '/assets/caneca-preto-fosco.png',
      name: 'Caneca Preto Fosco',
      price: 'R$ 28,00',
      description: 'Caneca de cerâmica preto fosco, moderna e minimalista.',
    },
    {
      id: 9,
      image: '/assets/caneca-never-settle.png',
      name: 'Caneca Never Settle',
      price: 'R$ 43,00',
      description: 'Caneca inspiradora com a frase "Never Settle". Perfeita para começar o dia.',
    },
    {
      id: 10,
      image: '/assets/camiseta-dreamer.png',
      name: 'Camiseta Dreamer',
      price: 'R$ 55,00',
      description: 'Camiseta para os sonhadores, com design exclusivo Dreamer.',
    },
    {
      id: 11,
      image: '/assets/caneca-decaf.png',
      name: 'Caneca Decaf',
      price: 'R$ 32,00',
      description: 'Caneca clássica para quem prefere café descafeinado.',
    },
    {
      id: 12,
      image: '/assets/camiseta-ramones.png',
      name: 'Camiseta Ramones',
      price: 'R$ 92,00',
      description: 'Camiseta oficial dos Ramones. Para os verdadeiros fãs da banda.',
    },
  ];
  
  export default products;
  