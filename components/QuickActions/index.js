import styled from "styled-components";
import Button from "../Button";

const StyledQuickActions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export default function QuickActions({
  onToggleAllLightsOn,
  onToggleAllLightsOff,
}) {
  return (
    <StyledQuickActions>
      <Button type="button" onClick={onToggleAllLightsOff}>
        Turn all lights off
      </Button>
      <Button type="button" onClick={onToggleAllLightsOn}>
        Turn all lights on
      </Button>
    </StyledQuickActions>
  );
}
