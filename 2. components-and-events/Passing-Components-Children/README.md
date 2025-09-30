# Passing Children

1. children is a special prop for passing elements into components.
2. used for flexible and reusable component designs.
3. Common in layout or container components.
4. Accessed with propsx.children
5. Can be any content: strings,numbers,JSX, or components.

example:
function MyCard({ children }) {
return <div className="card">{children}</div>;
}
