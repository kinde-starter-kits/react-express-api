import { useState, useEffect } from "react";
import { useKindeAuth } from "@kinde-oss/kinde-auth-react";

export default function Home() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const { getToken } = useKindeAuth();
  useEffect(() => {
    async function getData() {
      try {
        const accessToken = await getToken();
        const headers = new Headers();
        headers.append("Authorization", "Bearer " + accessToken);
        const response = await fetch(`http://localhost:6161/v1/books`, {
          headers,
        });
        const data = await response.json();
        setData(data.data);
        setError(null);
      } catch (err) {
        setError(err.message);
        setData(null);
      } finally {
        setIsLoading(false);
      }
    }
    getData();
  });

  return (
    <div className="App">
      <h2>Home</h2>
      {isLoading && <div>Getting books</div>}
      {error && (
        <div>{`There is a problem fetching the post data - ${error}`}</div>
      )}
      <ul>
        {data &&
          data.books.map(({ id, title }) => (
            <li key={id}>
              <h3>{title}</h3>
            </li>
          ))}
      </ul>
    </div>
  );
}
