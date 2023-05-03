let string="";
let buttons=document.querySelectorAll(".button");
Array.from(buttons).forEach((button)=>{
    button.addEventListener("click",(e)=>{
        if(e.target.value==="="){
            string=eval(string);
            document.querySelector('input').value=string;
        }
        else if(e.target.value==="AC")
        {
            string="";
            document.querySelector('input').value=string;
        }
        else if(e.target.value==="DE")
        {
            let l;
            l=string.length;
            string=string.slice(0,l-1);
            document.querySelector('input').value=string;
        }
         else{
     console.log(e.target);
     string=string+e.target.value;
     document.querySelector('input').value=string;}
    })
})

    document.addEventListener("keypress",(b)=>{
       if(b.key==="1"||"2"||"3"||"4"||"5"||"6"||"7"||"8"||"9"||"0"||"="||"/"||"+"||"-"||".")
       {
          if(b.key==="="){
            string=eval(string);
            document.querySelector('input').value=string;
        }
        
         else{
     
     string=string+b.key;
     document.querySelector('input').value=string;}
         }
    else{
        string="";
        string="error";
        document.querySelector('input').value=string;
         }
    })

    window.onerror = function() {
        var message = "Only Numeric string is accepeted Clear And Try again";
        alert(message);
        return true;
      };