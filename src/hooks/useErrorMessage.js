import { useState } from "react";

function useErrorMessage(config = {}) {
  const style = config;

  const [errorMessage, setErrorMessage] = useState("");
  const ErrorMessageElement = errorMessage ? (
    <p style={style} className="error-message text-align-center">
      {errorMessage} !
    </p>
  ) : null;

  return { setErrorMessage, ErrorMessageElement };
}
export default useErrorMessage;
