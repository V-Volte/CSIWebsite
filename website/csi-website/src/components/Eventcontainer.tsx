import { Url } from "url";
import Image from "next/image";
import React, { Component, ReactNode } from "react";
import styles from "../styles/Eventcontainer.module.scss";
import ReactDOM from "react-dom";
import { useEffect, useState } from "react";

const EventContainer = (props: any) => {
    const [size, setSize] = useState("0");
    const [width, setWidth] = useState("0");

    useEffect(() => {
        setSize("60vh");
    }, []);
    useEffect(() => {
        setWidth(`100%`);
    }, []);

    return (
        <>
            <div className={styles.Eventcontainer}>
                <div className={styles.EventcontainerImage}>
                    {/* Image object */}
                    <div
                        id="hvsc"
                        style={{
                            position: "relative",
                            height: size,
                            width: width,
                            borderRadius: "inherit",
                        }}
                    >
                        <Image
                            src={props.eventMainImage ?? "next.svg"}
                            alt={props.eventName}
                            className={styles.Image}
                            fill={true}
                        />
                    </div>
                </div>
                <div className={styles.EventcontainerInfo}>
                    <div>
                        <h1>{props.eventName}</h1>
                        <h2>{props.eventDescription}</h2>

                        <h4 className="date">
                            {props.eventDate.toDateString()}
                        </h4>
                    </div>

                    <div>
                        <h3>Rounds</h3>
                        <ul>
                            {props.eventRounds.map((round: string) => {
                                return <li key={round}>{round}</li>;
                            })}
                        </ul>
                    </div>

                    <div>
                        <RegisterButton></RegisterButton>
                    </div>
                </div>
            </div>
        </>
    );
};

export const RegisterButton = () => (
    <button className={styles.RegisterButton}>Register</button>
);

export default EventContainer;

/**
 * @param {string} eventName
 * @param {Date} eventDate
 * @param {string} eventDescription
 * @param {string[]} eventRounds
 * @param {Url | null} eventRegistrationLink
 * @param {Url | null} eventLink
 * @param {string | null} eventMainImage
 * @param {ImageBitmap[] | string[] | null} eventImages
 */

export class EventcontainerClass extends React.Component<{
    eventName: string;
    eventDate: Date;
    eventDescription: string;
    eventRounds: string[];
    eventRegistrationLink: Url | null;
    eventLink: Url | null;
    eventMainImage: string | null;
    eventImages: ImageBitmap[] | string[] | null;
}> {
    constructor(
        props: any /*{eventName: string, eventDate: Date, eventDescription: string, eventRounds: string[], eventRegistrationLink: Url | null, eventLink: Url | null, eventMainImage: string | null, eventImages: ImageBitmap[] | string[] | null}*/
    ) {
        super(props);
        this.eventName = props.eventName;
        this.eventDate = props.eventDate;
        this.eventDescription = props.eventDescription;
        this.eventRounds = props.eventRounds;
        this.eventRegistrationLink = props.eventRegistrationLink;
        this.eventLink = props.eventLink;
        this.eventMainImage = props.eventMainImage;
        this.eventImages = props.eventImages;
    }
    render(): ReactNode {
        return (
            <>
                <div className="event-container">
                    <div className="event-container__image">
                        {/* Image object */}
                        <Image
                            src={this.eventMainImage ?? "next.svg"}
                            alt={this.eventName}
                            width={1600}
                            height={900}
                        ></Image>
                    </div>
                    <div className="event-container__info">
                        <h2>{this.eventName}</h2>
                        <p>{this.eventDate.toString()}</p>
                        <p>{this.eventDescription}</p>
                        <ul>
                            {this.eventRounds.map((round) => {
                                return <li>{round}</li>;
                            })}
                        </ul>
                    </div>
                </div>
            </>
        );
    }

    eventName: string;
    eventDate: Date;
    eventDescription: string;
    eventRounds: string[];
    eventRegistrationLink!: Url | null;
    eventLink!: Url | null;
    eventMainImage!: string | null;
    eventImages!: ImageBitmap[] | string[] | null;
}
