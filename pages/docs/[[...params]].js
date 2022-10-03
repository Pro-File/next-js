import React from "react";
import style from "../../styles/Home.module.css";
import { useRouter } from "next/router";

const Documentation = () => {
  const router = useRouter();
  const { params } = router.query;
  console.log("params: ", params);
  return <div>Documentation</div>;
};

export default Documentation;
