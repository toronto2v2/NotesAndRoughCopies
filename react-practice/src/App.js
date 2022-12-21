import { Component } from 'react';
import styled from 'styled-components'
import './App.css';


const Button = styled.button`
    display: block;
    margin: 0 auto;
    background-color: yellow;
    width: 80px;

`
const Header = styled.h2`
    font-size: 22px;

`
const Form = styled.form`
    background-color: pink;
        input{
            background-color: purple;
        }
        span{
            color: green;
        }

`

class WhoAmI extends Component{
    constructor(props){
        super(props)

        this.state = {
            years: 27,
            text: 'qwerty',
            position: '',
        }

    }

    nextYear = () => {
        this.setState(state => ({
            years: state.years + 1
        }))
    }

    commitInputChanges = (e) => {
        this.setState({
            position: e.target.value
        })
        
    }



    render(){
        const {name, surname, link} = this.props;
        const {position, years} = this.state
        return(
            <div  className = 'statusOfWrapper'>
                <Button  utton onClick={this.nextYear}>{this.state.text}</Button>
                <Header>My name is {name}, surname: {surname}, age: {years}, position: {position}</Header>
                <a href={link}>My profile</a>
                <Form>
                    <span>Введите должность</span>
                    <input type="text" onChange={this.commitInputChanges} />
                </Form>
            </div>
            
        )
    }
}

const Wrapper = styled.div`

    width: 600px;
    margin 100px auto 0 auto;
    background-color: gray; 

`

const DynamicGreating = (props) =>{
    return (
        <div style = {{width: '300px', border: '2px solid black', marginTop: '25px', backgroundColor: props.color, height:'50px'}}>
            {props.children}
        </div>
    )
}


function App() {
    return(
        <Wrapper>
            <WhoAmI name = 'Misha' surname = 'Yevrii' link = 'facebook.com'/>
            <WhoAmI name = 'Anya' surname = 'Yevrii' link = 'facebook.com'/>

            <DynamicGreating color = 'green'>
                <h2>zaluop</h2>
            </DynamicGreating>
        </Wrapper>
    )
}


export default App;
export {Button};
