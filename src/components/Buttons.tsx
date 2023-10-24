import { ButtonCalc, ButtonTable } from "../styles";

interface ButtonsProps {
  clearCalculator: () => void;
  selectedNumber: (value: string) => void;
}

const Buttons = ({ clearCalculator, selectedNumber }: ButtonsProps) => {
  return (
    <>
      <ButtonTable container>
        <ButtonCalc value="3" onClick={() => clearCalculator()}>
          C
        </ButtonCalc>
        <ButtonCalc value="+/-" onClick={() => selectedNumber("+/-")}>
          +/-
        </ButtonCalc>
        <ButtonCalc value="%" onClick={() => selectedNumber("%")}>
          %
        </ButtonCalc>
        <ButtonCalc value="/" onClick={() => selectedNumber("/")}>
          /
        </ButtonCalc>
        <ButtonCalc value="7" onClick={() => selectedNumber("7")}>
          7
        </ButtonCalc>
        <ButtonCalc value="8" onClick={() => selectedNumber("8")}>
          8
        </ButtonCalc>
        <ButtonCalc value="9" onClick={() => selectedNumber("9")}>
          9
        </ButtonCalc>
        <ButtonCalc value="*" onClick={() => selectedNumber("*")}>
          *
        </ButtonCalc>
        <ButtonCalc value="4" onClick={() => selectedNumber("4")}>
          4
        </ButtonCalc>
        <ButtonCalc value="5" onClick={() => selectedNumber("5")}>
          5
        </ButtonCalc>
        <ButtonCalc value="6" onClick={() => selectedNumber("6")}>
          6
        </ButtonCalc>
        <ButtonCalc value="-" onClick={() => selectedNumber("-")}>
          -
        </ButtonCalc>
        <ButtonCalc value="1" onClick={() => selectedNumber("1")}>
          1
        </ButtonCalc>
        <ButtonCalc value="2" onClick={() => selectedNumber("2")}>
          2
        </ButtonCalc>
        <ButtonCalc value="3" onClick={() => selectedNumber("3")}>
          3
        </ButtonCalc>
        <ButtonCalc value="+" onClick={() => selectedNumber("+")}>
          +
        </ButtonCalc>
        <ButtonCalc value="0" onClick={() => selectedNumber("0")}>
          0
        </ButtonCalc>
        <ButtonCalc value="," onClick={() => selectedNumber(",")}>
          ,
        </ButtonCalc>
        <ButtonCalc value="3" onClick={() => clearCalculator()}>
          C
        </ButtonCalc>
        <ButtonCalc value="ENTER" onClick={() => selectedNumber("ENTER")}>
          =
        </ButtonCalc>
      </ButtonTable>
    </>
  );
};

export default Buttons;
