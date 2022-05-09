import React from "react";
import styled from "styled-components/macro";

import { WEIGHTS, QUERIES } from "../../constants";

import Breadcrumbs from "../Breadcrumbs";
import Select from "../Select";
import Spacer from "../Spacer";
import ShoeSidebar from "../ShoeSidebar";
import ShoeGrid from "../ShoeGrid";

const ShoeBreadcrumbs = () => {
  return (
    <Breadcrumbs>
      <Breadcrumbs.Crumb href="/">Home</Breadcrumbs.Crumb>
      <Breadcrumbs.Crumb href="/sale">Sale</Breadcrumbs.Crumb>
      <Breadcrumbs.Crumb href="/sale/shoes">Shoes</Breadcrumbs.Crumb>
    </Breadcrumbs>
  );
};

const ShoeIndex = ({ sortId, setSortId }) => {
  return (
    <Wrapper>
      <MainColumn>
        <Header>
          <div>
            <MobileBreadcrumbs>
              <ShoeBreadcrumbs />
            </MobileBreadcrumbs>
            <Title>Running</Title>
          </div>
          <SelectWrapper>
            <Select
              label="Sort"
              value={sortId}
              onChange={(ev) => setSortId(ev.target.value)}
            >
              <option value="newest">Newest Releases</option>
              <option value="price">Price</option>
            </Select>
          </SelectWrapper>
        </Header>
        <Spacer size={34} />
        <ShoeGrid />
      </MainColumn>
      <LeftColumn>
        <DesktopBreadcrumbs>
          <ShoeBreadcrumbs />
        </DesktopBreadcrumbs>
        <Spacer size={42} />
        <ShoeSidebar />
      </LeftColumn>
    </Wrapper>
  );
};

const SelectWrapper = styled.div`
  @media ${QUERIES.phoneAndSmaller} {
    display: none;
  }
`;

const DesktopBreadcrumbs = styled.div`
  @media ${QUERIES.tabletAndSmaller} {
    display: none;
  }
`;
const MobileBreadcrumbs = styled.div`
  display: none;
  @media ${QUERIES.tabletAndSmaller} {
    display: revert;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
  gap: 32px;
  align-items: baseline;
`;

const LeftColumn = styled.div`
  flex-basis: 200px;

  @media ${QUERIES.tabletAndSmaller} {
    display: none;
  }
`;

const MainColumn = styled.div`
  flex: 1;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: baseline;

  @media ${QUERIES.tabletAndSmaller} {
    align-items: flex-end;
  }
`;

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: ${WEIGHTS.medium};
`;

export default ShoeIndex;
