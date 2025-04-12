import './App.css'
import CommonButton from './common/CommonButton';
import { CommonButtonProps } from './model';

const buttonProps: CommonButtonProps = {
  buttonText: "See Services",
  link: "/services",
}

function App() {
  return (
    <div className="page-frame">
      <div className="page-container">
        <Logo/>
        <Header/>
        <CommonButton {...buttonProps} />
      </div>
    </div>
  )
}

function Logo(){
  return(
    <div className="logo-container"></div>
  )
}

function Header(){
  return(
    <p className="header">
      <b>2Chainz</b>
    </p>
  )
}

export default App
