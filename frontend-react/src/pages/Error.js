import React from 'react';
import Error404 from "./Error404";

const ErrorPage = ({ error }) => {
  const { response } = error;
  let status = 500;
  if(response && response.status) {
    status = response.status;
    if(status >= 400 && status < 500) {
      return <Error404 {...response.data.init_state} />
    }
  }
  return (
    <div>error {status}</div>
  )
}

export default ErrorPage