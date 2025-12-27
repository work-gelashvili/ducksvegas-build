import Skeleton from "../../../Skeleton/Skeleton";
import Style from "./Loader.module.css";

const Loader = () => {
  const data = [189, 4554672, 5653, 4784, 655065, 75866, 8737, 865656];

  return (
    <div className={`${Style["loader"]}`}>
      {data.map((i, k) => {
        return (
          <div className={`${Style["loader-item"]}`} key={i}>
            <div className={`${Style["loader-item-cover"]}`}>
              <Skeleton />
            </div>
            <div className={`${Style["loader-item-title"]}`}>
              <Skeleton />
            </div>
            <div className={`${Style["loader-item-cat"]}`}>
              <Skeleton />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Loader;
