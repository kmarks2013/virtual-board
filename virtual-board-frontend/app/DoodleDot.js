class DoodleDot {

    static drawDot(context, x, y, color ,radius = 2) {
      //add a color to the paramaters
      context.fillStyle = color
      context.beginPath()
      context.arc(x , y , radius, 0 , 2 * Math.PI)
      context.closePath()
      context.fill()
    }

}
