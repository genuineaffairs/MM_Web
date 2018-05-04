export const fetchStarredMatchesHelper = () => {
  return `
  SELECT match.id, user1_id, user2_id, activevoting, starred, decision FROM MATCH
  INNER JOIN outcomes
  ON match.id=outcomes.matchid
  WHERE starred=1
  AND outcomes.userid=$1
  ORDER BY match.id DESC
  `;
};

export const fetchAllMatchesHelper = () => {
  return `
  SELECT match.id, user1_id, user2_id, activevoting, starred, decision FROM MATCH
  INNER JOIN outcomes
  ON match.id=outcomes.matchid
  WHERE outcomes.userid=$1
  ORDER BY match.id DESC
  LIMIT 10;
  `;
};

export const fetchStageTwoResultsHelper = (matchid) => {
  return `
  SELECT firstaccept, secondaccept, firstrejection, isSuccessful, active FROM STAGETWO
  WHERE matchid=${matchid}
  `;
};

export const starSingleMatchHelper = () => {
  return `
  UPDATE outcomes
  SET starred = 1
  WHERE matchid=$1
  AND userid=$2
  `;
};

export const unstarSingleMatchHelper = () => {
  return `
  UPDATE outcomes
  SET starred = 0
  WHERE matchid=$1
  AND userid = $2
  `;
};

export const addOutcomesHelper = () => {
  return `
  INSERT INTO outcomes
  (userid, matchid, starred, decision)
  VALUES ($1, $2, $3, $4)
  RETURNING *;
  `;
};

export const fetchOneOutcomesHelper = () => {
  return `
  SELECT * FROM outcomes
  WHERE userid=$1 AND matchid=$2;
  `;
};
