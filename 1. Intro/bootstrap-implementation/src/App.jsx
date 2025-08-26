import ProgressBar from "./progressBar";
import UserInfo from "./UserInfo";
import Spinner from "./Spinner";
import Table from "./Table";

function App() {
  return (
    <div>
      <button type="button" class="btn-close" aria-label="Close"></button>

      <h1> BootStrap Implementation </h1>
      <p> trying to learn bootstrap</p>
      <ProgressBar />
      <UserInfo />
      <Spinner />
      <Table />
    </div>
  );
}
export default App;
