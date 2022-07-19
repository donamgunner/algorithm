function solution(n)
{
    var answer = 0;
    var num = 0;
    for (let i = 0; i <n.length; i++) {
        console.log(i)
        if (n[i] > 0) {
            num += n[i];
            
            answer = num;
        }else{
        answer = 0;
    }
            
    }
    return answer;
}solution(123)