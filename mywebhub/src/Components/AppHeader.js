
const AppHeader = ()=>{

return(
<div>
   
    <div className=" bg-black  text-white p-5 flex space-x-96">
       
        <div className="inline-flex mr-32 ml-32">
            <img src="https://leetcode.com/static/images/LeetCode_logo_rvs.png" className="h-8 w-8 mr-3"></img>
            <div className="text-xl font-sans">LeetCode</div>
            
        </div>
        <div className="float-right">
            <a href="www.google.com" className="m-5 text-yellow-400 ">Premium</a>
            <a href="www.google.com" className="m-5">Explore</a>
            <a href="www.google.com" className="m-5">Product</a>
            <a href="www.google.com" className="m-5">Developer</a>
            <a href="www.google.com" className="m-5">Sign in</a>
        </div>
    </div>
</div>
)
}

export default AppHeader;