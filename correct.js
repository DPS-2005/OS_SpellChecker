var Typo = require("typo-js");
var dictionary = new Typo("en_US");

const userText = document.getElementById('userText');
userText.addEventListener('input', () => {
    var currentValue = userText.value;
    var arr = currentValue.split(" ");
    if(currentValue.length != 0)
    {
        if(currentValue.charAt(currentValue.length - 1) == " ")
        {
			let val="";
			for (let i=0; i<arr.length-1; i++){
				// if (Number(arr[i]) != NaN){
				// 	console.log(Number(arr[i]));
				// 	val+=arr[i];
				// 	val+=" "
				// }
				if (arr[i].length==0){
					continue;
				}
				let endswith = arr[i].charAt(arr[i].length-1)
				if (endswith=="." || endswith=="," || endswith==";" || endswith=="!" ||endswith=="?"){
					let w = arr[i].slice(0,-1);
					
					if (!dictionary.check(w)){
						let a = Math.random();
						let ind;
						if (a>0.85){
							ind =1;
						}
						else {
							ind=0;
						}
						let choice = dictionary.suggest(w)[ind];
						w=choice;

					}
					w += endswith
					val+=w;
					val+=" ";
				}
				else{
					if (!dictionary.check(arr[i])){
						let a = Math.random();
						let ind;
						if (a>0.85){
							ind =1
						}
						else {
							ind=0;
						}
						let choice = dictionary.suggest(arr[i])[ind];
						arr[i]=choice;
					}
					console.log(arr[i]);
					val+=arr[i];
					val+=" "
				}
			}
			document.getElementById('userText').value=val;
        }
    }
}
