"use client";

import { useState } from "react";
import BottomNav from "./BottomNav";
import CartSheet from "./CartSheet";

export default function PageShell({ children }: { children: React.ReactNode }) {
    const [cartOpen, setCartOpen] = useState(false);

    const closeCart = () => setCartOpen(false);
    const openCart = () => setCartOpen(true);

    return (
        <div className="app-root">
            {/* Page */}
            <div className={`page-layer ${cartOpen ? "cart-open" : ""}`}>
                {children}
            </div>

            {/* Backdrop (click to close) */}
            {cartOpen && (
                <div className="cart-backdrop" onClick={closeCart} />
            )}

            {/* Cart */}
            <CartSheet open={cartOpen} onClose={closeCart} />

            <BottomNav onCartToggle={openCart} />
        </div>
    );
}
