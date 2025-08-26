let CurrentTime = () => {
  let time = new Date();
  return (
    <>
      <p>The current Date is : {time.toLocaleDateString()}</p>
      <p> The Current Time is : {time.toLocaleTimeString()}</p>
    </>
  );
};
export default CurrentTime;
