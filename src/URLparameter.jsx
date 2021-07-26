import { useParams, useLocation } from "react-router-dom";
export const URLparameter = () => {
  const { id } = useParams();
  const { search } = useLocation();
  const query = new URLSearchParams(search);
  console.log(query);
  return (
    <div>
      <h1>URLparameter</h1>
      <h2>パラメーター {id}</h2>
      <h2>クエリパラメーター{query.get("name")}</h2>
    </div>
  );
};
