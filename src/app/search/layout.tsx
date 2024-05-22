const Layout = (props: { children: React.ReactNode }) => {
  return (
    <div className="display:flex justify-center">
      <div className="mx-[8vh] my-[10px]">{props.children}</div>
    </div>
  );
};
export default Layout;
