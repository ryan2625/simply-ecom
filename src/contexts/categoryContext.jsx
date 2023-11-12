import { createContext, useState, useContext } from "react"

const CategoryContext = createContext()

export const CategoryProvider = ({ children }) => {

    const [categories, setCategory] = useState(null)

    return (
        <CategoryContext.Provider value={{ categories, setCategory }}>
          {children}
        </CategoryContext.Provider>
    );
}

/* This function is used to ensure the context is used within the CategoriesProvider. */

export const useCategory = () => {
    const context = useContext(CategoryContext);
    if (context === undefined) {
      throw new Error("useCategory must be used within a CategoriesProvider");
    }
    return context;
  };