/*
Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.
It should remove all values from list a, which are present in list b keeping their order.
arrayDiff([1,2],[1]) == [2]
If a value is present in b, all of its occurrences must be removed from the other:
arrayDiff([1,2,2,2,3],[2]) == [1,3]
*/


function arrayDiff(a, b) {
  b.forEach((element_to_delete)=>{
    for(let i = a.length -1; i >= 0; i--){
      if(a[i] === element_to_delete)
        a.splice(i,1)
    }
  })
  return a
}