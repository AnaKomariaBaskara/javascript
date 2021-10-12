function main() {
    var depth = parseInt(readLine(), 10);
    //your code goes here
     var i;
    var p=0;
    var sum=0;
    for(i=1;i>0;i++)
    {
       p=p+7;
       
       if(p>=depth)
       {
       console.log(i);
       break;}
       p=p-2;
       
    }
}
