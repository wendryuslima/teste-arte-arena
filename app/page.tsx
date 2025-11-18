import { Suspense } from "react";
import HomeContent from "./_components/home-content";

const Home = () => {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-screen items-center justify-center">
          <div className="text-lg">Carregando...</div>
        </div>
      }
    >
      <HomeContent />
    </Suspense>
  );
};

export default Home;
