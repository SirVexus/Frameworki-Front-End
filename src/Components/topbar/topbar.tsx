import React from 'react';
import { Button, Icon, IconButton } from '@material-ui/core';
import HomeMenu from '../homeMenu/homeMenu';


interface IProps {

}
interface IState {
  isDropDownOpen: boolean
}

class TopBar extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      isDropDownOpen: false
    };
    this.onClick = this.onClick.bind(this);
   }

   onClick() {
     this.setState((previousState, props) => ({
       isDropDownOpen: !previousState.isDropDownOpen
     }));
   }

  render() {
    return (<div style={{
      display: "flex",
      flexDirection: "row",
      width: "100%",
      height: "55px",
      backgroundColor: "white",
      borderBottom: "1px solid grey"
  }}>
      <img style={{padding: "10px"}} src="./Assets/logo.png" />
      <div>
        <Button size="medium" onClick={this.onClick}>
        <img style={{
        padding: "10px",
        marginLeft: "20px"
        }} src="./Assets/icons/house2.svg"/>
          <span style={{
            fontWeight: 700,
            color: 'darkgray',
            fontSize: '21px'
            }}>Home</span>
            <img style={{
              marginLeft: "80px",
              width: "20px"
              }} src="./Assets/icons/arrow-down.svg"/>
          </Button>
        <input 
        placeholder="Search Legalcluster"
        style={{    
          borderRadius: "5px",
          border: "1px solid lightgrey",
          width: "500px",
          marginTop: "10px",
          marginLeft: "200px",
          height: "30px",
          fontSize: "22px"
          }}/>
          <img style={{
            transform: "translate(-30px, 5px)",
            width: "25px"
          }} src="./Assets/icons/search.svg" />
      </div>
      <div style={{
        marginLeft: "auto",
        display: "flex",
        flexDirection: "row"
        }}>
      <IconButton color="primary" aria-label="home" component="span"><img src="./Assets/icons/house.svg"/></IconButton>
      <IconButton color="primary" aria-label="chat" component="span"><img src="./Assets/icons/comments.svg"/></IconButton>
      <IconButton color="primary" aria-label="note" component="span"><img src="./Assets/icons/bell.svg"/></IconButton>
      </div>
        <div style={{
          display: this.state.isDropDownOpen ? "block" : "none",
          position: "absolute",
          left: "53px",
          top: "55px",
          zIndex: 100,
          }}><HomeMenu></HomeMenu></div>
  </div>)
  }

}

export default TopBar
