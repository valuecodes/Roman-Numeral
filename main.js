let converterInput= document.getElementById('converterInput');

converterInput.addEventListener('keyup',convert);

function convert(){
    let convertValue = document.getElementById('converterInput').value;
    document.getElementById('outputNum').innerHTML=convertValue;
    let romanNum=convertToRoman(convertValue);
    console.log(romanNum);
    document.getElementById('outputRoman').innerHTML=romanNum;
    console.log(convertValue);
}


// Roman Number Converter

function convertToRoman(num) {
    numStr=num.toString();
    romanNum=['I','V','X','L','C','D','M'];
    rNum=[];
    var cnt=0;
    // console.log(numStr[0]);
    arrCount=0;
    for(var i=numStr.length-1;i>=0;i--){


        console.log(numStr[i]);
        if(numStr[i]<4 && numStr[i]>0){
            for(var j=0;j<numStr[i];j++){
                rNum.unshift(romanNum[cnt]);
            }
        }else if(numStr[i]==4){
            rNum.unshift(romanNum[cnt],romanNum[cnt+1])
        }

        // problem here below
        else if(numStr[i] >= 5 && numStr[i] <= 8){
            rNum.unshift(romanNum[cnt+1])
            for(var j=0;j<numStr[i]-5;j++){
                rNum.splice(i+1,0,romanNum[cnt]);
            }
            
        }else if(numStr[i] == 9){
            rNum.unshift(romanNum[cnt],romanNum[cnt+2]);
        }
        cnt+=2;
    }
    return rNum.join("");
}



// Wrap every letter in a span
$('.ml16').each(function(){
    $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
  });
  
  anime.timeline({loop: true})
    .add({
      targets: '.ml16 .letter',
      translateY: [-1000,0],
      easing: "easeOutExpo",
      duration: 3400,
      delay: function(el, i) {
        return 89 * i;
      }
    }).add({
      targets: '.ml16',
      opacity: 0,
      duration: 1000000,
      easing: "easeOutExpo",
    //   Default 1000
      delay: 1000
    });