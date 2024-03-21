"use client";
import { useState } from "react";

interface Props {
  categoryArray: string[];
  selectedCategory: number;
  setSelectedCategory: (categoryIndex: number) => void;
}
export default function CategorySelect({
  categoryArray,
  setSelectedCategory,
  selectedCategory,
}: Props) {
  return (
    <div className="ml-28">
      <h1 className="border-solid border-b-2 border-black font-bold">
        Category
      </h1>
      {categoryArray.map((category, index) => {
        return (
          <p
            key={`category ${index}`}
            onClick={() => {
              setSelectedCategory(index);
            }}
            className={`cursor-pointer hover:text-blue-300 ${
              selectedCategory === index ? "text-blue-300" : null
            }`}
          >
            {category}
          </p>
        );
      })}
    </div>
  );
}
