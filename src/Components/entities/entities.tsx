import Button from "@material-ui/core/Button";
import { Height } from "@material-ui/icons";
import React from "react";
import ListView from "../listView/listView";
import MosaicView from "../mosaicView/mosaicView";

interface IProps {

}
interface IState {
    isMosaic: boolean,
    searchParam: string,
    isFullscreen: boolean,
    isFilerModalOpen: boolean,
    reverseSort: boolean
}

const modalFont = {
    fontSize: "18px",
    fontWeight: 500,
    lineHeight: "35px",
    marginRight: "20px"
}

function FilterRow(props: {
    cond1: string,
    cond2: string,
    cond3: string,
    input1Value: string,
    cond4: string,
    inputValue2: string
    isThird: boolean
}): JSX.Element {
    return <div style={{display: "flex", flexDirection: "row", marginBottom: "5px"}}>
        <div style={{fontSize: "26px", fontWeight: 700, marginRight: "10px"}}>X</div>
        <div style={modalFont}>{props.cond1}</div>
        <div style={modalFont}>{props.cond2}</div>
        <img src="./Assets/icons/arrow-down.svg" style={{width: "10px", marginRight: "20px"}} />
        <div style={modalFont}>{props.cond3}</div>
        <img src="./Assets/icons/arrow-down.svg" style={{width: "10px", marginRight: "20px"}} />
        <input 
        disabled={true}
        placeholder={props.input1Value}
        style={{height: "28px", marginRight: "20px"}}/>
        {
            props.isThird ? (<div style={{display: "flex", flexDirection: "row"}}>
                    <div style={modalFont}>{props.cond4}</div>
                    <img src="./Assets/icons/arrow-down.svg" style={{width: "10px", marginRight: "20px"}} />
                    <input 
                    disabled={true}
                    placeholder={props.inputValue2}
                    style={{height: "28px", marginRight: "20px"}}/>
                </div>) : null
        }
    </div>;
}

class Entities extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            isMosaic: true,
            searchParam: '',
            isFullscreen: false,
            isFilerModalOpen: false,
            reverseSort: false
        }
        this.handleSwitch = this.handleSwitch.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
        this.handleResize = this.handleResize.bind(this);
        this.handleCopy = this.handleCopy.bind(this);
        this.handleFilterModal = this.handleFilterModal.bind(this);
        this.handleReverseSort = this.handleReverseSort.bind(this);
    }
    handleSwitch() {
        this.setState({
            isMosaic: !this.state.isMosaic
        });
    }
    handleSearch(input: string) {
        this.setState({
            searchParam: input
        });
    }
    handleResize() {
        this.setState({
            isFullscreen: !this.state.isFullscreen
        });
    }
    handleCopy() {
        const el = document.createElement('input');
        el.value = window.location.href;
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
    }
    handleFilterModal() {
        this.setState({
            isFilerModalOpen: !this.state.isFilerModalOpen
        })
    }
    handleReverseSort() {
        this.setState({
            reverseSort: !this.state.reverseSort
        });
    }
    render() {
        return (
          <div style={{ 
              width: "100%",
              display: "block",
              position: this.state.isFullscreen ? "absolute" : "initial",
              top: "0",
              left: "0",
              backgroundColor: this.state.isFullscreen ? "white" : "transparent",
              }}>
            <div
              style={{ display: "flex", flexDirection: "row", padding: "10px" }}
            >
              <span
                style={{
                  fontSize: "22px",
                  fontWeight: 600,
                  color: "black",
                }}
              >
                Entities
              </span>
              <img
                style={{ width: "20px", marginLeft: "10px" }}
                src="./Assets/icons/cog.svg"
              />
              <div
                style={{
                  marginLeft: "auto",
                  border: "1px solid lightgrey",
                  height: "20px",
                  width: "100px",
                  padding: "5px",
                  display: "flex",
                  flexDirection: "row",
                  borderRadius: "5px 0 0 5px",
                  backgroundColor: this.state.isMosaic ? "#eaecf5" : "white",
                  cursor: "pointer",
                }}
                onClick={this.handleSwitch}
              >
                <img
                  src="./Assets/icons/window.png"
                  style={{ width: "20px" }}
                />
                <div>
                  <span
                    style={{
                      lineHeight: "20px",
                      fontWeight: 700,
                      paddingLeft: "10px",
                    }}
                  >
                    Mosaic
                  </span>
                </div>
              </div>
              <div
                style={{
                  border: "1px solid lightgrey",
                  height: "20px",
                  width: "100px",
                  padding: "5px",
                  display: "flex",
                  flexDirection: "row",
                  borderRadius: "0 5px 5px 0",
                  backgroundColor: !this.state.isMosaic ? "#eaecf5" : "white",
                  cursor: "pointer",
                }}
                onClick={this.handleSwitch}
              >
                <img src="./Assets/icons/list.png" style={{ width: "20px" }} />
                <div>
                  <span
                    style={{
                      lineHeight: "20px",
                      fontWeight: 700,
                      paddingLeft: "10px",
                    }}
                  >
                    List
                  </span>
                </div>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <Button
                size="medium"
                style={{ 
                    display: "flex",
                    flexDirection: "row",
                    padding: "3px",
                    marginRight: "5px"
                }}
              >
                <img
                  src="./Assets/icons/bell.svg"
                  style={{ marginRight: "10px", paddingLeft: "5px" }}
                />
                <span
                  style={{
                    fontWeight: 700,
                    color: "grey",
                  }}
                >
                  All
                </span>
                <img
                  style={{ marginLeft: "15px", paddingRight: "5px" }}
                  src="./Assets/icons/arrow-down.svg"
                />
              </Button>
              <Button size="medium" style={{padding: "3px", marginRight: "5px"}}>
                  <div style={{transform: "translateY(-4px)"}}>
                    <span style={{color: "grey", fontSize: "55px", lineHeight: "3px"}}>...</span>
                  </div>
              </Button>
              <Button
                size="medium"
                style={{ 
                    display: "flex",
                    flexDirection: "row",
                    padding: "3px",
                    marginRight: "5px"
                }}
                onClick={this.handleReverseSort}
              >
                <img
                  src="./Assets/icons/sort.png"
                  style={{ marginRight: "10px", paddingLeft: "5px", width: "15px" }}
                />
                <span
                  style={{
                    fontWeight: 700,
                    color: "grey",
                  }}
                >
                  Sort
                </span>
              </Button>
              <Button
                size="medium"
                style={{ 
                    display: "flex",
                    flexDirection: "row",
                    padding: "3px",
                    marginRight: "5px"
                }}
                onClick={this.handleFilterModal}
              >
                <img
                  src="./Assets/icons/filter.png"
                  style={{ marginRight: "10px", paddingLeft: "5px", height: "15px" }}
                />
                <span
                  style={{
                    fontWeight: 700,
                    color: "grey",
                  }}
                >
                  Filters
                </span>
              </Button>
              <Button
                size="medium"
                style={{ 
                    display: "flex",
                    flexDirection: "row",
                    padding: "3px",
                    marginRight: "5px"
                }}
                onClick={this.handleResize}
              >
                <img
                  src="./Assets/icons/resize.png"
                  style={{ marginRight: "10px", paddingLeft: "5px", height: "15px" }}
                />
              </Button>
              <Button
                size="medium"
                style={{ 
                    display: "flex",
                    flexDirection: "row",
                    padding: "3px",
                    marginRight: "auto"
                }}
              >
                <img
                  src="./Assets/icons/share.png"
                  style={{ marginRight: "10px", paddingLeft: "5px", height: "15px" }}
                />
                <span
                  style={{
                    fontWeight: 700,
                    color: "grey",
                  }}
                  onClick={this.handleCopy}
                >
                  Share
                </span>
              </Button>
              <div style={{display: "flex", flexDirection: "row"}}>
    <input style={{
            margin: "10px",
            width: "200px",
            height: "30px",
            fontSize: "18px",
            border: "1px solid lightgray"
        }}
        onChange={(e) => {this.handleSearch(e.target.value)}}
        placeholder="Filter by title..."/>
        <img src="./Assets/icons/search.svg" style={{transform: "translateX(-35px)"}} />
    </div>
    <Button size="medium" style={{display: "flex", flexDirection: "row", marginRight: "20px"}}>
        <img src="./Assets/icons/bell.svg" style={{marginRight: "10px"}} />
        <span style={{
            fontWeight: 700,
            color: "indigo"
            }}>Followed</span>
        <img style={{marginLeft: "15px"}} src="./Assets/icons/arrow-down.svg" />
    </Button>
            </div>
            {
                this.state.isMosaic ?
                <MosaicView filter={this.state.searchParam} reverse={this.state.reverseSort} />
                : <ListView filter={this.state.searchParam} reverse={this.state.reverseSort} />
            }
            {
                this.state.isFilerModalOpen ? 
                <div style={{
                    position: "absolute",
                    width: "800px",
                    height: "180px",
                    zIndex: 100,
                    top: this.state.isFullscreen ? "100px" : "170px",
                    left: this.state.isFullscreen ? "20px" : "360px",
                    backgroundColor: "white",
                    border: "1px solid lightgrey",
                    borderRadius: "5px",
                    padding: "20px"
                }}>
                    <span style={{fontSize: "14px", color: "darkgrey", fontWeight: 500}}>Rows are filtered by the following conditions starting from the top.</span>
                    <FilterRow cond1="Where" cond2="Company" cond3="Contains" input1Value="Type..." cond4="" inputValue2="" isThird={false}/>
                    <FilterRow cond1="Where" cond2="Status" cond3="Is" input1Value="Type..." cond4="In" inputValue2="Entity..." isThird={true}/>
                    <FilterRow cond1="And" cond2="Status" cond3="Ends Before" input1Value="Date" cond4="In" inputValue2="Entity..." isThird={true}/>
                    <div style={{display: "flex", flexDirection: "row", marginTop: "20px"}}>
                        <img src="./Assets/icons/plus.png" style={{width: "20px", marginRight: "10px"}} />
                        <div style={{color: "darkblue", marginRight: "20px"}}>
                            <span style={{fontWeight: 700}}>Add filter</span>
                        </div>
                        <div style={{color: "darkblue", marginRight: "10px"}}>
                            <span style={{fontWeight: 700}}>choose property</span>
                        </div>
                        <img src="./Assets/icons/arrow-down.svg" style={{width: "10px"}} />
                    </div>
                </div>
                : null
            }
          </div>
          
        );
    }
}

export default Entities;