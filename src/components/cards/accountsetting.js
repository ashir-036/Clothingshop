import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/esm/Button";

function AccountSettingCard() {
  return (
    <Card style={{ width: "45rem" }}>
      <Card.Body>
        <Card.Title>Account Settings</Card.Title>
        <hr />
        {/* <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle> */}
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Username</Form.Label>
            <Form.Control type="text" placeholder="Name" />
          </Form.Group>
          <hr />
          <Form.Group>
            <Form.Label class="d-block text-danger">Delete Account</Form.Label>
            <p class="text-muted font-size-sm">
              Once you delete your account, there is no going back. Please be
              certain.
            </p>
          </Form.Group>
          <Button variant="danger" style={{ marginRight: "5px" }}>
            Delete Account
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
}

export default AccountSettingCard;
