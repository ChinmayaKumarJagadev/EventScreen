const PauseAnimation = ({ setIsPaused }) => {
  console.log(setIsPaused)
    return (
      <div
        className="pause"
        onClick={() => setIsPaused((prevIsPaused) => !prevIsPaused)}
      ></div>
    );
  };
  
  export default PauseAnimation;
  