import Products from '@/components/products';
import { render, screen } from '@testing-library/react';

const products = [
  {
    id: 1,
    image: 'https://picsum.photos/200/400/',
    title: 'Polo manga larga estampada',
    price: 18.99,
    discount: 20,
    moreColors: true,
  },
  {
    id: 2,
    image: 'https://picsum.photos/200/400/',
    title: 'Polo manga larga bandas azules',
    price: 20.99,
    discount: 0,
    moreColors: false,
  },
];

describe('Products', () => {
  it('has same amount of cards as products are provided', () => {
    render(<Products products={products} hideLastElement={false} />);
    expect(screen.getAllByTestId('product-card')).toHaveLength(2);
  });
});
