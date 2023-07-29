import React from 'react'
import { Loader } from "@mantine/core";
const Loading = () => {
  return (
    <div className=" flex h-screen items-center justify-center">
      <Loader size="xl" variant="bars" />
    </div>
  );
}

export default Loading