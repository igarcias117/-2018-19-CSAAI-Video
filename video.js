function main()
{
  console.log("Probando2...")

  parrafo = document.getElementById('parrafo')
  video1 = document.getElementById("video1")
  video2 = document.getElementById("video2")
  video3 = document.getElementById("video3")
  video_principal = document.getElementById("video_principal")
  boton1 = document.getElementById("boton1")
  boton2 = document.getElementById("boton2")
  boton3 = document.getElementById("boton3")

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

//video video_principal
  boton1.onclick = () => {
     video_principal.src = "Halo4.mp4";
     video_principal.currentTime = video1.currentTime;
   }

  boton2.onclick = () => {
     video_principal.src = "OP.mp4";
     video_principal.currentTime = video2.currentTime;
   }

  boton3.onclick = () => {
     video_principal.src = "anillo.mp4";
     video_principal.currentTime = video3.currentTime;
  }

}
