import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/esm/Button";

function ProfileCard() {
  return (
    <Card style={{ width: "45rem" }}>
      <Card.Body>
        <Card.Title>Profile Information</Card.Title>
        <hr />
        {/* <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle> */}
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Full Name</Form.Label>
            <Form.Control type="text" placeholder="Name" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Your Bio</Form.Label>
            <Form.Control as="textarea" rows={2} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>URL</Form.Label>
            <Form.Control type="text" placeholder="URL" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Location</Form.Label>
            <Form.Control type="text" placeholder="Location" />
          </Form.Group>
          <Button variant="primary" style={{ marginRight: "5px" }}>
            Update
          </Button>
          <Button variant="secondary">Reset Changes</Button>
        </Form>
      </Card.Body>
    </Card>
  );
}

export default ProfileCard;
