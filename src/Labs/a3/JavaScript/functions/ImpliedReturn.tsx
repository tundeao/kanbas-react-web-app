function ImpliedReturn() {
    
const multiply = (a: number, b: number) => a * b;
const fourTimesFive = multiply(4, 5);
console.log(fourTimesFive);

return (
    <>
      <h3>Implied Return ES6 functions</h3>
      fourTimesFive = {fourTimesFive}<br />
    </>
  );

}

export default ImpliedReturn