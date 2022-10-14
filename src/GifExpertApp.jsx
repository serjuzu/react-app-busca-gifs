import { useState } from "react";
import { AddCategory,GifGrid } from "./components";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState([
    "The Office",
  ]);
  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;
    setCategories([newCategory, ...categories]);
  };

  return (
    <>
      {/* Título */}
      <h1>App BuscaGifs</h1>
      {/* Input */}
      <AddCategory
        onNewCategory={(value) => onAddCategory(value)}
      />
      {/* Lista de Gifs */}
        {
          categories.map((category) => (
            <GifGrid 
            key={category} 
            category={category} />
          ))
        }
      
      {/* Gif items */}
    </>
  )
}
