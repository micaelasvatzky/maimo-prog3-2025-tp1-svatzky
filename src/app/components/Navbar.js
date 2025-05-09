import Image from "next/image";

const Navbar = () => {

  return (
    <div className="nav_container">
        <Image
              src="/assets/Orange_and_Cream_Bold_Typographic_Restaurant_Logo-removebg-preview.png"
              width={140}
              height={140} 
              alt="Logo"
            />
      <nav >
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
