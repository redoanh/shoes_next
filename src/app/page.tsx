'use client';
import Header from "@/app/components/header";
import Headermain from "@/app/components/headermain";
import Navmenu from "@/app/components/navbarmenu";
import Product from "@/app/components/product";
import Topbrand from "./components/topbrand";
import Freeservice from "./components/freeservice";
import Centershop from "./components/centershop";
import Card from "./components/card";
import ProductCat from "./components/productcat";
import Container from "@/app/components/Container";
import { useState } from "react";
import Save from "./components/save";
import Savepic from "./components/savepic";
import Specialproduct from "./components/Specialproduct";
import Specialcard from "./components/Specialcard";
import Review from "./components/Review";
import Footer from "@/app/components/Footer"
import Footerlast from "./components/Footerlast";
import Subscribe from "./components/SubscribeBar";

export default function Home() {
  const [activeCategory, setActiveCategory] = useState('');
  const [category, setCategory] = useState('');

  const handleCategoryChange = (category: any) => {
    setCategory(category);
    setActiveCategory(category);
  }

  return (
    <main>
      <Header />
      <Headermain />

      <Navmenu />
      <Product />
      <Topbrand />
      <Freeservice />
      <Centershop />
      <ProductCat
        handleCategoryChange={handleCategoryChange}
        active={activeCategory}
      />
      <div className="w-full flex justify-center px-1 bg-white">
        <Container>
          <Card
            category={category}
          />
        </Container>
      </div>
      <Save />
      <Savepic />
      <Specialproduct />
      <Specialcard />
      <Review />
      <Subscribe />
      <Footer />
      <Footerlast />

    </main>
  );
}
