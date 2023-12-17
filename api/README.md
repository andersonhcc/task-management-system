
<h1 align='center'>
  API - Gerenciador de Tarefas 
</h1>
<h2 align='center'> # Projeto desenvolvido com Spring boot </h2>

## 🏗 Running

```plainText
Obs 1: Certifique-se de ter o Maven instalado na sua máquina antes de prosseguir. Se você não tiver o Maven instalado, você pode baixá-lo e instalá-lo a partir do site oficial: Apache Maven.

1° git clone https://github.com/andersonhcc/test-tasks

2° cd api

3° Dirija-se para src > main > resources > application.properties e coloque as variáveis do banco de dados.

4° mvn spring-boot:run

* Obs 2 : A porta está definida com 9191.

```
## 📁 Endpoints

GET (Get tasks)

```plainText

    http://localhost:9191/tasks

```


POST (Create task)

```plainText

    http://localhost:9191/addTask

```

PUT (Update task)

```plainText

    http://localhost:9191/updateTask

```

PUT (Finish task)

```plainText

    http://localhost:9191/task/finish/{id}

```