class Quote {

  constructor(content, id, whiteboardId, userId) {
    this.content = content
    this.id = id
    this.whiteboardId = whiteboardId
    this.userId = userId
  }

  render() {
    let quoteLi = document.createElement('li')
    quoteLi.innerText = this.content

    let deleteButton = document.createElement('button');
    deleteButton.innerText = 'x';
    quoteLi.append(deleteButton);

    deleteButton.addEventListener('click', () => {
      fetch(`http:localhost:3000/users/${this.userId}/whiteboards/${this.whiteboardId}/quotes/${this.id}`, {
        method: 'DELETE'
      })
      .then(res => res.json())
      .then(quoteLi.remove())
    })

    return quoteLi;
  }

}
