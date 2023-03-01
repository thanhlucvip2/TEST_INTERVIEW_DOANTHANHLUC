import HeaderComponent from "./Header";
import FooterComponent from "./Footer";

interface Props {
  children: React.ReactNode;
}
function Layout(props: Props) {
  return (
    <div className="box-layout">
      <HeaderComponent />
      <div className="box-layout-children">{props.children}</div>
      <FooterComponent />
    </div>
  );
}

export default Layout;
