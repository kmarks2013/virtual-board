class ToDo{

    constructor(content, id, whiteboardId, userId) {
        this.content = content
        this.id = id
        this.whiteboardId = whiteboardId
        this.userId = userId
    }

    render() {
        let toDoLi = document.createElement('li')
        toDoLi.innerText = this.content

        let deleteButton = document.createElement('button');
        deleteButton.innerText = 'x';
        deleteButton.style.display = 'none';
        toDoLi.append(deleteButton);

        deleteButton.addEventListener('click', () => {
          // fetch(`https://virtual-board-backend.herokuapp.com/users/${this.userId}/whiteboards/${this.whiteboardId}/to_dos/${this.id}`, {
          //   method: 'DELETE'
          // })
          fetch(`http://localhost:3000/users/${this.userId}/whiteboards/${this.whiteboardId}/to_dos/${this.id}`, {
            method: 'DELETE'
          })
          .then(res => res.json())
          .then(toDoLi.remove())
        })

        return toDoLi;
    }

}
