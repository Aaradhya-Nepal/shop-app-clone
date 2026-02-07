export default function ProductsPage() {
    return (
        <div className="page">
            <h1>Products</h1>
            <p>This is the products page</p>

            {Array.from({ length: 20 }).map((_, i) => (
                <div key={i} className="product-card">
                    Product {i + 1}
                </div>
            ))}
        </div>
    );
}
