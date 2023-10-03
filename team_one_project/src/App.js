import * as React from "react";
import { Route, Routes, Link } from "react-router-dom";
import MainSideBar from "./components/MainSideBar";
import { MainDashboard } from "./components/Dashboard/MainDashboard";
import { MainSprintBoard } from "./components/SprintBoard/MainSprintBoard";
import { MainHyperLink } from "./components/HyperLink/MainHyperLink";
import { PageNotFound } from "./components/PageNotFound/PageNotFound";
import { Dashboard } from "@mui/icons-material";
import { MainMeeting } from "./components/Meeting/MainMeeting";
import LoginSignup from "./components/LoginPage/LoginSignup";
import { MainReview } from "./components/Review/MainReview";
import { MainSetting } from "./components/Setting/MainSetting";
import { MainAccount } from "./components/Account/MainAccount";

function App() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/sprintboard">Sprint Board</Link>
          </li>
          <li>
            <Link to="/meeting">Meeting</Link>
          </li>
          <li>
            <Link to="/hyperlink">Hyperlink</Link>
          </li>
          <li>
            <Link to="/review">Review</Link>
          </li>
          <li>
            <Link to="/account">Account</Link>
          </li>
          <li>
            <Link to="/setting">Setting</Link>
          </li>

          <pre>--------</pre>

          <li>
            <Link to="/login">Login Page</Link>
          </li>
          <li>
            <Link to="/sidebar">Main Sidebar</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<MainSideBar />} />

        <Route path="/dashboard">
          <Route index element={<MainDashboard />}></Route>
          {/* nested routes waiting to be populated */}
        </Route>

        <Route path="/sprintboard">
          <Route index element={<MainSprintBoard />}>
            {/* nested routes waiting to be populated */}
          </Route>
        </Route>

        <Route path="/meeting">
          <Route index element={<MainMeeting />}></Route>
          {/* nested routes waiting to be populated */}
        </Route>

        <Route path="/hyperlink">
          <Route index element={<MainHyperLink />}></Route>
          {/* nested routes waiting to be populated */}
        </Route>

        <Route path="/review">
          <Route index element={<MainReview />}></Route>
          {/* nested routes waiting to be populated */}
        </Route>

        <Route path="/account">
          <Route index element={<MainAccount />}></Route>
          {/* nested routes waiting to be populated */}
        </Route>

        <Route path="/setting">
          <Route index element={<MainSetting />}></Route>
          {/* nested routes waiting to be populated */}
        </Route>

        <Route path="/sidebar">
          <Route index element={<MainSideBar />}></Route>
          {/* nested routes waiting to be populated */}
        </Route>

        <Route path="/login">
          <Route index element={<LoginSignup />}></Route>
          {/* nested routes waiting to be populated */}
        </Route>

        <Route path="*" element={<PageNotFound />}></Route>
      </Routes>
    </>
  );
}

export default App;
