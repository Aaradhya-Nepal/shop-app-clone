export function CartContent() {
  return (
    <div className="cart-content">
      <div className="merchant">
        <div className="logo" />
        <div>
          <div className="merchant-name">rhode</div>
          <div className="rating">4.7 ★ (161.5K)</div>
        </div>
      </div>

      <div className="cart-item">
        <div className="product-thumb" />
        <div className="item-info">
          <div className="title">peptide lip tint pbj</div>
          <div className="price">US$18.00</div>
        </div>
      </div>

      <div className="subtotal">
        <span>Subtotal</span>
        <span>US$18.00</span>
      </div>

      <button className="checkout-btn">Continue to checkout</button>
    </div>
  );
}
