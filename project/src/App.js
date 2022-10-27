import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "./index.css"

function BasicExample() {
  return (
    <Form>
      <h3>Welcome to our site</h3>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button className="button w-100" variant="primary" type="submit">
        Log in
      </Button>
    </Form>
  );
}

export default BasicExample;
  


