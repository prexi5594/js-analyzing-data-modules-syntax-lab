


module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};


function combineUsers(...userArrays) {
  const users = [...userArrays.flat()];

  const merge_date = new Date().toLocaleDateString();

  return {
    users,
    merge_date
  };
}

module.exports = {
  combineUsers
};
