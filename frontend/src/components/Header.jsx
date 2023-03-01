const HeaderComponent = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="box-header">
          <div>
            <img src="/assets/images/logo.png" alt="" className="logo" />
          </div>
          <button
            type="button"
            className="btn btn-primary"
            data-toggle="modal"
            data-target="#exampleModal"
          >
            Thêm truyện
          </button>
          <div className="box-user">
            <div className="box-user-content">
              <div>Handicrafted</div>
              <div>Jim HLS</div>
            </div>
            <div>
              <img src="/assets/images/user.png" alt="" className="user" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
export default HeaderComponent;
