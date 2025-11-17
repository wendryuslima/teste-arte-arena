import NavBar from "@/components/nav-bar";

import { Button } from "@/components/ui/button";

const Home = () => {
  return (
    <>
    <NavBar/>
      <div className="flex flex-col space-y-6 overflow-hidden p-10 lg:overflow-hidden">
        <div className="flex items-center justify-center">
          <h1 className="text-2xl font-bold">Dashboard</h1>
        </div>
        <div className="flex flex-col items-center justify-between">
          <div className="flex items-center gap-3"></div>
        </div>

        <div className="flex flex-col gap-4 lg:grid-cols-[2fr,1fr] lg:overflow-hidden">
          <div className="flex flex-col gap-4 lg:overflow-hidden"></div>
        </div>
      </div>
    </>
  );
};

export default Home;
