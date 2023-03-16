function bmiCal(weight,height){

    var bmi = weight/Math.pow(height,2);
        // return Math.round(bmi);

    if(bmi<=18.5){
        return "so you are underweight."
               }
     else if(bmi>18.5 && bmi<=24.9){
        return "so you have a normal weight."
     }
     else if(bmi>24.9){
        return "so you are overweight"
     }


};

console.log(bmiCal(65,1.8))