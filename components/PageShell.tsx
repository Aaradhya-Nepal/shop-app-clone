"use client";

import { useState } from "react";
import BottomNav from "./BottomNav";
import CartLayer from "./CartLayer";

export default function PageShell({
                                      children,
                                  }: {
    children: React.ReactNode;
}) {
    const [cartOpen, setCartOpen] = useState(false);

    return (
        <div className="app-root">
            {/* Cart layer sits UNDER the page */}
            <CartLayer open={cartOpen} />

            {/* Page layer slides up */}
            <div className={`page-layer ${cartOpen ? "cart-open" : ""}`}>
                {children}
            </div>

            <BottomNav
                cartOpen={cartOpen}
                onCartToggle={() => setCartOpen((v) => !v)}
            />
        </div>
    );
}
