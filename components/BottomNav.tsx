"use client";

import Link from "next/link";

export default function BottomNav({
                                      cartOpen,
                                      onCartToggle,
                                  }: {
    cartOpen: boolean;
    onCartToggle: () => void;
}) {
    return (
        <nav className="bottom-nav">
            <Link href="/">Home</Link>
            <Link href="/products">Products</Link>

            <button onClick={onCartToggle}>
                {cartOpen ? "Close Cart" : "Open Cart"}
            </button>
        </nav>
    );
}
