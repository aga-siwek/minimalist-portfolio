import logo from "../../../assets/logo.jpg";

function Logo() {
  return (
    <div>
      <a href="#home">
        <img src={logo} alt="logo" className="w-9 rounded-md" />
      </a>
    </div>
  );
}

export default Logo;
