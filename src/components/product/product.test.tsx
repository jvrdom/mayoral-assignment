import Product from '@/components/product';
import { render } from '@testing-library/react';

const product = {
  id: 1,
  image:
    'https://assets.mayoral.com/images/t_auto_img,f_auto,c_limit,w_300/v1690799930/13-04103-044-XL-4/polo-punto-flame-better-cotton-nino-azafran-XL-4.jpg',
  title: 'Polo manga larga estampada',
  price: 29.99,
  newPrice: 26.99,
  discount: 10,
  hasMoreColors: true,
};

const productWithoutDiscount = {
  id: 1,
  image:
    'https://assets.mayoral.com/images/t_auto_img,f_auto,c_limit,w_300/v1690533110/13-04101-049-XL-4/polo-cuello-contraste-better-cotton-nino-oregano-XL-4.jpg',
  title: 'Polo manga larga estampada',
  price: 18.99,
  newPrice: 18.99,
  discount: 0,
  hasMoreColors: true,
};

describe('Product', () => {
  it('should render component with the correct data', () => {
    const { getByTestId, getByText, getByAltText } = render(<Product product={product} />);
    const { title, price, discount, image, newPrice } = product;

    const card = getByTestId('product-card');
    const titleTxt = getByText(title);
    const img = getByAltText(title);
    const priceText = getByText(`${price}€`);
    const discountTxt = getByText(`${newPrice.toFixed(2)}€ (-${discount}%)`);

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
