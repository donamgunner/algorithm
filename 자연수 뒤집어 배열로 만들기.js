function solution(n) {
    var answer = [];
    var num = [];
        
    n = n.toString()
    for(let i = 0; i < n.length; i++){
       var arr = parseInt(n[i]);
        num.push(arr)
        num.sort(function(a,b){
            return b-a;
        });
        
     answer = num;
        
    }
    
    return answer;
}solution(12345)