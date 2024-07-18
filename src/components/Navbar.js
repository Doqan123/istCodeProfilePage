function Navbar() {
    return (
        //Header section
        <div className="bg-white py-3 lg:py-5 text-black ">
            {/* Container section */}
            <div className="container flex items-center justify-between space-x-6 lg:space-x-16">
                {/* Logo */}
                <a href="https://meetgate.ai/" rel="home" className="pl-4 md:pl-0 text-4xl lg:text-6xl font-bold text-gega-gray text-transparent bg-gradient-to-r bg-clip-text from-gega-red to-gega-white max-w-[180px]  ">
                    <img className="uicore uicore-logo uicore-main" src="https://meetgate.ai/wp-content/uploads/2024/05/logo.png" alt="Meetgate" />
                </a>

                {/* Mobile Menu */}
                <div className="block md:hidden pr-4">
                    <div className="space-y-1 cursor-pointer">
                        <div className="bg-black w-8 h-1 rounded-full"></div>
                        <div className="bg-black w-8 h-1 rounded-full"></div>
                        <div className="bg-black w-8 h-1 rounded-full"></div>
                    </div>
                </div>

                {/* Nav */}
                <nav className="hidden md:flex justify-between flex-1 text-md font-inter font-medium ">
                    {/* Menu */}
                    <div className=" flex items-center  space-x-4 lg:space-x-8 ">
                        <a href="https://meetgate.ai/about-us/" aria-current="page" className="hover:text-gate-color ">
                            <span >About Us</span>
                        </a>
                        <a href="https://meetgate.ai/contact/"  className="hover:text-gate-color" >
                            <span >Contact</span>
                        </a>
                    </div>
                    {/* Login Area */}
                    <div className="flex items-center space-x-8"></div>

                    {/* Form Area */}
                   
                        <div className="flex items-center space-x-4 lg:space-x-8 lg:text-md ">
                        <a href="https://meetgate.ai/blog" className=" border-r px-4 mx-4 py-1 hover:text-gate-color  border-black">blog</a>
                        <a href="https://meetgate.ai/contact/" className="bg-black px-3 py-1 rounded text-white cursor-pointer whitespace-nowrap">Try Now!</a>
                    </div>
                   
                    {/* Sign Up Area */}
                    
                </nav>
            </div>
        </div>
    )
}

export default Navbar;
