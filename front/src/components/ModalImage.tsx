import { Modal } from 'antd';

type Props = {
  open: boolean;
  setOpen(value: boolean): void;
  image: string | undefined;
}
const ModalImage = ({ open, setOpen, image }: Props) => {
  return (
    <>
      <Modal
        title="Imagem da tarefa"
        centered
        open={open}
        footer={null}
        onCancel={() => setOpen(false)}
        width={"100%"}
        style={{ top: 0 }}
        styles={{
          mask: {
            backgroundColor: 'rgba(0, 0, 0, 0.9)'
          },
          body: {
            padding: 0,
            textAlign: "center"
          }
        }}
      >
        <img
          src={`${process.env.REACT_APP_LINK_API}${image}`}
          style={{ maxWidth: '100%', maxHeight: '100vh' }}

        />

      </Modal>

    </>
  );
};

export default ModalImage;