let inputElements = document.querySelectorAll(".innp input[type='number']");

inputElements.forEach((input) => {
  input.addEventListener("input", function() {
    if (input.value === "" || input.value === null || input.value === undefined || input.value === "0") {
      input.style.backgroundColor = "#dddddd";
    } else {
      input.style.backgroundColor = "";
    }
  });

  // 초기값이 0인 input 요소의 배경색을 회색으로 설정
  if (input.value === "0") {
    input.style.backgroundColor = "#dddddd";
  }
});

  



var div = document.getElementById('grand');
var inputs = div.querySelectorAll('input');

function clearDefaultValue() {
  var defaultValue = this.getAttribute('value');
  var currentValue = this.value;

  if (currentValue === defaultValue) {
    this.value = '';
  }
}

for (var i = 0; i < inputs.length; i++) {
  inputs[i].addEventListener('focus', clearDefaultValue);
}












// 각 영역의 값을 선택하고 합산하여 새로운 input에 보여주기 (백트래킹 방식)
function calculateCombinations() {
    var areas = [
      Array.from(document.querySelectorAll('p:nth-of-type(1) input[type="number"]')).map(input => parseInt(input.value)).filter(value => value !== 0 && !isNaN(value) && value !== null),
      Array.from(document.querySelectorAll('p:nth-of-type(2) input[type="number"]')).map(input => parseInt(input.value)).filter(value => value !== 0 && !isNaN(value) && value !== null),
      Array.from(document.querySelectorAll('p:nth-of-type(3) input[type="number"]')).map(input => parseInt(input.value)).filter(value => value !== 0 && !isNaN(value) && value !== null),
      Array.from(document.querySelectorAll('p:nth-of-type(4) input[type="number"]')).map(input => parseInt(input.value)).filter(value => value !== 0 && !isNaN(value) && value !== null),
      Array.from(document.querySelectorAll('p:nth-of-type(5) input[type="number"]')).map(input => parseInt(input.value)).filter(value => value !== 0 && !isNaN(value) && value !== null),
      Array.from(document.querySelectorAll('p:nth-of-type(6) input[type="number"]')).map(input => parseInt(input.value)).filter(value => value !== 0 && !isNaN(value) && value !== null),
      Array.from(document.querySelectorAll('p:nth-of-type(7) input[type="number"]')).map(input => parseInt(input.value)).filter(value => value !== 0 && !isNaN(value) && value !== null),
      Array.from(document.querySelectorAll('p:nth-of-type(8) input[type="number"]')).map(input => parseInt(input.value)).filter(value => value !== 0 && !isNaN(value) && value !== null)
      // 추가적인 영역이 있다면 여기에 추가
      
    ].filter(area => area.length > 0);
  


    var combinations = [];
    backtrack([], 0);
    
    function backtrack(currentCombination, areaIndex) {
      if (areaIndex === areas.length) {
        var sum = currentCombination.reduce((acc, val) => acc + val, 0);
        combinations.push(sum);
        return;
      }
 
      
      
      for (var i = 0; i < areas[areaIndex].length; i++) {
        
        var currentValue = areas[areaIndex][i];


        
        backtrack([...currentCombination, currentValue], areaIndex + 1);
        
        
    
      }
    }
    
    





    var outputInput = document.getElementById('output');
    
    //outputInput.value = JSON.stringify(combinations);
    function processCombinations(combinations) {
        // 중복된 값과 "none", NaN 값을 제거
        const uniqueValues = [...new Set(combinations)].filter(value => value !== "none" && !isNaN(value));
        
        // 오름차순으로 정렬
        let sortedValues = uniqueValues.sort((a, b) => a - b);
        
        return sortedValues;
      }


      
  
  // 결과를 output 칸에 출력하는 함수
  function showResult(result) {
    const output = document.getElementById("output"); // output 요소의 ID를 알맞게 수정해주세요
    output.value = result.join(", "); // 결과를 쉼표로 구분하여 출력
  }
  
  // combinations 배열
  //const combinations = ["none", 3, 2, 1, 4, "none", 5, 2, 4];
  
  // 중복된 값과 "none" 값을 제거하고, 오름차순으로 정렬한 결과를 가져옴
  const processedResult = processCombinations(combinations.filter(num => num !== 0));
  
  // 결과를 output 칸에 출력
  showResult(processedResult);





  

const maxNum = Math.max(...processedResult);
const minNum = Math.min(...processedResult);
document.getElementById("saico").innerHTML = maxNum;
document.getElementById("saite").innerHTML = minNum;

let missingNums = [];
for (let i = minNum; i <= maxNum; i++) {
  if (!processedResult.includes(i)) {
    missingNums.push(i);
  }
}

if (missingNums.length > 0) {
    let output = "";
    for (let num of missingNums) {
      output += `${num}, `;
    }
    output = output.slice(0, -2); // 마지막 쉼표 제거
    document.getElementById("hukano").innerHTML = output;
    document.getElementById("hukano").style.color = "red";
  } else {
    document.getElementById("hukano").innerHTML = "범위 내 모든 점수가 가능합니다.";
    document.getElementById("hukano").style.color = "blue";
  }
  

  


  }
  






  function validateInput(input) {
    const value = input.value;
    if (value < 0 || value > 99) {
      input.value = "";
    }
  }