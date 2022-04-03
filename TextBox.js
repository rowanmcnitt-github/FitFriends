class TextBox
{
  constructor(x,y,tW,tH,charLimit)
  {
    this.Text = "";
    this.x = x;
    this.y = y;
    this.tW = tW;
    this.tH = tH;
    this.charLimit = charLimit;
  }
  getText()
  {
    return(this.Text);
  }
  addLetter(newLetter)
  {
    if(this.Text.length < this.charLimit)
       {
          this.Text = this.Text + newLetter;
       }
  }
  removeLetter()
  {
    if(this.Text.length > 0)
      {
        this.Text = this.Text.substring(0,this.Text.length - 1);
      }
  }
  render()
  {
    if(this.isOver()){fill(0,0,0,80);}else{fill(0,0,0,60);}
    textSize(this.tH * 0.6);
    rect(this.x,this.y,this.tW, this.tH);
    fill(0);
    text(this.Text, this.x, this.y);
  }
  clearText()
  {
    this.Text = "";
  }
  isOver()
  {
    let xDist = mouseX - this.x;
    let yDist = this.y - mouseY;
    return(xDist > -this.tW/2 && xDist <= this.tW/2 && yDist > -this.tH/2 && yDist <= this.tH/2);
  }
  
}