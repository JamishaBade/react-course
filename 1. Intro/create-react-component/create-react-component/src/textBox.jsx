export default function TextBox() {
  return (
    <div>
      <form action="/action_page.php">
        <label htmlFor="fname">First name:</label>
        <input type="text" id="fname" name="fname" />

        <label htmlFor="lname">Last name:</label>
        <input type="text" id="lname" name="lname" />

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
