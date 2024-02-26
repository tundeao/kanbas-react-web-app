function WorkingWithArrays() {
    var functionScoped = 2;
    let blockScoped = 5;
    const constant1 = functionScoped - blockScoped;
    let numberArray1 = [1, 2, 3, 4, 5];
    let stringArray1 = ['string1', 'string2'];
  
    let variableArray1 = [
      functionScoped, blockScoped,
      constant1, numberArray1, stringArray1
    ];
  
    return (
      <>
        <h3>Working With Arrays</h3>
        <p>numberArray1: {numberArray1}</p>
        <p>stringArray1: {stringArray1}</p>
        <p>variableArray1: {variableArray1}</p>
      </>
    );
  }
  
  export default WorkingWithArrays;