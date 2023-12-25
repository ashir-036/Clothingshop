import React, { useState } from "react";
import CloseButton from "react-bootstrap/CloseButton";
import AccountSettingCard from "../../components/cards/accountsetting";
import BillingCard from "../../components/cards/billing";
import ProfileCard from "../../components/cards/profile";
import SecurityCard from "../../components/cards/security";
import NotificationCard from "../../components/cards/notification";

export function Setting() {
  const [selectedCard, setSelectedCard] = useState("profile");

  const showCard = (cardName) => {
    setSelectedCard(cardName);
  };

  const renderCard = () => {
    switch (selectedCard) {
      case "profile":
        return <ProfileCard />;
      case "account":
        return <AccountSettingCard />;
      case "billing":
        return <BillingCard />;
      case "security":
        return <SecurityCard />;
      case "notification":
        return <NotificationCard />;
      default:
        return null;
    }
  };

  const renderNavLinks = () => {
    return (
      <nav className="nav flex-column nav-pills nav-gap-y-1">
        <a
          href="#profile"
          onClick={() => showCard("profile")}
          className="nav-item nav-link has-icon nav-link-faded"
        >
          Profile Information
        </a>
        <a
          href="#account"
          onClick={() => showCard("account")}
          className="nav-item nav-link has-icon nav-link-faded"
        >
          Account Settings
        </a>
        <a
          href="#security"
          onClick={() => showCard("security")}
          className="nav-item nav-link has-icon nav-link-faded"
        >
          Security
        </a>
        <a
          href="#notification"
          onClick={() => showCard("notification")}
          className="nav-item nav-link has-icon nav-link-faded"
        >
          Notification
        </a>
        <a
          href="#billing"
          onClick={() => showCard("billing")}
          className="nav-item nav-link has-icon nav-link-faded"
        >
          Billing
        </a>
      </nav>
    );
  };

  return (
    <div className="container">
      <div className="row gutters-sm">
        <div className="col-md-4 d-none d-md-block">
          <div className="card">
            <div className="card-body">{renderNavLinks()}</div>
          </div>
        </div>
        <div className="col-md-8">{selectedCard && renderCard()}</div>
      </div>
    </div>
  );
}

export default Setting;
