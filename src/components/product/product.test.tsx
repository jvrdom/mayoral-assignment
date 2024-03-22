import Product, { calculateDiscount } from '@/components/product';
import { render } from '@testing-library/react';

const product = {
  id: 1,
  image: 'https://picsum.photos/200/400/',
  title: 'Polo manga larga estampada',
  price: 18.99,
  discount: 20,
  moreColors: true,
};

const productWithoutDiscount = {
  id: 1,
  image: 'https://picsum.photos/200/400/',
  title: 'Polo manga larga estampada',
  price: 18.99,
  discount: 0,
  moreColors: true,
};

describe('Product', () => {
  it('should render component with the correct data', () => {
    const { getByTestId, getByText, getByAltText } = render(<Product product={product} />);
    const { title, price, discount, image } = product;

    const card = getByTestId('product-card');
    const titleTxt = getByText(title);
    const img = getByAltText(title);
    const priceText = getByText(`${price}€`);
    const discountTxt = getByText(
      `${calculateDiscount(price, discount).toFixed(2)}€ (-${discount}%)`,
    );

    expect(card).toBeDefined();
    expect(titleTxt).toBeDefined();
    expect(img).toBeDefined();
    expect(priceText).toBeDefined();
    expect(discountTxt).toBeDefined();

    const displayedImage = document.querySelector('img') as HTMLImageElement;
    expect(displayedImage.src).toContain(encodeURIComponent(image));
    expect(priceText).toHaveClass('old');
  });

  it('should render component without discount with the correct data', () => {
    const { getByTestId, getByText, getByAltText } = render(
      <Product product={productWithoutDiscount} />,
    );
    const { title, price, image } = productWithoutDiscount;

    const card = getByTestId('product-card');
    const titleTxt = getByText(title);
    const img = getByAltText(title);
    const priceText = getByText(`${price}€`);

    expect(card).toBeDefined();
    expect(titleTxt).toBeDefined();
    expect(img).toBeDefined();
    expect(priceText).toBeDefined();

    const displayedImage = document.querySelector('img') as HTMLImageElement;
    expect(displayedImage.src).toContain(encodeURIComponent(image));
    expect(priceText).not.toHaveClass('old');
  });
});
