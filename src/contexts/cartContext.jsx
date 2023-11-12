import { createContext, useState, useContext } from "react"

const CartContext = createContext()

export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([])

    return (
        <CartContext.Provider value={{ cart, setCart }}>
          {children}
        </CartContext.Provider>
    );
}

/* This function is used to ensure the context is used within the CategoriesProvider. */

export const useCart = () => {
    const context = useContext(CartContext);
    if (context === undefined) {
      throw new Error("useCart must be used within a CategoriesProvider");
    }
    return context;
  };