import oip from "../images/am.jpg";
const CardComponent = () => {
  return (
    <div className="flex flex-col bg-white m-auto p-auto">
      <div className="flex flex-nowrap lg:ml-10 md:ml-20 ml-10 ">
        <div className="inline-block px-3">
          <div className="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out">
            <span className="m-4 text-2xl ">text over img</span>
            <img
              className="h-48 w-64 mb-2"
              src="https://assets.leetcode.com/explore/cards/introduction-to-the-beginners-guide/img-1652222288.png"
              alt="img"
            ></img>
            <div className="flex flex-wrap">
              <div className="flex flex-col mx-4">
                <span className="text-center text-xl">4 </span>
                <span>chapter </span>
              </div>
              <div className="flex flex-col mx-4">
                <span className="text-center text-xl"> 17 </span>
                <span> Items </span>
              </div>
              <div className="m-4">
                <span> 0%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
