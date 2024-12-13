import React from 'react'
import { Button } from "react-bootstrap";
import { bool, number, string } from 'prop-types';

const propTypes = {
    userFirstName: string.isRequired,
    isSubscribed: bool,
    trialDaysLeft: number,
    discountCode: string,
    discountPercent: number,
}

const defaultProps = {
    isSubscribed: false,
    trialDaysLeft: null,
    discountCode: "HUMAN20",
    discountPercent: 0,
}

const WelcomeNotification = ({ userFirstName, isSubscribed, trialDaysLeft, discountCode, discountPercent }) => {
    let upgradeMessage = `Save ${discountPercent}% Now`;
    let welcomeMessage = "";
    let discountMessage = "";

    if (isSubscribed) {
        welcomeMessage = `Hey ${userFirstName}, make the most of your subscription`;
        if (!!discountCode) {
            discountMessage = `Elevate your results with a professional human review—get ${discountPercent}% off with code ${discountCode}!`;
        }
    } else if (trialDaysLeft !== null) {
        // For users on trial even in less than 24hrs remaining
        const trialDaysMessage = trialDaysLeft > 1 ? `${trialDaysLeft} days`: `${trialDaysLeft} day`;
        welcomeMessage = `Hi ${userFirstName}, just ${trialDaysMessage} left in your trial`;
        if (!!discountCode) {
            discountMessage = `Use code ${discountCode} for ${discountPercent}% off your next review, try before your trial ends!`;
        }
    } else {
        // For non-active subscriber and not on trial
        welcomeMessage = `Hey ${userFirstName}, let's unlock more features for you!`;
        discountMessage = "Upgrade to a subscription to unlock all features and save more on transcriptions!";
        upgradeMessage = "Upgrade Now";
    }

    return (
        <div className="col-md-12 d-flex">
            <div className="col-md-8">
                <div className="d-flex welcome-bg">
                    <div className="float-left text-left">
                        <p style={{"size": "18px", "fontWeight": "700", "lineHeight": "36px"}}>{welcomeMessage}</p>
                        <p style={{"size": "14px", "fontWeight": "400", "lineHeight": "36px", "marginTop": "-25px"}}>{discountMessage}</p>
                    </div>
                    <div className="">
                        { !!discountCode && <Button className="button-link background-white text-purple">{upgradeMessage}</Button> }
                    </div>
                </div>
            </div>
            <div className="col-md-4">
                <div className="vertical-center d-flex" style={{"height": "100%"}}>
                    <Button className="button-link border-purple background-white text-purple align-items-center justify-content-center">Schedule Sessions</Button>
                    <Button className="button-link border-purple background-white text-purple" >
                        <span className="pre-dot">&#x25CF;</span>
                        Go Live
                    </Button>
                    <Button className="button-link border-purple background-purple text-white">Upload Files</Button>
                </div>
            </div>
        </div>
    )
}

WelcomeNotification.propTypes = propTypes
WelcomeNotification.defaultProps = defaultProps

export default WelcomeNotification;
