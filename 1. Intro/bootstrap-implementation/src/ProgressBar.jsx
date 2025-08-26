function ProgressBar() {
  return (
    <div>
      <div
        className="progress"
        role="progressbar"
        aria-label="Success example"
        aria-valuenow={25}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <div className="progress-bar bg-success" style={{ width: "25%" }}></div>
      </div>

      <div
        className="progress"
        role="progressbar"
        aria-label="Info example"
        aria-valuenow={50}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <div className="progress-bar bg-info" style={{ width: "50%" }}></div>
      </div>
    </div>
  );
}

export default ProgressBar;
