import deepFreeze from '../../utils/deepFeeze.js';

const REGEX_CONFIG = deepFreeze({
  EXCLUDED_CHARACTERS_REGEX_PATTERN: /[^ㄱ-ㅎ가-힣a-zA-Z0-9]/,
});

export default REGEX_CONFIG;
