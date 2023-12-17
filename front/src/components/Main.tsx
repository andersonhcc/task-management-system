import React, { useState } from 'react';
import { Space, Table, Button, Tag } from 'antd';
import { EditOutlined } from "@ant-design/icons";
import {
  FileImageOutlined,
  CheckCircleOutlined,
  ExclamationCircleOutlined,
} from "@ant-design/icons";
import { useSelector } from 'react-redux';
import { Task } from '../models/Task';
import EditFormTask from './EditFormTask';
import {ModalImage, ModalConfirm} from "../components"

const { Column } = Table;

interface Props {
  handleFinishTask: (data: Task) => void;
  handleEditTask: (task: Task, image: unknown) => void;
}

const Main = ({ handleEditTask, handleFinishTask }: Props) => {
  const [open, setOpen] = useState(false);
  const [openPreviewImage, setOpenPreviewImage] = useState(false);
  const [image, setImage] = useState<string | undefined>(undefined);
  const [task, setTask] = useState({} as Task)
  const { data } = useSelector((state: any) => state.tasks);

  const [openEdit, setOpenEdit] = useState(false);

  const showModal = (task: Task) => {
    setOpen(true);
    setTask(task);
  };
  const handleOk = () => {
    handleFinishTask(task);
    setOpen(false);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  const handleEdit = (task: Task) => { 
    setOpenEdit(true);
    setTask(task);
  }

  return (
    <div className='container-main'>
      <Table dataSource={data}>
        <Column
          title="Tarefa"
          dataIndex="description"
          key="description"
          className='title-table'
          render={(_: any, record: Task) => (
            <Space size="large" className={record.isFinish === true ? 'disabled-row' : ''}>
              {record.description}
            </Space>
          )}
        />

        <Column
          title="Status"
          key="isFinish"
          render={(_: any, { isFinish }: { isFinish: boolean }) => {
            let icon = isFinish !== true ? <ExclamationCircleOutlined /> : <CheckCircleOutlined />;
            let color = isFinish !== true ? "warning" : "success";
            let title = isFinish !== true ? "Pendente" : "Finalizada";
            return (
              <Tag icon={icon} color={color}>
                {title}
              </Tag>
            )
          }
          }
        />
        <Column
          title=""
          key="upload"
          render={(_: any, record: Task) => (
            <>
              {record.imageUrl &&
                <Space size="middle" style={{ cursor: "pointer" }} onClick={() => {
                  setImage(record.imageUrl);
                  setOpenPreviewImage(true);
                }}>
                  <FileImageOutlined className='icons-table'/>
                </Space>
              }
            </>
          )}
        />
        <Column
          title=""
          key="action"
          render={(_: any, record: Task) => {
            return (
              <Space size="large" style={{ display: "flex", justifyContent: "flex-end" }}>
                {record.isFinish === false &&
                  <EditOutlined className='icons-table' onClick={() => handleEdit(record)} />
                }
                <Button disabled={record.isFinish === true}
                  type='default' onClick={() => showModal(record)}>Concluir</Button>
              </Space>
            )
          }
          }
        />
      </Table>

      <ModalConfirm
        handleCancel={handleCancel}
        handleOk={handleOk}
        open={open}
        showModal={showModal}
      />

      <ModalImage
        open={openPreviewImage}
        setOpen={setOpenPreviewImage}
        image={image}
      />

      <EditFormTask 
        open={openEdit}
        setOpen={setOpenEdit}
        initialValuesForm={task}
        handleEditTask={handleEditTask}
      />

    </div>
  )
};

export default Main;