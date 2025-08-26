function Hello() {
  let myName = "Jamisha";
  let number = 456;
  let fullName = () => {
    return "Jamisha";
  };

  return (
    <p>
      Message Number: {number}I am {fullName()}
    </p>
  );
}
export default Hello;
