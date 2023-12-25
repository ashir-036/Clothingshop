import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/esm/Button";

function SecurityCard() {
  return (
    <Card style={{ width: "45rem" }}>
      <Card.Body>
        <Card.Title>Security Settings</Card.Title>
        <hr />
        {/* <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle> */}
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Change Password</Form.Label>
            <Form.Control type="password" placeholder="Enter old password" />
            <Form.Control type="password" placeholder="New password" />
            <Form.Control type="password" placeholder="Confirm new password" />
          </Form.Group>
          <hr />
          <Form.Group>
            <Form.Label class="d-block">Two Factor Authentication</Form.Label>
            <Button variant="info" style={{ marginRight: "5px" }}>
              Enable Two-Author Authentication
            </Button>
            <p class="text-muted font-size-sm">
              Two-factor authentication adds an additional layer of security to
              your account by requiring more than just a password to log in.
            </p>
          </Form.Group>
          <hr />
          <Form.Group>
            <Form.Label class="d-block">Sessions</Form.Label>
            <p class="text-muted font-size-sm">
              This is a list of devices that have logged into your account.
              Revoke any sessions that you do not recognize.
            </p>
          </Form.Group>
          <Form.Group className="border border-gray-500 bg-gray-200 p-3">
            <Form.Label class="d-block">
              San Francisco City 190.24.335.55
            </Form.Label>
            <div class=" font-size-sm">
              Your current session seen in United States
            </div>
            <Form.Label class="d-block">More info</Form.Label>
          </Form.Group>
        </Form>
      </Card.Body>
    </Card>
  );
}

export default SecurityCard;
