function prefixWithReplacement(
  href = "https://www.steadylearner.com",
  prefixWithReplacement = ["s-", "https://"],
) {
  const replaceItOrNot = href.startsWith(prefixWithReplacement[0])
  if (replaceItOrNot) {
    return `${prefixWithReplacement[1]}${href.split(prefixWithReplacement[0])[1]}`;
  } else {
    return href;
  }
}

function prefixesWithReplacements(
  href = "https://www.steadylearner.com",
  prefixesWithReplacements = [
    ["s-", "https://"],
  ],
) {
  const isHrefeIncludeAnyPrefix = prefixesWithReplacements.filter(x => href.startsWith(x[0]));

  if(isHrefeIncludeAnyPrefix.length === 1) { // === i instead of > 0 to be more precise
    return `${isHrefeIncludeAnyPrefix[0][1]}${href.split(isHrefeIncludeAnyPrefix[0][0])[1]}`
  } else {
    return href;
  }
}

module.exports = {
  prefixWithReplacement,
  prefixesWithReplacements,
};
