import { Button } from 'antd';

interface Props {
  openModalForm : () => void;
}

export default function Header({openModalForm} : Props) {
  return (
    <div className="container-header">
      
      <p className="title-header">
        Gerenciamento de Tarefas
      </p>
      
      <div className="component-button-new">
        <Button type="primary" className="button-new" onClick={openModalForm}>
          <p className="title-button-new">Nova</p>
        </Button>
      </div>
    </div>
  )
}

