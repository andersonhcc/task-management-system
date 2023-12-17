import { useMemo, useState, useEffect } from "react";
import { Form, Input, Select, Upload, Modal } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { Task } from '../models/Task';
interface Props {
  open: boolean
  initialValuesForm: Task
  setOpen: (value: boolean) => void;
  handleEditTask: (task: Task, image: unknown) => void;
}
const { Option } = Select;

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const EditFormTask = ({ open, setOpen, initialValuesForm, handleEditTask }: Props) => {
  const [form] = Form.useForm();
  const [image, setImage] = useState([]);

  function handleCancel() {
    setOpen(false);
    form.resetFields();
  }
  function handleSubmit() {
    form
      .validateFields()
      .then(values => {
        const isFinish = values.status === "finished" ? true : false;
        handleEditTask({
          description: values.description,
          isFinish,
          id: values.id,
        }, image[0]);
        form.resetFields();
        setImage([]);
        setOpen(false);
      })
      .catch(errorInfo => {
        console.log('Erro ao validar o formulário:', errorInfo);
      });
  };

  const normFile = (e: any) => {
    if (Array.isArray(e)) {
      return e;
    }
    if (e.fileList.length > 1) {
      e.fileList.shift();
    }
    return e && e.fileList;
  };

  const handleFileChange = ({ fileList }: { fileList: any }) => {
    if (!fileList) {
      setImage([]);
      return;
    }

    setImage(fileList.map((file: { originFileObj: File }) => file.originFileObj));
  };

  useEffect(() => {
    if (open) {
      form.setFieldsValue(initialValuesForm);
    }
  }, [open]);

  return (
    <>
      <Modal
        title="Editar tarefa"
        centered
        open={open}
        okText="Salvar"
        cancelText="Cancelar"
        onOk={handleSubmit}
        onCancel={handleCancel}
        width={1000}
      >
        <Form
          {...layout}
          form={form}
          initialValues={initialValuesForm}
          name="control-hooks"
          style={{ maxWidth: 600 }}
        >
          <Form.Item name="description" label="Descrição" rules={[
            { required: true, message: 'Por favor, preencha a descrição da tarefa' },
          ]} >
            <Input placeholder='Conte-nos sobre a tarefa' />
          </Form.Item>
          <Form.Item name="id" hidden>
            <Input type="hidden" />
          </Form.Item>
          <Form.Item name="status" label="Status">
            <Select
              allowClear
              defaultValue={"pending"}
            >
              <Option value="pending">Pendente</Option>
              <Option value="finished">Finalizado</Option>
            </Select>
          </Form.Item>
          <Form.Item label="Imagem" valuePropName="fileList" getValueFromEvent={normFile}>
            <Upload
              beforeUpload={() => false}
              fileList={image}
              onChange={handleFileChange}
              listType="picture-card"
              maxCount={1}
            >
              <div>
                <PlusOutlined />
              </div>
            </Upload>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default EditFormTask;