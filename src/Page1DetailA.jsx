import { useLocation, useHistory } from "react-router-dom";

export const Page1DetailA = () => {
  const location = useLocation();
  console.log(location);
  const history = useHistory();
  const kaeru = () => {
    history.goBack();
  };
  return (
    <div>
      <h1>Page1DetailAです</h1>
      <button onClick={kaeru}>戻る</button>
    </div>
  );
};
