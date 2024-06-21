import Layout from "../components/layout";
import { Outlet } from "react-router-dom";

export default function MainPage() {
  return (
    <div>
      <Layout>
        <Outlet />
      </Layout>
    </div>
  );
}
