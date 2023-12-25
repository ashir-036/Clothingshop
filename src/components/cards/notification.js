import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/esm/Button";

function NotificationCard() {
  return (
    <Card style={{ width: "45rem" }}>
      <Card.Body>
        <Card.Title>Notification Settings</Card.Title>
        <hr />
        {/* <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle> */}
        <Form>
          <Form.Group>
            <Form.Label class="d-block ">Security Alerts</Form.Label>
            <p class="text-muted font-size-sm">
              Receive security alert notifications via email
            </p>
          </Form.Group>
          <Form.Group>
            <Form.Check
              type={"checkbox"}
              label={"Email each time a vulnerability is found"}
            />
          </Form.Group>
          <Form.Group>
            <Form.Check
              type={"checkbox"}
              label={"Email a digest summary of vulnerability"}
            />
          </Form.Group>
          <br />
          <Form.Group>
            <Form.Label>SMS Notifications</Form.Label>
            <Form.Check type={"checkbox"} label={"Comments"} />
            <Form.Check type={"checkbox"} label={"Updates from People"} />
            <Form.Check type={"checkbox"} label={"Reminder"} />
            <Form.Check type={"checkbox"} label={"Events"} />
            <Form.Check type={"checkbox"} label={"Page You follow"} />
          </Form.Group>
        </Form>
      </Card.Body>
    </Card>
  );
}

export default NotificationCard;
