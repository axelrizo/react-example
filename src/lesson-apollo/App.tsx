import { NetworkStatus, useLazyQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { GET_CHARACTERS } from "./queries/getCharacters";
NetworkStatus;
const App = () => {
  const [page, setPage] = useState(1);
  const [query, { data, fetchMore }] = useLazyQuery(GET_CHARACTERS, {
    variables: { page },
    fetchPolicy: "cache-only",
  });

  const handleNextButton = () => {
    setPage(page + 1);
    fetchMore({
      variables: { page: page + 1 },
    });
  };

  const handlePreviousButton = () => {
    setPage(page - 1);
    fetchMore({
      variables: { page: page - 1 },
    });
  };

  useEffect(() => {
    query();
  }, [query]);

  return (
    <div>
      <button onClick={handlePreviousButton}>previous</button>
      <button onClick={handleNextButton}>next</button>
      {data?.characters?.results?.map((character) => {
        return (
          <div style={{ border: "solid red" }} key={character?.id}>
            <p>{character?.name}</p>
            <p>{character?.gender}</p>
          </div>
        );
      })}
    </div>
  );
};

export default App;
