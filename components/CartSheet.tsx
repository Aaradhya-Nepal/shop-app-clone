"use client";

import { useRef, useState } from "react";
import {CartContent} from "@/components/CartContent";

export default function CartSheet({
                                      open,
                                      onClose,
                                  }: {
    open: boolean;
    onClose: () => void;
}) {
    const sheetRef = useRef<HTMLDivElement>(null);
    const startY = useRef(0);
    const [dragY, setDragY] = useState(0);

    const onPointerDown = (e: React.PointerEvent) => {
        startY.current = e.clientY;
        sheetRef.current?.setPointerCapture(e.pointerId);
    };

    const onPointerMove = (e: React.PointerEvent) => {
        if (!startY.current) return;
        const delta = e.clientY - startY.current;
        if (delta > 0) setDragY(delta);
    };

    const onPointerUp = () => {
        if (dragY > 120) {
            onClose();
        }
        setDragY(0);
        startY.current = 0;
    };

    return (
        <div
            ref={sheetRef}
            className={`cart-sheet ${open ? "open" : ""}`}
            style={{
                transform: open
                    ? `translateY(${dragY}px)`
                    : "translateY(100%)",
            }}
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={onPointerUp}
        >
            <div className="cart-handle" />

            <div className="cart-content">
                <CartContent />

                {/* Bottom close button */}
                <button className="cart-close" onClick={onClose}>
                    ✕
                </button>
            </div>
        </div>
    );
}
