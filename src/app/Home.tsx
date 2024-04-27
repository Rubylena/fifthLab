import ShowUsers from "../components/ShowUsers/ShowUsers";
import ListUsers from "../components/ListUsers/ListUsers";
import DownloadUsers from "../components/Download/DownloadUsers";
import Pagination from "../components/Pagination/Pagination";

const Home = () => {
  return (
    <div className="flex flex-col md:flex-row gap-5 justify-center md:h-screen p-8 sm:p-10 md:p-14 items-center">
      <div className="w-full md:w-2/6">
        <ShowUsers />
      </div>

      <main className="bg-white rounded-lg shadow text-gray-900 border w-full md:w-4/6 h-[28rem]">
        <ListUsers />
        <div>
          <DownloadUsers />
          <Pagination />
        </div>
      </main>
    </div>
  );
};

export default Home;
