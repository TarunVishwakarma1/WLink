"use client";
import {
  Modal,
  ModalTrigger,
} from "@/components/ui/animated-modal";

type Props = {
    initialName:string
    afterName:string
}

export default function LogInButton({initialName, afterName}:Props) {
  
  return (
    <div>
      <Modal>
        <ModalTrigger className="bg-black dark:bg-white dark:text-black text-white flex justify-center group/modal-btn">
          <span className="group-hover/modal-btn:translate-x-40 text-center transition duration-500">
          {initialName}
          </span>
          <div className="-translate-x-40 group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 text-white z-20 dark:text-black">
            {afterName}
          </div>
        </ModalTrigger>
        
      </Modal>
    </div>
  );
}

