import deepFreeze from '../../utils/deepFeeze.js';

const VALID_CONSTANTS_CONFIG = deepFreeze({
  ATTEMPT_MIN_LIMIT_RANGE: 1,
  ATTEMPT_MAX_LIMIT_RANGE: 20,
  CAR_NAME_LIMIT_RANGE: 5,
  CONDITIONS_FOR_MOVING_FORWARD: 4,
});

export default VALID_CONSTANTS_CONFIG;
