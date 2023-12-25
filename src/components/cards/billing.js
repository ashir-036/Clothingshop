import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/esm/Button";

function BillingCard() {
  return (
    <Card style={{ width: "45rem" }}>
      <Card.Body>
        <Card.Title>Billing Settings</Card.Title>
        <hr />
        <Form>
          <Form.Group>
            <Form.Label class="d-block">Payment Method</Form.Label>
            <p class="text-muted font-size-sm">
              You have not added a payment method
            </p>
          </Form.Group>
          <Button variant="info" style={{ marginRight: "5px" }}>
            Add Payment Method
          </Button>
          <Form.Group>
            <Form.Label class="d-block">Payment History</Form.Label>
            <div class="border border-gray-500 bg-gray-200 p-3 text-center font-size-sm">
              You have not made any payment.
            </div>
          </Form.Group>
        </Form>
      </Card.Body>
    </Card>
  );
}

export default BillingCard;
