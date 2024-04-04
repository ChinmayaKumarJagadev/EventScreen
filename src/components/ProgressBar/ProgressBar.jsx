import ProgressBar from "react-bootstrap/ProgressBar";
import './ProgressBar.scss'

const ProgressBarComponent = ({ data, progress, index , totalDuration, remainingTime}) => {
  let transitionDuration = `${remainingTime / 1000}s`;
  console.log(transitionDuration)
  return (
    <ProgressBar
      className="bar"
      variant="light"
      style={{
        height: "4px",
        backgroundColor: "#ffffff66",
        transition: `width 5s linear`,
        width: data ? `${100 / data.backgroundImages.length}%` : "100%",
      }}
      now={data ? progress[index] : 100}
    />
  );
};

export default ProgressBarComponent;
