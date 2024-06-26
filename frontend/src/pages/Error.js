import { useRouteError } from "react-router-dom";
import PageContent from "../components/PageContent.js";
import MainNavigation from "../components/MainNavigation.js";

function ErrorPage() {
  const error = useRouteError();

  let title = "An error has occurred!";
  let message = "Something went wrong!";

  if (error.status === 500) {
    message = error.data.message;
  }

  if (error.status === 404) {
    title = "Not Found!";
    message = "Could not find resource or page.";
  }

  return (
    <>
      <MainNavigation />
      <PageContent title={title}>
        <p>{message}</p>
      </PageContent>
    </>
  );
}

export default ErrorPage;
