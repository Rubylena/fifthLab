import ShowUsers from "../components/ShowUsers/ShowUsers";
import ListUsers from "../components/ListUsers/ListUsers";
import DownloadUsers from "../components/Download/DownloadUsers";
import Pagination from "../components/Pagination/Pagination";

const Home = () => {
  return (
    <div className="flex gap-5">
      <ShowUsers />

      <div className="bg-white round-lg text-gray-900">
        <ListUsers />
        <div>
          <DownloadUsers />
          <Pagination />
        </div>
      </div>
    </div>
  );
};

export default Home;
