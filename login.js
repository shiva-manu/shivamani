let submit=document.querySelector("#login");
submit.onclick=()=>{
   let body=document.querySelector("body");
   body.remove();
   let newbody=document.createElement("body");
   let head=document.querySelector("head");
   head.after(newbody);
   let div=document.createElement("div");
   newbody.append(div);
   div.style.backgroundImage="linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%)";
   div.style.height="250px";
   div.style.width="500px";
   div.style.border="2px solid white";
   div.style.borderRadius="15px";
   body.style.display="flex";
   body.style.justifyContent="center";
   body.style.alignContent="center";
   body.style.alignItems="center";
   div.innerHTML="<i>your account successfully registered</i>";
   div.style.fontSize="30px";
   div.style.textAlign="center";
   let para=document.querySelector("i");
   para.style.color="black";
   div.style.display="flex";
   div.style.justifyContent="center";
   div.style.alignContent="center";
   div.style.alignItems="center";
   let img=document.createElement("img");
   div.append(img);
   div.style.margin="100px";

}