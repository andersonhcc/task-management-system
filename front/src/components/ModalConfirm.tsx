import React, { useState } from 'react';
import { Button, Modal, Space } from 'antd';
import { Task } from '../models/Task';

interface Props {
  showModal: (task: Task) => void;
  handleOk: () => void;
  handleCancel: () => void;
  open: boolean;
}

const ModalConfirm = ({ handleCancel, handleOk, showModal, open }: Props) => {

  return (
    <>
      <Modal
        open={open}
        title="Deseja concluir essa tarefa?"
        onOk={handleOk}
        onCancel={handleCancel}
        footer={(_, { OkBtn, CancelBtn }) => (
          <>
            <CancelBtn />
            <OkBtn />
          </>
        )}
      >
      </Modal>
    </>
  );
};

export default ModalConfirm;