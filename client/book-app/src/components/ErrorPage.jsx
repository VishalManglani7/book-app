import { useRouteError } from "react-router-dom";

export default function Error() {
  const err = useRouteError();
  console.error(err);

  return (
    <div id="errorpage">
      <h1>Error!</h1>
      <p>Sorry, please try again!</p>
      <p>
        <i>{err.statusText || err.message}</i>
      </p>
    </div>
  );
}