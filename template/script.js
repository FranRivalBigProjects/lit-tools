const res=document.getElementById('res');
function run(){
  const val=document.getElementById('code').value;
  res.innerText='Processed: '+val.length+' chars';
}