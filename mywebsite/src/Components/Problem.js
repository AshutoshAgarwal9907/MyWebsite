// const Problems = () => {
//   return (
//     <div className="flex flex-wrap h-[600px] resize-x  hover:resize">
//       <div id="div1" className="w-1/2 border-2 border-black flex flex-wrap ">
//         <div className="m-4">Description</div>
//         <div className="m-4">Editorial</div>
//         <div className="m-4">Solutions</div>
//         <div className="m-4">Submissions</div>
//       </div>
//       <div id="div1" className=" w-1/2 border-2 border-black ">
//         <div className="m-4">Compiler</div>
//       </div>
//     </div>
//   );
// };
import SplitPane, { Pane } from "split-pane-react";
import "split-pane-react/esm/themes/default.css";
import { useState } from "react";

function Problems() {
  const [sizes, setSizes] = useState([100, "50%", "auto"]);

  const layoutCSS = {
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  return (
    <div style={{ height: 500 }}>
      <SplitPane split="vertical" sizes={sizes} onChange={setSizes}>
        <Pane minSize={30} maxSize="50%">
          <div className="m-2 border-2 border-black" style={{ ...layoutCSS }}>
            pane1
          </div>
        </Pane>
        <div className="m-2 border-box border-b" style={{ ...layoutCSS }}>
          pane2
        </div>
      </SplitPane>
    </div>
  );
}
export default Problems;

// import React from "react";

// const Problems = () => {
//   const [boxWidth, setBoxWidth] = React.useState(6); // Initial width of the first box (in grid units)

//   const handleWidthChange = (event) => {
//     const newWidth = parseInt(event.target.value, 10);
//     setBoxWidth(newWidth);
//   };

//   return (
//     <div className="flex">
//       <div className={`w-${boxWidth}/12 bg-blue-500 p-4`}>
//         {/* First box content */}
//       </div>
//       <div className="flex-grow bg-red-500 p-4">{/* Second box content */}</div>
//       <div className="w-4/12 p-4">
//         {/* Width adjustment input */}
//         <input
//           type="range"
//           min="1"
//           max="12"
//           value={boxWidth}
//           onChange={handleWidthChange}
//           className="w-full"
//         />
//       </div>
//     </div>
//   );
// };

// export default Problems;
