

import {Button} from "react-bootstrap";
import Card from "react-bootstrap/Card";
import InstagramHeart from "../instaheart/instaheart";

function CustomRectCard({ title, text, removeHandler, ind }) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img
        variant="top"
        src="https://tse2.mm.bing.net/th?id=OIP.TK3KgXiKVmSEy0RSn1MOmwHaFj&pid=Api&P=0&h=180"
      />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{text}</Card.Text>

        <InstagramHeart/>

        <Button variant="primary" onClick={() => removeHandler(ind)}>
          Remove
        </Button>
      </Card.Body>
    </Card>
  );
}

export default CustomRectCard;
