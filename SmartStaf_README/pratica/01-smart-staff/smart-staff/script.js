
var name =prompt("Digite seu nome, para saber quais são os números entre -71 e 103 são mutlipos de 3 e 5: ");

alert("Seja bem vindo " + name);

contador=0 

for(i=-71;i<103;i++)
{
  if(i%3==0)
  {
  contador=contador+i;
  document.write(i+ " Smart:");
  document.write("<hr/>");
  
  
}
} 

for(i=-71;i<103;i++)
{
  if(i%5==0)
  {
  contador=contador+i;
  document.write(i+ " Staff:");
  document.write("<hr/>");
  
}
} 

