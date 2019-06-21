export const statusTypes = {
  strongNegative: 1,
  negative: 2,
  neutral: 3,
  positive: 4,
  strongPositive: 5
}

export let statusText = {};
statusText[statusTypes.strongNegative] = "very sad";
statusText[statusTypes.negative] = "sad";
statusText[statusTypes.neutral] = "neutral";
statusText[statusTypes.positive] = "happy";
statusText[statusTypes.strongPositive] = "very happy";
