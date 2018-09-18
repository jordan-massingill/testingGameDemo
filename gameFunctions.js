module.exports = {
  enhance,
  fail,
  repair,
};

function enhance(item) {
  let level = item.level;
  const failCount = 0;
  if (level < 15) {
    return { ...item, level: ++level };
  }
  else if (level === 15) {
    return {...item, failCount, level: 'I'};
  }
  else if (level === 'I') {
    return {...item, failCount, level: 'II'};
  }
  else if (level === 'II') {
    return {...item, failCount, level: 'III'};
  }
  else if (level === 'III') {
    return {...item, failCount, level: 'IV'};
  }
  else if (level === 'IV') {
    return {...item, failCount, level: 'V'}
  }
  else {
    return {...item, message: 'This item is already at its highest level!'}
  }
};

function fail(item) {
  let failCount = item.failCount;
  let durability = item.durability;

  if (item.level <= 15) {
    failCount += 1;
    durability -= 5
  }
  else if (item.level === 'I') {
    failCount += 2;
    durability -= 10;
  }
  else if (item.level === 'II') {
    failCount += 3;
    durability -= 15;
  }
  else if (item.level === 'III') {
    failCount += 4;
    durability -= 20;
  }
  else if (item.level === 'IV') {
    failCount += 5;
    durability -= 25
  }
  else if (item.level === 'V') {
    failCount += 6;
    durability -= 30;
  }
  return { ...item, durability, failCount };
}

function repair(item) {
  let durability = item.durability;

  if (durability <= 90) {
    durability += 10;
  }
  else if (durability > 90) {
    durability = 100;
  }

  return { ...item, durability };
}
