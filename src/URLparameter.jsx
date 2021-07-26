import { useParams } from "react-router-dom";
export const URLparameter = () => {
  const { id } = useParams();
  return (
    <div>
      <h1>URLparameter</h1>
      <h2>パラメーター {id}</h2>
    </div>
  );
};
