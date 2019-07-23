/* global ga */
function trackEvent(options) {
  if (typeof ga === 'function') {
    ga('send', 'event', options);
  }
}

function getVersionBasePath(version) {
  return `/v${version}`;
}

function formatValue(baseUrl, value) {
  return value.startsWith('/') ? baseUrl + value : value;
}

function generateSubpage([value, text]) {
  return {
    value,
    text
  };
}

function generateNavItems(baseUrl, config) {
  return Object.entries(config).map(
    ([value, {text, matchRegex, subpages}]) => ({
      text,
      value: formatValue(baseUrl, value),
      matchRegex,
      subpages: subpages && Object.entries(subpages).map(generateSubpage)
    })
  );
}

exports.trackEvent = trackEvent;
exports.getVersionBasePath = getVersionBasePath;
exports.formatValue = formatValue;
exports.generateNavItems = generateNavItems;
exports.GA_EVENT_CATEGORY_CODE_BLOCK = 'Code Block';
exports.GA_EVENT_CATEGORY_SIDEBAR = 'Sidebar';
