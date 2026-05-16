import type { CartLine, CartSummary } from '../types/cart';

const CART_STORAGE_KEY = 'mvtec-cart';
const CART_UPDATED_EVENT = 'mvtec-cart-updated';

function readCartLines(): CartLine[] {
  if (typeof window === 'undefined') {
    return [];
  }

  const storedCart = window.localStorage.getItem(CART_STORAGE_KEY);

  if (!storedCart) {
    return [];
  }

  try {
    const parsedCart = JSON.parse(storedCart) as CartLine[];

    if (!Array.isArray(parsedCart)) {
      return [];
    }

    return parsedCart.filter(
      (line): line is CartLine =>
        typeof line.productId === 'string' && Number.isFinite(line.quantity) && line.quantity > 0,
    );
  } catch {
    return [];
  }
}

function writeCartLines(lines: CartLine[]): CartSummary {
  if (typeof window !== 'undefined') {
    window.localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(lines));
    window.dispatchEvent(new CustomEvent(CART_UPDATED_EVENT));
  }

  return getCartSummary(lines);
}

export function getCartSummary(lines = readCartLines()): CartSummary {
  return {
    lines,
    totalItems: lines.reduce((total, line) => total + line.quantity, 0),
  };
}

export function addProductToCart(productId: string): CartSummary {
  const lines = readCartLines();
  const existingLine = lines.find((line) => line.productId === productId);

  if (existingLine) {
    existingLine.quantity += 1;
  } else {
    lines.push({ productId, quantity: 1 });
  }

  return writeCartLines(lines);
}

export function subscribeToCartUpdates(callback: () => void): () => void {
  if (typeof window === 'undefined') {
    return () => undefined;
  }

  const handler = () => callback();
  window.addEventListener(CART_UPDATED_EVENT, handler);
  window.addEventListener('storage', handler);

  return () => {
    window.removeEventListener(CART_UPDATED_EVENT, handler);
    window.removeEventListener('storage', handler);
  };
}
