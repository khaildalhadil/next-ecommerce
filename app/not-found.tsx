'use client'
import { Button } from "@/components/ui/button";

const NotFound = () => {
  return (
    <div>
      <p>not Found</p>
      <Button variant={'outline'} onClick={()=> (window.location.href = '/')}>
        back to home
      </Button>
    </div>
  );
}
 
export default NotFound;