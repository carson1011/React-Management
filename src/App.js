import './App.css';
import {Component} from "react";
import Customer from "./components/Customer";
const customers =[
  {
    'id':1,
    'image' : 'http://placeimg.com/64/64/com',
    'name' : '홍길동',
    'birthday':'921011',
    'gender': '남자',
    'job': '대학생'
  },
  {
    'id':2,
    'image' : 'http://placeimg.com/64/64/com',
    'name' : '홍길동',
    'birthday':'921011',
    'gender': '남자',
    'job': '대학생'
  },
  {
    'id':3,
    'image' : 'http://placeimg.com/64/64/com',
    'name' : '이순신',
    'birthday':'921011',
    'gender': '남자',
    'job': '대학생'
  }
]

class App extends Component{
  render() {
    return(
        <div>{
          customers.map(c=>{
            return (
                <Customer
                    id={c.id}
                    image={c.image}
                    name={c.name}
                    birthday={c.birthday}
                    gender={c.gender}
                    job={c.job}
                />
            )
          })
        }
        </div>
    );
  }
}



export default App;
