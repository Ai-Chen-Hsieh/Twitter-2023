import styled from "styled-components";

const StyledColorPanel = styled.div`
  padding: 24px 32px;
  border-radius: 30px;
  &.big {
    min-height: 200px;
  }
`;

/**
 * [Demo] Style guide
 * 參見：https://www.figma.com/file/HUYe5neomwAMyHP8yXoa6w/Capstone%3A-Twitter_2022?node-id=34210-2436&t=har9QFzPkRy6Q7ox-0
 * @returns 
 */
const StyleGuidePage = () => {
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-6 mb-3">
          <h1 className="mb-5">h1. Bold / 68px</h1>
          <h2 className="mb-5">h2. Bold / 42px</h2>
          <h3 className="mb-5">h3. Medium / 28px</h3>
          <h4 className="mb-5">h4. Medium / 24px</h4>
          <h5 className="mb-5">h5. Medium / 18px</h5>
        </div>
        <div className="col-6 mb-3">
          <p>基本文字大小：16px</p>
          <p className="fw-bold mb-3">基本文字粗體：16px</p>

          <p className="text-fz-secondary">次要文字大小：14px</p>
          <p className="text-fz-secondary fw-bold mb-3">次要文字粗體：14px</p>

          <small>最小文字：12px</small><br />
          <small className="fw-bold mb-5">最小文字粗體：12px</small>
        </div>
        <div className="col-12">
          <h2 className="mb-3">主色</h2>
          <div className="row">
            <div className="col-2 px-2 py-2">
              <StyledColorPanel className="big bgc-main">
                <h4 className="color-dark-0 mb-2">main</h4>
                <p className="color-dark-0">#FF6600</p>
              </StyledColorPanel>
            </div>
            <div className="col-2 px-2 py-2">
              <StyledColorPanel className="big bgc-primary">
                <h4 className="color-dark-0 mb-2">primary</h4>
                <p className="color-dark-0">#0062ff</p>
              </StyledColorPanel>
            </div>
            <div className="col-2 px-2 py-2">
              <StyledColorPanel className="big bgc-secondary">
                <h4 className="color-dark-0 mb-2">secondary</h4>
                <p className="color-dark-0">#6C757D</p>
              </StyledColorPanel>
            </div>
            <div className="col-2 px-2 py-2">
              <StyledColorPanel className="big bgc-success">
                <h4 className="color-dark-0 mb-2">success</h4>
                <p className="color-dark-0">#3DD598</p>
              </StyledColorPanel>
            </div>
            <div className="col-2 px-2 py-2">
              <StyledColorPanel className="big bgc-warning">
                <h4 className="color-dark-0 mb-2">warning</h4>
                <p className="color-dark-0">#FFC542</p>
              </StyledColorPanel>
            </div>
            <div className="col-2 px-2 py-2">
              <StyledColorPanel className="big bgc-error">
                <h4 className="color-dark-0 mb-2">error</h4>
                <p className="color-dark-0">#FC5A5A</p>
              </StyledColorPanel>
            </div>
          </div>

          <h2 className="mt-5 mb-3">輔助色</h2>
          <div className="row">
            <div className="col-2 px-2 py-2">
              <StyledColorPanel className="bgc-secondary-orange">
                <h5 className="color-dark-0 mb-2">secondary-<br />orange</h5>
                <p className="color-dark-0">#FF974A</p>
              </StyledColorPanel>
            </div>
            <div className="col-2 px-2 py-2">
              <StyledColorPanel className="bgc-secondary-blue">
                <h5 className="color-dark-0 mb-2">secondary-<br />blue</h5>
                <p className="color-dark-0">#50B5FF</p>
              </StyledColorPanel>
            </div>
            <div className="col-2 px-2 py-2">
              <StyledColorPanel className="bgc-secondary-green">
                <h5 className="color-dark-0 mb-2">secondary-<br />green</h5>
                <p className="color-dark-0">#82C43C</p>
              </StyledColorPanel>
            </div>
            <div className="col-2 px-2 py-2">
              <StyledColorPanel className="bgc-secondary-purple">
                <h5 className="color-dark-0 mb-2">secondary-<br />purple</h5>
                <p className="color-dark-0">#A461D8</p>
              </StyledColorPanel>
            </div>
            <div className="col-2 px-2 py-2">
              <StyledColorPanel className="bgc-secondary-pink">
                <h5 className="color-dark-0 mb-2">secondary-<br />pink</h5>
                <p className="color-dark-0">#FF9AD5</p>
              </StyledColorPanel>
            </div>
          </div>

          <h2 className="mt-5 mb-3">灰階色</h2>
          <div className="row">
            <div className="col-2 px-2 py-2">
              <StyledColorPanel className="bgc-dark-100">
                <h5 className="color-dark-0 mb-2">dark-100</h5>
                <p className="color-dark-0">#171725</p>
              </StyledColorPanel>
            </div>
            <div className="col-2 px-2 py-2">
              <StyledColorPanel className="bgc-dark-90">
                <h5 className="color-dark-0 mb-2">dark-90</h5>
                <p className="color-dark-0">#44444F</p>
              </StyledColorPanel>
            </div>
            <div className="col-2 px-2 py-2">
              <StyledColorPanel className="bgc-dark-80">
                <h5 className="color-dark-0 mb-2">dark-80</h5>
                <p className="color-dark-0">#696974</p>
              </StyledColorPanel>
            </div>
            <div className="col-2 px-2 py-2">
              <StyledColorPanel className="bgc-dark-70">
                <h5 className="color-dark-0 mb-2">dark-70</h5>
                <p className="color-dark-0">#92929D</p>
              </StyledColorPanel>
            </div>
            <div className="col-2 px-2 py-2">
              <StyledColorPanel className="bgc-dark-60">
                <h5 className="color-dark-0 mb-2">dark-60</h5>
                <p className="color-dark-0">#B5B5BE</p>
              </StyledColorPanel>
            </div>
            <div className="col-2 px-2 py-2">
              <StyledColorPanel className="bgc-dark-50">
                <h5 className="color-dark-70 mb-2">dark-50</h5>
                <p className="color-dark-70">#D5D5DC</p>
              </StyledColorPanel>
            </div>
            <div className="col-2 px-2 py-2">
              <StyledColorPanel className="bgc-dark-40">
                <h5 className="color-dark-70 mb-2">dark-40</h5>
                <p className="color-dark-70">#E2E2EA</p>
              </StyledColorPanel>
            </div>
            <div className="col-2 px-2 py-2">
              <StyledColorPanel className="bgc-dark-30">
                <h5 className="color-dark-70 mb-2">dark-30</h5>
                <p className="color-dark-70">#F1F1F5</p>
              </StyledColorPanel>
            </div>
            <div className="col-2 px-2 py-2">
              <StyledColorPanel className="bgc-dark-20">
                <h5 className="color-dark-70 mb-2">dark-20</h5>
                <p className="color-dark-70">#FAFAFB</p>
              </StyledColorPanel>
            </div>
            <div className="col-2 px-2 py-2">
              <StyledColorPanel className="bgc-dark-0">
                <h5 className="color-dark-70 mb-2">dark-0</h5>
                <p className="color-dark-70">#FFFFFF</p>
              </StyledColorPanel>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StyleGuidePage;