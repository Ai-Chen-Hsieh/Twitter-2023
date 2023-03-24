import { Header } from "components";

/**
 * [Demo] 共用 Component
 * @returns 
 */
const DemoPage = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          <Header text="首頁"/>
        </div>
      </div>
    </div>
  );
}

export default DemoPage;