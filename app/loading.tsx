import Image from "next/image";
import lodaer from '@/assets/loader.gif';

const LoadingPage = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100vw",
      }}
    >
      <Image src={lodaer} alt="Loading" />
    </div>
  );
}
 
export default LoadingPage;