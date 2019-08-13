export const statusTypes = {
  strongNegative: 1,
  negative: 2,
  neutral: 3,
  positive: 4,
  strongPositive: 5
}

export let statusText = {};
statusText[statusTypes.strongNegative] = "Aweful";
statusText[statusTypes.negative] = "Not Great";
statusText[statusTypes.neutral] = "Not Bad";
statusText[statusTypes.positive] = "Pretty Good";
statusText[statusTypes.strongPositive] = "Fantastic";
