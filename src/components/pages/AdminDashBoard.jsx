import BlackButtonLink from "../BlackButtonLink";

export default function AdminDashBoard() {
  return (
    <>
      <div className="py-5">
        <BlackButtonLink label="New" to="/newdialog" />
      </div>
    </>
  );
}
