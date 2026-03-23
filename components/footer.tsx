import { APP_NAME } from "@/app/lib/constants";

const Footer = () => {

  return ( 
    <footer className="border-t border-neutral-100 ">
      <div className="flex-center p-5">
        <span>
          {APP_NAME}. ALL RIGHTS
        </span>
      </div>
    </footer> 
  );
}
 
export default Footer;