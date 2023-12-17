import { useEffect, useState } from "react";
import { useDispatch } from 'react-redux';
import { Task } from "../../models/Task";
import { CreateTaskDTO } from "../../dtos/Task";
import { Header, Main, FormTask } from "../../components"
import { 
  load_task_action, 
  create_task_action, 
  finish_task_action, 
  edit_task_action 
} from "../../redux/ducks/tasks/actions";

export default function Home() {
  const [openForm, setOpenForm] = useState(false);
  const dispatch = useDispatch();

  function handleCreateTask(task: CreateTaskDTO, image: unknown) {
    return dispatch(create_task_action({
      description: task.description,
      isFinish: task.isFinish,
      image,
    }));
  }

  function handleEditTask(task: Task, image: unknown) {
    return dispatch(edit_task_action({
      description: task.description,
      isFinish: task.isFinish,
      id: task.id,
      image,
    }));
  }

  function handleOpenFormCreate() {
    setOpenForm(true);
  }

  function handleFinishTask(task: Task) {
    dispatch(finish_task_action(task));
  }

  useEffect(() => {
    dispatch(load_task_action());
  }, []);

  return (
    <div className="container">
      <div className="box-limit">
        <Header openModalForm={handleOpenFormCreate} />
        <Main
          handleFinishTask={handleFinishTask}
          handleEditTask={handleEditTask}
        />
      </div>
      <FormTask
        open={openForm}
        setOpen={setOpenForm}
        handleCreateTask={handleCreateTask}
      />
    </div>
  );
}
