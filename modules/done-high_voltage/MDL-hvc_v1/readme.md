# Module
![](viewme.png)

## Name
[`MDL-high_voltage_circuit_V1`]()

## Title
High voltage circuit version 1

## Author
* [`CTC-jerome_dubois`]()
* [`CTC-gerard_chaplier`]()

## Description
We need a high negative voltage pulse to excite the transducer typically -100V

## Uses
### Input
* [`ITF-A_gnd`]()
* [`ITF-L_18V_alimentation`]()
* [`ITF-B_5V`]()

### Output
* [`ITF-A_gnd`]()
* -100V

## Functions
* [`FCT-sensing_emitting`]()

## Scheme
![](./images/scheme.png)

## Remarks
BOM:

<table>
  <tr>
    <td>Reference</td>
    <td>Value</td>
    <td>Library</td>
    <td>Library Ref</td>
  </tr>
  <tr>
    <td>U1</td>
    <td>LM555N</td>
    <td>linear</td>
    <td>LM555N</td>
  </tr>
  <tr>
    <td>C1</td>
    <td>10n</td>
    <td>device</td>
    <td>C</td>
  </tr>
  <tr>
    <td>R2</td>
    <td>12k</td>
    <td>device</td>
    <td>R</td>
  </tr>
  <tr>
    <td>R1</td>
    <td>2.2k</td>
    <td>device</td>
    <td>R</td>
  </tr>
  <tr>
    <td>C2</td>
    <td>47n</td>
    <td>device</td>
    <td>C</td>
  </tr>
  <tr>
    <td>R3</td>
    <td>3.3k</td>
    <td>device</td>
    <td>R</td>
  </tr>
  <tr>
    <td>2N2</td>
    <td>Q_PNP_BCE</td>
    <td>device</td>
    <td>Q_PNP_BCE</td>
  </tr>
  <tr>
    <td>2N2222_1</td>
    <td>Q_NPN_BCE</td>
    <td>device</td>
    <td>Q_NPN_BCE</td>
  </tr>
  <tr>
    <td>R4</td>
    <td>1.8k</td>
    <td>device</td>
    <td>R</td>
  </tr>
  <tr>
    <td>2N1</td>
    <td>Q_NPN_BCE</td>
    <td>device</td>
    <td>Q_NPN_BCE</td>
  </tr>
  <tr>
    <td>C3</td>
    <td>47u</td>
    <td>device</td>
    <td>CP</td>
  </tr>
  <tr>
    <td>D1</td>
    <td>400x</td>
    <td>device</td>
    <td>D</td>
  </tr>
  <tr>
    <td>C4</td>
    <td>4.7u</td>
    <td>device</td>
    <td>CP</td>
  </tr>
  <tr>
    <td>D2</td>
    <td>1N5062</td>
    <td>device</td>
    <td>D</td>
  </tr>
  <tr>
    <td>C5</td>
    <td>4.7u</td>
    <td>device</td>
    <td>CP</td>
  </tr>
  <tr>
    <td>D3</td>
    <td>1N5062</td>
    <td>device</td>
    <td>D</td>
  </tr>
  <tr>
    <td>C6</td>
    <td>4.7u</td>
    <td>device</td>
    <td>CP</td>
  </tr>
  <tr>
    <td>D4</td>
    <td>1N5062</td>
    <td>device</td>
    <td>D</td>
  </tr>
  <tr>
    <td>C7</td>
    <td>4.7u</td>
    <td>device</td>
    <td>CP</td>
  </tr>
  <tr>
    <td>D5</td>
    <td>1N5062</td>
    <td>device</td>
    <td>D</td>
  </tr>
  <tr>
    <td>C8</td>
    <td>4.7u</td>
    <td>device</td>
    <td>CP</td>
  </tr>
  <tr>
    <td>D6</td>
    <td>1N5062</td>
    <td>device</td>
    <td>D</td>
  </tr>
  <tr>
    <td>C9</td>
    <td>4.7u</td>
    <td>device</td>
    <td>CP</td>
  </tr>
  <tr>
    <td>D7</td>
    <td>1N5062</td>
    <td>device</td>
    <td>D</td>
  </tr>
  <tr>
    <td>C10</td>
    <td>4.7u</td>
    <td>device</td>
    <td>CP</td>
  </tr>
  <tr>
    <td>D8</td>
    <td>1N5062</td>
    <td>device</td>
    <td>D</td>
  </tr>
  <tr>
    <td>C11</td>
    <td>4.7u</td>
    <td>device</td>
    <td>CP</td>
  </tr>
  <tr>
    <td>D9</td>
    <td>1N5062</td>
    <td>device</td>
    <td>D</td>
  </tr>
  <tr>
    <td>C12</td>
    <td>4.7u</td>
    <td>device</td>
    <td>CP</td>
  </tr>
  <tr>
    <td>D10</td>
    <td>1N5062</td>
    <td>device</td>
    <td>D</td>
  </tr>
  <tr>
    <td>C13</td>
    <td>4.7u</td>
    <td>device</td>
    <td>CP</td>
  </tr>
  <tr>
    <td>D11</td>
    <td>1N5062</td>
    <td>device</td>
    <td>D</td>
  </tr>
  <tr>
    <td>D12</td>
    <td>400x</td>
    <td>device</td>
    <td>D</td>
  </tr>
  <tr>
    <td>C14</td>
    <td>4.7u</td>
    <td>device</td>
    <td>CP</td>
  </tr>
</table>



## Results

## Pros/Cons/Constraint

**Pros:** low electromagnetic scatterred field

**Cons:** low intensity

**Constraint:** NA
