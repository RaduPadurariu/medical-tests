import Link from "next/link";

const NavAuth = () => {
  return (
    <ul className="text-white text-sm flex items-center justify-center text-center">
      <li className="ml-4">
        <Link href={"/register"}>Sign up</Link>
      </li>
      <li className="ml-4">
        <Link href={"/login"}>Log in</Link>
      </li>
      {/* <li className="ml-4">
        <Link href={"/account"}>Profile</Link>
      </li>
      <li className="ml-4">
        <button className="cursor-pointer">Log out</button>
      </li> */}
    </ul>
  );
};

export default NavAuth;
