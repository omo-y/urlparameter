import { Page2 } from "../Page2";
import { URLparameter } from "../URLparameter";

export const Page2Routes = [
  {
    path: "/",
    exact: true,
    children: <Page2 />
  },
  {
    path: "/:id",
    exact: false,
    children: <URLparameter />
  }
];
