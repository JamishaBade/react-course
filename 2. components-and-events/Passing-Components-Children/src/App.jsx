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
      <Card>this is another container</Card>
      <Card>hello WOrld </Card>
      <Card>
        {" "}
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor doloribus
        provident explicabo, tempore fuga quidem quod quisquam? Quo recusandae
        quia, accusamus architecto quis dolor perspiciatis. Animi non dolor
        reiciendis labore.
      </Card>
      <Card>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam
        voluptates odio autem! Exercitationem, rerum corporis, asperiores odit
        illum obcaecati soluta laborum incidunt voluptas esse sint alias magni
        dolores odio! Quis!Lorem Lorem ipsum dolor sit, amet consectetur
        adipisicing elit. Eum quasi corporis tenetur, porro in, maxime
        consectetur non saepe ut quaerat fugiat dignissimos rem? Laboriosam,
        aperiam tempora rerum temporibus sunt quos?
      </Card>
    </div>
  );
}

export default App;
