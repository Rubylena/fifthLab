import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const UserSkeleton = () => {
  return (
    <SkeletonTheme baseColor="#f2f2f2" highlightColor="#525252">
      <div className="flex gap-10 items-center p-4 bg-white border border-gray-200 rounded-lg shadow-md drop-shadow sm:p-8">
        <div>
          <Skeleton circle width={64} height={64} />
        </div>
        <div className="flex-1">
          <Skeleton count={3} height="1.8rem" />
        </div>
      </div>
    </SkeletonTheme>
  );
};

export default UserSkeleton;
