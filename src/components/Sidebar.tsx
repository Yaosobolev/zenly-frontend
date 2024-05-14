import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Sidebar = () => {
  return (
    <div className="fixed z-50 h-screen w-24 bg-slate-100/90  "></div>
    // <Sheet>
    //   <SheetTrigger asChild>
    //     <Button variant="outline">Open</Button>
    //   </SheetTrigger>
    //   <SheetContent side="left">
    //     <SheetHeader>
    //       <SheetTitle>Edit profile</SheetTitle>
    //       <SheetDescription>
    //         Make changes to your profile here. Click save when you're done.
    //       </SheetDescription>
    //     </SheetHeader>

    //     <SheetFooter></SheetFooter>
    //   </SheetContent>
    // </Sheet>
  );
};

export default Sidebar;
