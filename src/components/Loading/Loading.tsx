import "./Loading.css";
import { Html } from "@react-three/drei";

interface LoadingProps {
  title?: string;
}

function Loading(props: LoadingProps) {
  const { title } = props;
  return <Html className="loading">{title || "Loading"}</Html>;
}

export default Loading;
