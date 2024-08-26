import BlackButtonLink from "../../components/BlackButton";
import Body from "../../layout/Body";

export default function AdminDashBoard() {
  return (
    <Body>
      <div className="py-5">
        <BlackButtonLink label="New" to="/newdialog" />
      </div>
    </Body>
  );
}
