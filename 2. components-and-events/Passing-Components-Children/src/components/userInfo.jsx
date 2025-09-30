const userInfo = [
  { name: "Jamisha", age: 10 },
  { name: "Alice", age: 20 },
  { name: "Mira", age: 32 },
  { name: "Nessa", age: 30 },
];

function UserInfo() {
  return (
    <div>
      {userInfo.map((info, index) => (
        <div key={index}>
          name:{info.name}, age: {info.age}
        </div>
      ))}
    </div>
  );
}
export default UserInfo;
