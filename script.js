// function sumNumbers(){

//     let sum = 0;

//     for(let i=0 ;i <= 10; i++){
//         sum +=i

//     }
//     return sum;

// }
// console.log(sumNumbers())




//bubble Sort:
// const arr = [5, 10, 97, 0, -30];
// function bubbleSort(arr){
//     for(let i=0; i < arr.length; i++){
//         for(let j=0; j < arr.length-1; j++ ){
//             if(arr[j] > arr[j + 1]){
//  let temp = arr[j];
//  arr[j] = arr[j + 1];
//  arr[j + 1]=temp;
//             }
//         }
//     }
//     return arr;
// }
// console.log(bubbleSort(arr))





//selection sort:
//const arr = [5, 10, 97, 0, -30];
// function swap(arr, index1, index2) {
//   const temp = arr[index1];
//   arr[index1] = arr[index2];
//   arr[index2] = temp;
// }

// function selectionSort(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     //the index of the smallest element
//     let min_idx = i;
//     //verify that min_idx is the index of the smallest element
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[j] < arr[min_idx]) {
//         min_idx = j;
//       }
//     }
//     if (i !== min_idx) {
//       swap(arr, min_idx, i);
//     }
//   }
// }

// selectionSort(arr)
// console.log(arr);



 function length(sentence){
     let count = 0;
     let i = 0;
     while(sentence[i]){
         count++;
         i++;
     }
     return count;

 }



 //numberofspaces = numbersofwords-1
 function numbersOfWords(sentence){
     let count=0;
     for(let i=0; i<sentence.length; i++){
         if(sentence[i]===' '){
             count++;
         }
     }
     return count + 1



 }
 console.log(numbersOfWords('islem'))





  function numbersOfVowels(sentence){
    let count=0;
      for(let i=0; i<sentence.length; i++){
          if(sentence[i].toLowerCase()==='a'||sentence[i].toLowerCase()==='e'||sentence[i].toLowerCase()==='i'||sentence[i].toLowerCase()==='o'||sentence[i].toLowerCase()==='u'){
              count++;
          }
      }
      return count;
  }

 function analyseSentence(sentence){
    const sentenceData={};
    sentenceData.length = length(sentence);
    sentenceData.words = numbersOfWords(sentence);
    sentenceData.vowels = numbersOfVowels(sentence);

    return sentenceData;
 }

 console.log(analyseSentence('This my algorithm solution'));






