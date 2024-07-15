import BlackButtonLink from "../BlackButtonLink";
import Body from "../Body";

export default function AdminDashBoard() {
  return (
    <Body>
      <div className="py-5">
        <BlackButtonLink label="New" to="/newdialog" />
      </div>
    </Body>
  );
}
