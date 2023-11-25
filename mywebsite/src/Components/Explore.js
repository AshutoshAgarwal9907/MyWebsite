import CardComponent from "./CardComponent";

const Explore = () => {
  return (
    <>
      <div className="text-gray-400 ml-24">Welcome to</div>
      <div className="text-3xl ml-24">LeetCode Explore</div>
      <div>
        <div className="">
          <h1 className="flex py-5 lg:px-10 lg:mx-14 font-bold text-4xl text-gray-800">
            <sapn className="text-2xl">Fearured</sapn>
          </h1>
          <div className="ml-10 flex overflow-x-scroll pb-10 hide-scroll-bar">
            {Array(10)
              .fill()
              .map((index) => (
                <CardComponent key={index} />
              ))}
          </div>
        </div>
      </div>
      <h1 className="flex py-5 lg:px-10 lg:mx-14 font-bold text-4xl text-gray-800">
        <sapn className="text-2xl">Interview</sapn>
      </h1>
      <div className="ml-10 flex overflow-x-scroll pb-10 hide-scroll-bar">
        {Array(10)
          .fill()
          .map((index) => (
            <CardComponent key={index} />
          ))}
      </div>
      <h1 className="flex py-5 lg:px-10 lg:mx-14 font-bold text-4xl text-gray-800">
        <sapn className="text-2xl">Learn</sapn>
      </h1>
      <div className="ml-10 flex overflow-x-scroll pb-10 hide-scroll-bar">
        {Array(10)
          .fill()
          .map((index) => (
            <CardComponent key={index} />
          ))}
      </div>
    </>
  );
};

export default Explore;
