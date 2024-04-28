import ShowUsers from "../components/ShowUsers/ShowUsers";
import ListUsers from "../components/ListUsers/ListUsers";

const Home = () => {
  return (
    <div className="flex flex-col md:flex-row gap-6 md:gap-14 justify-center md:h-screen p-8 sm:p-14 items-center">
      <div className="w-full md:w-4/12">
        <ShowUsers />
      </div>

      <main className="bg-white rounded-lg shadow text-gray-900 border w-full md:w-8/12 h-[36rem] p-4 sm:p-8">
        <ListUsers />
        
      </main>
    </div>
  );
};

export default Home;
