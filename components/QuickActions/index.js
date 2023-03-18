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
  countOfLightsTurnedOn,
}) {
  return (
    <StyledQuickActions>
      <Button
        type="button"
        onClick={onToggleAllLightsOff}
        disabled={countOfLightsTurnedOn === 0 ? true : false}
      >
        Turn all lights off
      </Button>
      <Button
        type="button"
        onClick={onToggleAllLightsOn}
        disabled={countOfLightsTurnedOn === 8 ? true : false}
      >
        Turn all lights on
      </Button>
    </StyledQuickActions>
  );
}
