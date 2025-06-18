import { useState, useEffect } from "react";
import { useUser } from "../components/wrapper/Wrapper";

export interface ModalProps {
  modalOpen: boolean;
  setModalOpen: (value: boolean) => void;
}

export const useModal = () => {
  const { name, setName } = useUser();
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    if (!name) {
      setModalOpen(true);
    }
  }, [name]);

  const handleConfirm = () => {
    if (name.trim()) {
      setModalOpen(false);
    }
  };

  return {
    name,
    setName,
    modalOpen,
    setModalOpen,
    handleConfirm,
  };
};