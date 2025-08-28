import { useState, useEffect } from "react";

const CurrentTime = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  let hours = time.getHours();
  const minutes = time.getMinutes().toString().padStart(2, "0");
  const seconds = time.getSeconds().toString().padStart(2, "0");
  const ampm = hours >= 12 ? "PM" : "AM";

  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  hours = hours.toString().padStart(2, "0");

  return (
    <div className="current-time">
      <p>
        {hours}
        <span className="colon">:</span>
        {minutes}
        <span className="colon">:</span>
        {seconds} {ampm}
      </p>
    </div>
  );
};

export default CurrentTime;
