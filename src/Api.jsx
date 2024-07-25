export const key='AIzaSyCSPtxEdjlg7tN9a3cWUqUKVqN5hUQi9t4'

export const conventer=(value)=>{
if(value>=1000000)
{
  return Math.floor(value/1000000)+"M"
}
else if(value >=1000)
{
  return Math.floor(value/1000)+"K"
}
else{
  return value;
}
}