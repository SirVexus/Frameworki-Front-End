import Button from '@material-ui/core/Button';
import React from 'react';
import ListView from '../listView/listView';

interface IProps {

}
interface IState {
    searchFilter: string
}

class ResumeWork extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            searchFilter: ''
        }
        this.handleSearch = this.handleSearch.bind(this);
    }

    handleSearch(input: string) {
        this.setState({
            searchFilter: input
        });
    };

    render() {
        return <div style={{width: "calc(100% - 400px)", marginTop: "30px"}}>
        <div style={{display:"flex",  flexDirection:"row"}}>
    <span style={{
    fontSize: "22px",
    fontWeight: 700,
    color: "grey",
    paddingTop: "10px",
    paddingLeft: "10px"
  }}>Resume Work</span>
    <div style={{marginLeft: "50%", display: "flex", flexDirection: "row"}}>
    <input style={{
            margin: "10px",
            width: "calc(100% - 30px)",
            height: "30px",
            fontSize: "18px",
            border: "1px solid lightgray"
        }}
        onChange={(e) => {this.handleSearch(e.target.value)}}
        placeholder="Filter by title..."/>
        <img src="./Assets/icons/search.svg" style={{transform: "translateX(-35px)"}} />
    </div>
    <Button size="medium" style={{display: "flex", flexDirection: "row"}}>
        <img src="./Assets/icons/bell.svg" style={{marginRight: "10px"}} />
        <span style={{
            fontWeight: 700,
            color: "indigo"
            }}>Followed</span>
        <img style={{marginLeft: "15px"}} src="./Assets/icons/arrow-down.svg" />
    </Button>
</div>
        <ListView filter={this.state.searchFilter} reverse={false} />
    </div>;
    }
}

export default ResumeWork;