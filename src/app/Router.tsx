import Home from "@/pages/Home";
import Quiz from "@/pages/Quiz";
import Result from "@/pages/Result";
import { BrowserRouter as Router, Route } from "react-router-dom";

const routes = [
  { path: "/", component: Home },
  { path: "/quiz/:quizNumber", component: Quiz },
  { path: "/result", component: Result },
];

const DefaultRouter = () => {
  return (
    <Router>
      {routes.map(({ path, component }) => (
        <Route key={path} path={path} exact component={component} />
      ))}
    </Router>
  );
};

export default DefaultRouter;
