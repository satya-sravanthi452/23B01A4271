const weight = {
  Placement: 3,
  Result: 2,
  Event: 1,
};

export const getPriority = (notifications = [], topN = 10) => {
  return [...notifications]
    .sort((a, b) => {
      const weightA = weight[a.Type] || 0;
      const weightB = weight[b.Type] || 0;

      if (weightB !== weightA) {
        return weightB - weightA;
      }

      return new Date(b.Timestamp || 0) - new Date(a.Timestamp || 0);
    })
    .slice(0, topN);
};