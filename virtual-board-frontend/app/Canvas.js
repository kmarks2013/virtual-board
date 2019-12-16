class Canvas {

  constructor(doodle, whiteboardId, userId) {
    this.doodle = doodle
    this.whiteboardId = whiteboardId
    this.userId = userId
  }

  render(color) {
    // console.log(color)
    const canvas = document.createElement('canvas')
    canvas.id = 'doodle-canvas'
    // canvas.width = canvas.clientWidth;
    // canvas.width = canvas.height * canvas.clientWidth / canvas.clientHeight
    // debugger;
    const context = canvas.getContext('2d')

    let mousedown = false
    canvas.addEventListener('mousedown', e => {
        mousedown = true

        let x = e.offsetX
        let y = e.offsetY
        console.log(color);
        DoodleDot.drawDot(context,x,y, color)


        // fetch(`https://virtual-board-backend.herokuapp.com/users/${this.userId}/whiteboards/${this.whiteboardId}/doodles/${this.doodle.id}/doodle_dots`, {
        //   method: "POST",
        //   headers: {
        //     'Content-Type': 'application/json',
        //     Accept: 'application/json'
        //   },
        //   body: JSON.stringify({
        //     'x_coord': x,
        //     'y_coord': y
        //   })
        // })
        fetch(`http://localhost:3000/users/${this.userId}/whiteboards/${this.whiteboardId}/doodles/${this.doodle.id}/doodle_dots`, {
          method: "POST",
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
          },
          body: JSON.stringify({
            'x_coord': x,
            'y_coord': y
          })
        })
    })

    canvas.addEventListener('mousemove', (e) => {
        if (mousedown === true){
            let x = e.offsetX
            let y = e.offsetY
            DoodleDot.drawDot(context,x,y, color)

            // fetch(`https://virtual-board-backend.herokuapp.com/users/${this.userId}/whiteboards/${this.whiteboardId}/doodles/${this.doodle.id}/doodle_dots`, {
            //   method: "POST",
            //   headers: {
            //     'Content-Type': 'application/json',
            //     Accept: 'application/json'
            //   },
            //   body: JSON.stringify({
            //     'x_coord': x,
            //     'y_coord': y
            //   })
            // })
            fetch(`http://localhost:3000/users/${this.userId}/whiteboards/${this.whiteboardId}/doodles/${this.doodle.id}/doodle_dots`, {
              method: "POST",
              headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
              },
              body: JSON.stringify({
                'x_coord': x,
                'y_coord': y
              })
            })
        }
    })

    canvas.addEventListener('mouseup', (e) => {
        mousedown = false
    })

    canvas.addEventListener('mouseleave', (e) => {
        mousedown = false
    })

    // debugger;

    this.doodle.doodle_dots.forEach((dotObj, index) => {
        // debugger;
        setTimeout(() => DoodleDot.drawDot(context, dotObj.x_coord, dotObj.y_coord, color), index * 10)
    })

    const clearCanvas = document.createElement('button')
    clearCanvas.innerText = 'Erase Art'
    clearCanvas.addEventListener('click', () => {
      context.clearRect(0, 0, canvas.width, canvas.height)
      // debugger;
      // fetch(`https://virtual-board-backend.herokuapp.com/users/${this.userId}/whiteboards/${this.whiteboardId}/doodles/${this.doodle.id}`, {
      //   method: 'DELETE'
      // })
      fetch(`http://localhost:3000/users/${this.userId}/whiteboards/${this.whiteboardId}/doodles/${this.doodle.id}`, {
        method: 'DELETE'
      })
      .then(res => res.json())
      .then(userObj => {
        this.doodle = userObj.whiteboard.doodle
      })
    })

    return [canvas, clearCanvas]
  }


}
