import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button } from "@heroui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck, faCircleXmark, faCircleQuestion } from "@fortawesome/free-solid-svg-icons";

export default function Modales({ isOpen, onClose, mensaje, type = "success", onConfirm }) {
  const styles = {
    success: { title: "Éxito", color: "success", icon: faCircleCheck },
    error: { title: "Error", color: "danger", icon: faCircleXmark },
    confirm: { title: "Confirmar acción", color: "primary", icon: faCircleQuestion },
  };

  const modal = styles[type] || styles.success;

  return (
    <Modal isOpen={isOpen} onOpenChange={onClose}>
      <ModalContent className="max-w-md text-center">
        <ModalHeader className="flex flex-col items-center gap-2">
          <FontAwesomeIcon icon={modal.icon} className={`text-5xl text-${modal.color}-600`} />
          <h2 className="text-2xl font-bold">{modal.title}</h2>
        </ModalHeader>

        <ModalBody>
          <p className="text-gray-700">{mensaje}</p>
        </ModalBody>

        <ModalFooter className="flex justify-center gap-4">
          {type === "confirm" ? (
            <>
              <Button color="primary" onPress={onConfirm}>Sí</Button>
              <Button color="danger" variant="light" onPress={onClose}>No</Button>
            </>
          ) : (
            <Button color={modal.color} onPress={onClose}>Cerrar</Button>
          )}
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
