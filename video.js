function main()
{
  video1 = document.getElementById("video1")
  video2 = document.getElementById("video2")
  video3 = document.getElementById("video3")
  video_principal = document.getElementById("video_principal")

  boton1 = document.getElementById("boton1")
  boton2 = document.getElementById("boton2")
  boton3 = document.getElementById("boton3")
  boton_bucle_SI = document.getElementById("bucle_SI")
  boton_bucle_No = document.getElementById("bucle_NO")
  inicio_bucle1 = document.getElementById("inicio1");
  inicio_bucle2 = document.getElementById("inicio2");
  inicio_bucle3 = document.getElementById("inicio3");
  final_bucle1 = document.getElementById("final1");
  final_bucle2 = document.getElementById("final2");
  final_bucle3 = document.getElementById("final3");

  texto_inicio_bucle = document.getElementById("textostartbucle");
  texto_final_bucle = document.getElementById("textostopbucle");

  bucle = false;
  inicio1ON = false;
  inicio2ON = false;
  inicio3ON = false;
  final1ON = false;
  final2ON = false;
  final3ON = false;

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

//bucle
  boton_bucle_SI.onclick = () => {
    bucle = true;
    inicio_bucle1.style.display = '';
    inicio_bucle2.style.display = '';
    inicio_bucle3.style.display = '';
    final_bucle1.style.display = '';
    final_bucle2.style.display = '';
    final_bucle3.style.display = '';
    texto_inicio_bucle.innerHTML = 'SELECCIONE INICIO DEL BUCLE';
    texto_final_bucle.innerHTML = 'SELECCIONE FINAL DEL BUCLE';
  }

  boton_bucle_No.onclick =() => {
    bucle = false;
    inicio_bucle1.style.display = 'none';
    inicio_bucle2.style.display = 'none';
    inicio_bucle3.style.display = 'none';
    final_bucle1.style.display = 'none';
    final_bucle2.style.display = 'none';
    final_bucle3.style.display = 'none';
    texto_inicio_bucle.innerHTML = '';
    texto_final_bucle.innerHTML = '';
  }

  inicio_bucle1.onclick = () => {
    if (bucle) {
      inicio1ON = true;
      inicio2ON = false;
      inicio3ON = false;
    }
  }

  inicio_bucle2.onclick = () => {
    if (bucle) {
      inicio1ON = false;
      inicio2ON = true;
      inicio3ON = false;
    }
  }

  inicio_bucle3.onclick = () => {
    if (bucle) {
      inicio1ON = false;
      inicio2ON = false;
      inicio3ON = true;
    }
  }

  final_bucle1.onclick = () => {
    if (bucle) {
      final1ON = true;
      final2ON = false;
      final3ON = false;
    }
  }

  final_bucle2.onclick = () => {
    if (bucle) {
      final1ON = false;
      final2ON = true;
      final3ON = false;
    }
  }

  final_bucle3.onclick = () => {
    if (bucle) {
      final1ON = false;
      final2ON = false;
      final3ON = true;
    }
  }

  function reset() {
    if (inicio1ON) {
      video_principal.currentTime = 110;
    } else if (inicio2ON) {
      video_principal.currentTime = 65;
    } else if (inicio3ON) {
      video_principal.currentTime = 17;
    } else {
      video_principal.currentTime = 0;
    }
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

//  boton_bucle_SI.onclick = () => {
  //  video_principal.loop = true;
//  }

  //boton_bucle_No.onclick = () => {
    //video_principal.loop = false;
  //}

}
