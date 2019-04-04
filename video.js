function main()
{
  console.log("Probando2...")

  parrafo = document.getElementById('parrafo')
  video1 = document.getElementById("video1")

//video 1
  video1.onmouseover = () => {
    video1.muted = false;
  }

  video1.onmouseout = () => {
    video1.muted = true;
  }

//video 2
  video2.onmouseover = () => {
    video2.muted = false;
  }

  video2.onmouseout = () => {
    video2.muted = true;
  }

//video 3
  video3.onmouseover = () => {
    video3.muted = false;
  }

  video3.onmouseout = () => {
    video3.muted = true;
  }
}
