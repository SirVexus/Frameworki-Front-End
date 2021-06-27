import Button from "@material-ui/core/Button";
import React from "react";
import { useSelector } from "react-redux";
import { Photo } from "../../Store/Models/photo";
import { User } from "../../Store/Models/User";

interface IPropsContact {
  email: string;
  phone: string;
}
interface IStateContact {
  email: string;
  phone: string;
  isEdited: boolean;
}

class ContactDetails extends React.Component<IPropsContact, IStateContact> {
  constructor(props: IPropsContact) {
    super(props);
    this.state = {
      email: props.email,
      phone: props.phone,
      isEdited: false,
    };
    this.handleEditChange = this.handleEditChange.bind(this);
    this.handleEmailInput = this.handleEmailInput.bind(this);
    this.handlePhoneInput = this.handlePhoneInput.bind(this);
  }

  handleEditChange() {
    this.setState({
      isEdited: !this.state.isEdited,
    });
  }
  handleEmailInput(input: string) {
    this.setState({
      email: input,
    });
  }
  handlePhoneInput(input: string) {
    this.setState({
      phone: input,
    });
  }

  render() {
    return (
      <div style={{ width: "50%" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            marginBottom: "20px",
          }}
        >
          <div style={{ marginRight: "auto" }}></div>
          <Button onClick={this.handleEditChange}>
            <img src="./Assets/icons/pencil.png" style={{ width: "20px" }} />
          </Button>
        </div>
        <div
          style={{ display: "flex", flexDirection: "row", marginBottom: "5px" }}
        >
          <div style={{ marginRight: "auto" }}></div>
          {this.state.isEdited ? (
            <input
              value={this.state.email}
              style={{ width: "150px" }}
              onChange={(e) => this.handleEmailInput(e.target.value)}
            />
          ) : (
            <div style={{ marginRight: "20px" }}>{this.state.email}</div>
          )}
        </div>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div style={{ marginRight: "auto" }}></div>
          {this.state.isEdited ? (
            <input
              value={this.state.phone}
              style={{ width: "150px" }}
              onChange={(e) => this.handlePhoneInput(e.target.value)}
            />
          ) : (
            <div style={{ marginRight: "20px" }}>{this.state.phone}</div>
          )}
        </div>
      </div>
    );
  }
}

interface IPropsExpertise {
  expertise: string;
  specialities: string;
  admission: string;
  counties: string;
}
interface IStateExpertise {
  expertise: string;
  specialities: string;
  admission: string;
  counties: string;
  isEdited: boolean;
}

class ExpertiseDetails extends React.Component<
  IPropsExpertise,
  IStateExpertise
> {
  constructor(props: IPropsExpertise) {
    super(props);
    this.state = {
      expertise: props.expertise,
      specialities: props.specialities,
      admission: props.admission,
      counties: props.counties,
      isEdited: false,
    };
    this.handleExpertiseChange = this.handleExpertiseChange.bind(this);
    this.handleSpecialitiesChange = this.handleSpecialitiesChange.bind(this);
    this.handleAdmissionChange = this.handleAdmissionChange.bind(this);
    this.handleCountiesChange = this.handleCountiesChange.bind(this);
    this.handleEditChange = this.handleEditChange.bind(this);
  }

  handleExpertiseChange(input: string) {
    this.setState({
      expertise: input,
    });
  }
  handleSpecialitiesChange(input: string) {
    this.setState({
      specialities: input,
    });
  }
  handleAdmissionChange(input: string) {
    this.setState({
      admission: input,
    });
  }
  handleCountiesChange(input: string) {
    this.setState({
      counties: input,
    });
  }
  handleEditChange() {
    this.setState({
      isEdited: !this.state.isEdited,
    });
  }

  titleStyle = {
    fontSize: "16px",
    fontWeight: 500,
    color: "darkgray",
    marginRight: "auto",
  };

  render() {
    return (
      <div style={{ borderBottom: "1px solid lightgrey" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            margin: "10px",
            marginBottom: "0",
          }}
        >
          <div style={this.titleStyle}>Expertise</div>
          <Button onClick={this.handleEditChange}>
            <img src="./Assets/icons/pencil.png" style={{ width: "20px" }} />
          </Button>
        </div>
        <div style={{ display: "flex", flexDirection: "row" }}>
          {this.state.isEdited ? (
            <input
              value={this.state.expertise}
              style={{ width: "150px" }}
              onChange={(e) => this.handleExpertiseChange(e.target.value)}
            />
          ) : (
            this.state.expertise.split(",").map((el: string) => (
              <div
                style={{
                  padding: "5px",
                  margin: "10px",
                  backgroundColor: "rgb(218 240 247)",
                  fontSize: "16px",
                  fontWeight: 500,
                  color: "#53b3ea",
                  borderRadius: "5px",
                }}
              >
                {el}
              </div>
            ))
          )}
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            margin: "10px",
            marginBottom: "0",
          }}
        >
          <div style={this.titleStyle}>Specialities</div>
        </div>
        <div style={{ display: "flex", flexDirection: "row" }}>
          {this.state.isEdited ? (
            <input
              value={this.state.specialities}
              style={{ width: "150px" }}
              onChange={(e) => this.handleSpecialitiesChange(e.target.value)}
            />
          ) : (
            this.state.specialities.split(",").map((el: string) => (
              <div
                style={{
                  padding: "5px",
                  margin: "10px",
                  backgroundColor: "rgb(218 240 247)",
                  fontSize: "16px",
                  fontWeight: 500,
                  color: "#53b3ea",
                  borderRadius: "5px",
                }}
              >
                {el}
              </div>
            ))
          )}
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            margin: "10px",
            marginBottom: "0",
          }}
        >
          <div style={this.titleStyle}>Admission to practice law</div>
        </div>
        <div style={{ display: "flex", flexDirection: "row" }}>
          {this.state.isEdited ? (
            <input
              value={this.state.admission}
              style={{ width: "150px" }}
              onChange={(e) => this.handleAdmissionChange(e.target.value)}
            />
          ) : (
            this.state.admission.split(",").map((el: string) => (
              <div
                style={{
                  padding: "5px",
                  margin: "10px",
                  backgroundColor: "rgb(218 240 247)",
                  fontSize: "16px",
                  fontWeight: 500,
                  color: "#53b3ea",
                  borderRadius: "5px",
                }}
              >
                {el}
              </div>
            ))
          )}
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            margin: "10px",
            marginBottom: "0",
          }}
        >
          <div style={this.titleStyle}>Countries</div>
        </div>
        <div style={{ display: "flex", flexDirection: "row" }}>
          {this.state.isEdited ? (
            <input
              value={this.state.counties}
              style={{ width: "150px" }}
              onChange={(e) => this.handleCountiesChange(e.target.value)}
            />
          ) : (
            this.state.counties.split(",").map((el: string) => (
              <div
                style={{
                  padding: "5px",
                  margin: "10px",
                  backgroundColor: "rgb(218 240 247)",
                  fontSize: "16px",
                  fontWeight: 500,
                  color: "#53b3ea",
                  borderRadius: "5px",
                }}
              >
                {el}
              </div>
            ))
          )}
        </div>
      </div>
    );
  }
}

function AdministrationPanel(): JSX.Element {
    const tableTitleStyle = {
        marginLeft: "10px",
        fontWeight: 700
      }
  const user: User = useSelector((state: any) => state?.users).find(
    (u: User) => u.id === 1
  );
  const photo: Photo = useSelector((state: any) => state?.photos).find(
    (p: Photo) => p.id === 1
  );
  return (
    <div
      style={{
        width: "600px",
        backgroundColor: "white",
        border: "1px solid lightgrey",
        borderRadius: "5px",
        margin: "10px",
        paddingBottom: "20px"
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          marginLeft: "80px",
          cursor: "pointer",
        }}
      >
        <img src="./Assets/icons/comments.svg" style={{ padding: "10px" }} />
        <div
          style={{
            fontSize: "18px",
            fontWeight: 500,
            color: "grey",
            paddingTop: "7px",
          }}
        >
          Message
        </div>
        <img src="./Assets/icons/comments.svg" style={{ padding: "10px" }} />
        <div
          style={{
            fontSize: "18px",
            fontWeight: 500,
            color: "grey",
            paddingTop: "7px",
          }}
        >
          Create a request
        </div>
        <img src="./Assets/icons/comments.svg" style={{ padding: "10px" }} />
        <div
          style={{
            fontSize: "18px",
            fontWeight: 500,
            color: "grey",
            paddingTop: "7px",
          }}
        >
          Add to a cluster
        </div>
        <div
          style={{
            fontWeight: 700,
            fontSize: "26px",
            color: "black",
            marginLeft: "20px",
          }}
        >
          X
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          borderBottom: "1px solid lightgrey",
        }}
      >
        <div>
          <img
            src={photo?.thumbnailUrl}
            style={{
              padding: "20px 20px 20px 20px",
              borderRadius: "50%",
              width: "70px",
            }}
          />
          <div
            style={{
              paddingLeft: "20px",
              fontSize: "16px",
              color: "lightblue",
              cursor: "pointer",
            }}
          >
            See profile
          </div>
        </div>
        <div
          style={{
            fontSize: "16px",
            fontWeight: 500,
            color: "black",
            marginLeft: "20px",
            marginTop: "20px",
          }}
        >
          {user?.name}
          <br />
          {user?.address.street}
          <br />
          {user?.address.city}
          <br />
          Partner
        </div>
        <ContactDetails email={user?.email} phone={user?.phone} />
      </div>
      <ExpertiseDetails
        expertise="Mergers and acquisition"
        specialities="Cross border operation,Transaction over 500M€/$"
        admission="Paris bar association,Tunisian bar association"
        counties="Tunisia"
      />
      <div style={{padding: "10px", borderBottom: "1px solid lightgrey"}}>
        <div style={tableTitleStyle}>
          Panel informations
        </div>
        <div style={{fontSize: "16px", color: "darkgrey", fontWeight: 500, marginLeft: "10px", marginTop: "15px"}}>
            Hourly fee
        </div>
        <div style={{fontWeight: 400, fontSize: "16px", marginLeft: "15px", marginBottom: "10px"}}>
            610€/hour (Negotiated)
        </div>
        <div style={{fontSize: "16px", color: "darkgrey", fontWeight: 500, marginLeft: "10px", marginTop: "15px"}}>
            Terms & conditions
        </div>
        <div style={{fontWeight: 400, fontSize: "16px", marginLeft: "15px", marginBottom: "10px"}}>
            Monthly 10k€ retainer - see with Jeanny Smith
        </div>
        <div style={{width: "calc(100% - 20px)", backgroundColor: "rgb(238 238 245)", padding: "10px", marginBottom: "15px"}}>
          <img src="./Assets/icons/document.png" style={{
              width: "20px",
              marginRight: "5px",
              transform: "translateY(4px)"
              }} />Attachment_lorem-ipsum25425.jpg
        </div>
        <div style={{fontSize: "16px", color: "darkgrey", fontWeight: 500, marginLeft: "10px", marginTop: "15px"}}>
            Services & projects
        </div>
        <div style={{fontWeight: 400, fontSize: "16px", marginLeft: "15px", marginBottom: "10px"}}>
            Corporate M&A and international acquisitions
        </div>
        <div style={{fontWeight: 400, fontSize: "16px", marginLeft: "15px"}}>
            Internal correspondants
        </div>
        <div style={{
            display: "flex",
            flexDirection: "row",
            width: "calc(100% - 20px)",
            padding: "10px",
            marginBottom: "2px",
            backgroundColor: "rgb(238 238 245)"}}>
                <img src={photo?.thumbnailUrl} style={{width: "20px", borderRadius: "50%", marginRight: "3px"}} />
                <div style={{fontWeight: 500, fontSize: "16px", marginRight: "50px"}}>Firstname Lastname</div>
                <div style={{display: "flex", flexDirection: "row"}}>
                    <img src="./Assets/icons/comments.svg" style={{width: "20px", transform: "translateY(3px)"}} />
                    <div style={{fontSize: "16px", fontWeight: 500, marginLeft: "10px"}}>Message</div>
                </div>
                <div style={{display: "flex", flexDirection: "row", marginLeft: "50px"}}>
                    <img src="./Assets/icons/people.svg" style={{width: "20px", transform: "translateY(3px)"}} />
                    <div style={{fontSize: "16px", fontWeight: 500, marginLeft: "10px"}}>Profile</div>
                </div>
        </div>
        <div style={{
            display: "flex",
            flexDirection: "row",
            width: "calc(100% - 20px)",
            padding: "10px",
            marginBottom: "20px",
            backgroundColor: "rgb(238 238 245)"}}>
                <img src={photo?.thumbnailUrl} style={{width: "20px", borderRadius: "50%", marginRight: "3px"}} />
                <div style={{fontWeight: 500, fontSize: "16px", marginRight: "50px"}}>Firstname Lastname</div>
                <div style={{display: "flex", flexDirection: "row"}}>
                    <img src="./Assets/icons/comments.svg" style={{width: "20px", transform: "translateY(3px)"}} />
                    <div style={{fontSize: "16px", fontWeight: 500, marginLeft: "10px"}}>Message</div>
                </div>
                <div style={{display: "flex", flexDirection: "row", marginLeft: "50px"}}>
                    <img src="./Assets/icons/people.svg" style={{width: "20px", transform: "translateY(3px)"}} />
                    <div style={{fontSize: "16px", fontWeight: 500, marginLeft: "10px"}}>Profile</div>
                </div>
        </div>
      </div>


      <div
        style={{
          borderBottom: "1px solid lightgrey",
          marginBottom: "20px",
          paddingBottom: "20px",
        }}
      >
        <div style={{fontSize: "16px",
            fontWeight:700,
            color: "black",
            marginLeft: "20px",
            marginBottom: "20px",
            marginTop: "10px"}}>Propsals</div>
        <table style={{ width: "100%", textAlign: "center" }}>
          <thead>
            <tr>
              <th style={{ borderBottom: "1px solid lightgrey" }}>Name</th>
              <th style={{ borderBottom: "1px solid lightgrey" }}>Entity</th>
              <th style={{ borderBottom: "1px solid lightgrey" }}>Location</th>
              <th style={{ borderBottom: "1px solid lightgrey" }}>Expertise</th>
              <th style={{ borderBottom: "1px solid lightgrey" }}>Date</th>
              <th style={{ borderBottom: "1px solid lightgrey" }}>Firm</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Operation Ti...</td>
              <td>Renault Co...</td>
              <td>France</td>
              <td>#Tax</td>
              <td>20/01/2018</td>
              <td>Racine</td>
            </tr>
            <tr>
              <td>Op. Prometh...</td>
              <td>Renault HQ</td>
              <td>USA</td>
              <td>#M&amp;A</td>
              <td>18/02/2019</td>
              <td>Clifford chance</td>
            </tr>
            <tr>
              <td>Op. Latandre</td>
              <td>Renault Br...</td>
              <td>Italia</td>
              <td>#Social</td>
              <td>19/02/2019</td>
              <td>SVZ</td>
            </tr>
          </tbody>
        </table>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div style={{ marginRight: "auto" }}></div>
          <div
            style={{
              marginRight: "20px",
              color: "#53b3ea",
              cursor: "pointer",
              fontWeight: 500,
            }}
          >
            See more proposals
          </div>
        </div>
      </div>
      <div
        style={{
          borderBottom: "1px solid lightgrey",
          marginBottom: "20px",
          paddingBottom: "20px",
        }}
      >
        <div style={tableTitleStyle}>Internal reviews</div>
        <table style={{ width: "100%", textAlign: "center" }}>
          <thead>
            <tr>
              <th style={{ borderBottom: "1px solid lightgrey" }}>Name</th>
              <th style={{ borderBottom: "1px solid lightgrey" }}>Entity</th>
              <th style={{ borderBottom: "1px solid lightgrey" }}>Location</th>
              <th style={{ borderBottom: "1px solid lightgrey" }}>Expertise</th>
              <th style={{ borderBottom: "1px solid lightgrey" }}>Date</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Operation Ti...</td>
              <td>Renalult Co...</td>
              <td>France</td>
              <td>#Tax</td>
              <td>20/01/2018</td>
            </tr>
            <tr>
              <td>Op. Prometh...</td>
              <td>Renault HQ</td>
              <td>USA</td>
              <td>#M&amp;A</td>
              <td>18/02/2019</td>
            </tr>
            <tr>
              <td>Op. Latandre</td>
              <td>Renault Br...</td>
              <td>Italia</td>
              <td>#Social</td>
              <td>18/02/2019</td>
            </tr>
          </tbody>
        </table>
        <div style={tableTitleStyle}>See more Reviews</div>
      </div>
      <div style={tableTitleStyle}>Amount of fees</div>
      <table style={{ width: "100%", textAlign: "center" }}>
        <thead>
          <tr>
            <th>Year</th>
            <th>Cost center</th>
            <th>Total amount</th>
            <th>Law firm</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>2019</td>
            <td>CS 153</td>
            <td>3 500€</td>
            <td>Cliffor change</td>
          </tr>
          <tr>
            <td>2018</td>
            <td>CS 153</td>
            <td>9 500€</td>
            <td>Linklaters</td>
          </tr>
          <tr>
            <td>2017</td>
            <td>CS 47</td>
            <td>10 500€</td>
            <td>Linklaters</td>
          </tr>
          <tr>
            <td></td>
            <td>CS 153</td>
            <td>18 500€</td>
            <td>Linklaters</td>
          </tr>
          <tr>
            <td></td>
            <td>CS 32</td>
            <td>15 500€</td>
            <td>Linklaters</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default AdministrationPanel;
