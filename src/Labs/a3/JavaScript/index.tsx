import IfElse from "./conditionals/IfElse";
import TernaryOperator from "./conditionals/TernaryOperator";
import BooleanVariables from "./variables/BooleanVariables";
import VariableTypes from "./variables/VariableTypes";
import VariablesAndConstants from "./variables/VariablesAndConstants";
import ES5Functions from "./functions/ES5Functions"
import ArrowFunctions from "./functions/ArrowFunctions"
import ImpliedReturn from "./functions/ImpliedReturn";
import FunctionParenthesisAndParameters from "./functions/FunctionParenthesisAndParameters";
import WorkingWithArrays from "./arrays/WorkingWithArrays";
import ArrayIndexAndLength from "./arrays/IndexAndLength";
import ForLoops from "./arrays/ForLoops";
import MapFunction from "./arrays/MapFunction";
import FindFunction from "./arrays/FindFunction";
import FindIndexFunction from "./arrays/FindIndexFunction";
import FilterFunction from "./arrays/FilterFunction";
import TemplateLiterals from "./string/TemplateLiterals";
import House from "./json/House";
import Spreading from "./json/Spreading";
import Destructing from "./json/Destructing";

function JavaScript() {
   console.log('Hello World!');
   return(
      <div>
         <h1>JavaScript</h1>
         <VariablesAndConstants/>
         <VariableTypes />
         <BooleanVariables />
         <IfElse />
         <TernaryOperator />
         <ES5Functions />
         <ArrowFunctions />
         <ImpliedReturn />
         <FunctionParenthesisAndParameters />
         <WorkingWithArrays />
         <ArrayIndexAndLength />
         <ForLoops />
         <MapFunction />
         <FindFunction />
         <FindIndexFunction />
         <FilterFunction />
         <TemplateLiterals />
         <House />
         <Spreading />
         <Destructing />
         


      </div>
   );
}
export default JavaScript