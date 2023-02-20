import { Component } from "react";
import Eventcontainer from "./Eventcontainer";

export default class Bodycontainer extends Component {
    render() {
        return (
            <>
                <Eventcontainer
                    eventName="Test Event"
                    eventDate={new Date()}
                    eventDescription="Technical event"
                    eventRounds={["Round 1", "Round 2", "Round 3"]}
                    eventRegistrationLink={null}
                    eventLink={null}
                    eventMainImage={"/fleurs.jpg"}
                    eventImages={null}
                ></Eventcontainer>
            </>
        );
    }
}
