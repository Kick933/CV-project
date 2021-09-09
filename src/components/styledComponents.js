import styled from 'styled-components';

const Title = styled.h1`
    font-size: 2rem;
    text-align: center;
    vertical-align: middle;
    margin: 0 auto;
    background:#2b2b2a;
    color: whitesmoke;
    padding: 1.5rem 0;
    font-family: "Zen Tokyo Zoo", cursive;
    box-sizing: border-box;
    `

const Input = styled.input`
    padding: 0.5rem;
    border-radius: 5px;
    border: 1px solid transparent;
    display: block;
    margin:0.3rem;
    width: 90%;
    box-sizing: border-box;
    `

const Wrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 210mm;
margin: 2rem auto;
padding: 1rem;
background: #eeeeee;
color: brown;
border-radius: 20px;
box-sizing: border-box;
`
const Label = styled.label`
padding: 0.5rem;
border-radius: 5px;
border: 1px solid transparent;
display: block;
margin:1rem;
width: 90%;
background: #eeeeee;
color:#878787;
box-sizing: border-box;
`
const Description = styled.textarea`
padding: 0.5rem;
border-radius: 5px;
border: 1px solid transparent;
display: block;
margin:1rem;
max-width: 90%;
min-width: 90%;
min-height: 3rem;
max-height: 3rem;
vertical-align: top;
box-sizing: border-box;
`

const Head3 = styled.h3`
padding: 0.5rem;
border-radius: 5px;
border: 1px solid transparent;
display: block;
margin: 1rem;
width: 90%;
box-sizing: border-box;
`

const Button = styled.button`
width: 90%;
height: 3rem;
vertical-align: middle;
font-size: 1.5rem;
background-color:#333333;
color: #eeeeee;
box-sizing: border-box;
margin: 0.5rem auto;
border: 1px grey solid;
border-radius: 10px;
&:hover{
    filter: brightness(0.9);
}
&:active{
    outline: 6px gold solid;
}
`
const GreenButton = styled(Button)`
background-color: #1ba148;
color: whitesmoke;
margin: 0 auto;`

const PrintButton = styled(GreenButton)`
width: 20vw;
display: block;
`

const OrangeButton = styled(Button)`
color: whitesmoke;
background-color: #c25c0e;
box-sizing: border-box;
`
const printPage = styled.div`
width: 210mm;
height: 297mm;
box-sizing: border-box;
background-color:#eeeeee;
`


const Section = styled.section`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
box-sizing: border-box;
`
const RedButton = styled(Button)`
color: whitesmoke;
background-color: #b3211e;
box-sizing: border-box;
`

const PrintWrapper = styled(Wrapper)`
color: black;
background-color: white;
width: 210mm;
min-height: 297mm;
border-radius: 0px;
padding: 0;
box-sizing: border-box;
@media print{
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    margin: 0 !important;
}
`

const PrintDiv = styled.div`
text-align: left;
box-sizing: border-box;
`

const H4= styled.h4`
color: #143e72;
font-weight: bold;
box-sizing: border-box;
border-bottom: 1px solid grey;
`
// The top Section of preview page
const TopSection = styled.div`
    width: 210mm;
    background-color: #143e72;
    color: white;
    height: 35mm;
    box-sizing: border-box;
    padding: 0 2rem;
`

const Grid = styled.div`
box-sizing: border-box;
display: grid;
grid-template-columns: 7fr 3fr;
min-height: 262mm;
width: 210mm;
`

const P = styled.p`
text-align: left;
box-sizing: border-box;
`

const Img = styled.img`
width: 45mm;
height: 55mm;
justify-self: center;
`

const Div =styled.div`
background-color: rgb(221, 221, 221);
text-align: center;
padding: 1rem;
box-sizing: border-box;
`

const DivLeft = styled(Div)`
text-align: left;
background-color: white;
`
const FullWidth = styled.div`
width: 100%;
display: grid;
grid-template-columns: 1fr 1fr;
padding: 0;
margin: 0;
`

const B = styled.p`
font-weight: bold;
padding: 0;
margin: 0;
font-size: 110%;
`

export {Title,
    Input,
    Wrapper,
    Label,
    Description,
    Head3,
    Button,
    printPage,
    Section,
    GreenButton,
    PrintButton,
    OrangeButton,
    RedButton,
    PrintWrapper,
    PrintDiv,
    H4,
    TopSection,
    Grid,
    Img,
    Div,
    P, 
    DivLeft,
    FullWidth,
    B
}