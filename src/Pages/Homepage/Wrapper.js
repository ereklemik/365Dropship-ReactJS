import "./wrapper.css";

const Wrapper = () => {
  const logo =
    "https://mk0q365dropshipe482k.kinstacdn.com/wp-content/uploads/2020/06/356Logo.svg";

  return (
    <div className={"Wrapper"}>
      <div className={"Wrapper__Box"}>
        <div className={"Wrapper__Logo"}>
          <img src={logo} alt={"logo"} />
        </div>
        <div className={"Wrapper__Text"}>
          <h4>WE GOT YOUR SUPPLY CHAIN COVERED</h4>
          <h4>365 DAYS A YEAR!</h4>
        </div>
      </div>
    </div>
  );
};

export default Wrapper;