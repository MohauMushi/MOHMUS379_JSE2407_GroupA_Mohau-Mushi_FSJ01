import ProductGrid from "../components/ProductGrid";

/**
 * Home page component.
 * @returns {JSX.Element} The home page structure with a ProductGrid.
 */
export default function Home() {
  return (
    // Main content area with styling for minimum height, padding, and background
    <main className="min-h-screen px-4 bg-gray-100 text-gray-900 transition-colors duration-300">
      {/* Product grid component to display products */}
      <ProductGrid />
    </main>
  );
}
