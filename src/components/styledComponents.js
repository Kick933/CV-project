import styled from 'styled-components';

const Title = styled.h1`
    font-size: 2rem;
    text-align: center;
    vertical-align: middle;
    margin: 0 auto;
    background:#2b2b2a;
    color: whitesmoke;
    padding: 1.5rem 0;
    font-family: "Zen Tokyo Zoo", cursive
    `;

const Input = styled.input`
    padding: 0.5rem;
    border-radius: 5px;
    border: 1px solid transparent;
    display: block;
    margin:0.3rem;
    width: 90%;
    `

const LeftWrap = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 210mm;
margin: 2rem auto;
padding: 1rem;
background: #eeeeee;
color: brown;
border-radius: 20px;
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
`

const Head3 = styled.h3`
padding: 0.5rem;
border-radius: 5px;
border: 1px solid transparent;
display: block;
margin: 1rem;
width: 90%;
`

const Button = styled.button`
width: 90%;
height: 3rem;
vertical-align: middle;
font-size: 1.5rem;
background-color:#333333;
color: #eeeeee;
margin: 0.5rem;
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
color: whitesmoke;`

const OrangeButton = styled(Button)`
color: whitesmoke;
background-color: #c25c0e`
const printPage = styled.div`
width: 210mm;
height: 297mm;
background-color:#eeeeee;
`


const Section = styled.section`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
`
const RedButton = styled(Button)`
color: whitesmoke;
background-color: #b3211e`

export {Title,
    Input,
    LeftWrap,
    Label,
    Description,
    Head3,
    Button,
    printPage,
    Section,
    GreenButton,
    OrangeButton,
    RedButton
}