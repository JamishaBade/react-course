import Card from "./components/Card";
import UserInfo from "./components/userInfo";

function App() {
  return (
    <div>
      <Card title="User Info" subtitle="Basic details">
        <UserInfo></UserInfo>
      </Card>
      <Card className="container mt-4">
        This is another container. Containers can contain anything including
        numbers, strings, other components, JSX
      </Card>
      <Card className="fw-bold">10 *200 is {10 * 200}</Card>
    </div>
  );
}

export default App;
