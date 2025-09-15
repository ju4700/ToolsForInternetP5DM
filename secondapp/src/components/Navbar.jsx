function Navbar() {
    return (
        <nav className="bg-blue-500 p-4">
            <h1 className="text-white text-2xl font-bold">My Navbar</h1>
            <ul className="flex space-x-4 justify-center ">
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
    );
}

export default Navbar;