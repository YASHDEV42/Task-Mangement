import React from "react";
import { Button } from "./ui/button";
import { useFormStatus } from "react-dom";

const Delete = () => {
  const { pending } = useFormStatus();
  return (
    <>
      {pending ? (
        <Button disabled className="text-lg opacity-50 ">
          Deleting...
        </Button>
      ) : (
        <Button className="text-lg p-3 bg-red-600 hover:bg-red-700 transition ">
          Delete
        </Button>
      )}
    </>
  );
};

export default Delete;
