import Image from "next/image";
import Link from "next/link";

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
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="#">About</Link>
          </li>
          <li>
            <Link href="#">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
